import numpy as np

from dataclasses import dataclass
from typing import Any, Set
from numba.typed import List as NList

from ReplayTables.Distributions import PrioritizedDistribution, SubDistribution, MixtureDistribution
from ReplayTables.sampling.PrioritySampler import PrioritySampler
from ReplayTables.storage.Storage import Storage
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.interface import IDX, Batch, IDXs, EIDs, LaggedTimestep
from ReplayTables._utils.jit import try2jit
from ReplayTables.sampling.tools import back_sequence

class PrioritySequenceSampler(PrioritySampler):
    def __init__(
        self,
        rng: np.random.Generator,
        storage: Storage,
        mapper: IndexMapper,
        uniform_probability: float,
        trace_decay: float,
        trace_depth: int,
        combinator: str,
    ) -> None:
        super().__init__(rng, storage, mapper, uniform_probability)

        self._terminal = set[int]()
        # numba needs help with type inference
        # so add a dummy value to the set
        self._terminal.add(-1)

        seq_config = PSDistributionConfig(
            trace_decay=trace_decay,
            trace_depth=trace_depth,
            combinator=combinator,
        )
        self._ps_dist = PrioritizedSequenceDistribution(seq_config, self._storage, self._mapper)

        self._dist = MixtureDistribution(self._max_size, dists=[
            SubDistribution(d=self._ps_dist, p=1 - uniform_probability),
            SubDistribution(d=self._uniform, p=uniform_probability)
        ])

    def replace(self, idx: IDX, transition: LaggedTimestep, /, **kwargs: Any) -> None:
        self._terminal.discard(idx)
        if transition.terminal:
            self._terminal.add(idx)

        return super().replace(idx, transition, **kwargs)

    def update(self, idxs: IDXs, batch: Batch, /, **kwargs: Any) -> None:
        priorities = kwargs['priorities']
        self._uniform.update(idxs)

        self._ps_dist.update_seq(batch.eid, idxs, priorities, terminal=self._terminal)


@dataclass
class PSDistributionConfig:
    trace_decay: float
    trace_depth: int
    combinator: str

class PrioritizedSequenceDistribution(PrioritizedDistribution):
    def __init__(self, config: PSDistributionConfig, storage: Storage, mapper: IndexMapper):
        super().__init__(config, None)

        self._c: PSDistributionConfig = config
        assert self._c.combinator in ['max', 'sum']

        self._storage = storage
        self._mapper = mapper

        # pre-compute and cache this
        self._trace = np.cumprod(np.ones(self._c.trace_depth) * self._c.trace_decay)

    def update_seq(self, eids: EIDs, idxs: IDXs, priorities: np.ndarray, terminal: Set[int]):
        b_eids: Any = back_sequence(eids, self._c.trace_depth)

        b_idxs = self._mapper.eids2idxs(b_eids)
        idx_mask = _term_sequence(b_idxs, terminal) | (~self._mapper.has_eids(b_eids))

        u_idx, u_priorities = _get_priorities(
            self.tree.raw,
            self.dim,
            b_idxs,
            idx_mask,
            self._trace,
            priorities,
            comb=self._c.combinator,
        )

        u_idx = np.concatenate((idxs, u_idx), axis=0, dtype=np.int64)
        u_priorities = np.concatenate((priorities, u_priorities), axis=0)

        self.tree.update(self.dim, u_idx, u_priorities)


@try2jit()
def _term_sequence(idxs: np.ndarray, term: Set[int]):
    assert len(idxs.shape) == 2

    out = np.empty(idxs.shape, dtype=np.bool_)
    for i in range(idxs.shape[0]):
        has_term = False
        for j in range(idxs.shape[1]):
            has_term = has_term or (idxs[i, j] in term)
            out[i, j] = has_term

    return out

@try2jit()
def _get_priorities(tree: NList[np.ndarray], d: int, idxs: np.ndarray, masks: np.ndarray, traces: np.ndarray, priorities: np.ndarray, comb: str):
    depth = len(traces)
    out_idxs = np.empty(depth * len(idxs), dtype=np.int64)
    out = np.empty(depth * len(idxs), dtype=np.float64)

    def c(a: float, b: float):
        if comb == 'sum':
            return a + b
        return max(a, b)

    k = 0
    for i in range(idxs.shape[0]):
        for j in range(depth):
            if masks[i, j]: continue

            idx = idxs[i, j]
            prior = tree[0][d, idx]
            new = c(prior, traces[j] * priorities[i])

            out_idxs[k] = idx
            out[k] = new
            k += 1

    return out_idxs[:k], out[:k]
