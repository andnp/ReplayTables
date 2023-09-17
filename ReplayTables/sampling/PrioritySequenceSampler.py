import numpy as np

from dataclasses import dataclass
from typing import Any, Set
from numba.typed import List as NList

from ReplayTables.Distributions import PrioritizedDistribution, SubDistribution, MixtureDistribution
from ReplayTables.sampling.PrioritySampler import PrioritySampler
from ReplayTables.interface import IDX, Batch, IDXs, LaggedTimestep
from ReplayTables._utils.jit import try2jit

class PrioritySequenceSampler(PrioritySampler):
    def __init__(
        self,
        uniform_probability: float,
        trace_decay: float,
        trace_depth: int,
        combinator: str,
        max_size: int,
        rng: np.random.Generator,
    ) -> None:
        super().__init__(uniform_probability, max_size, rng)

        self._terminal = set[int]()
        # numba needs help with type inference
        # so add a dummy value to the set
        self._terminal.add(-1)

        seq_config = PSDistributionConfig(
            trace_decay=trace_decay,
            trace_depth=trace_depth,
            combinator=combinator,
        )
        self._ps_dist = PrioritizedSequenceDistribution(seq_config)

        self._dist = MixtureDistribution(max_size, dists=[
            SubDistribution(d=self._ps_dist, p=1 - uniform_probability),
            SubDistribution(d=self._uniform, p=uniform_probability)
        ])

    def replace(self, idx: IDX, transition: LaggedTimestep, /, **kwargs: Any) -> None:
        self._size = max(idx + 1, self._size)
        self._terminal.discard(idx)
        if transition.terminal:
            self._terminal.add(idx)

        return super().replace(idx, transition, **kwargs)

    def update(self, idxs: IDXs, batch: Batch, /, **kwargs: Any) -> None:
        priorities = kwargs['priorities']
        self._uniform.update(idxs)

        self._ps_dist.update_seq(idxs, priorities, terminal=self._terminal)


@dataclass
class PSDistributionConfig:
    trace_decay: float
    trace_depth: int
    combinator: str

class PrioritizedSequenceDistribution(PrioritizedDistribution):
    def __init__(self, config: PSDistributionConfig, size: int | None = None):
        super().__init__(config, size)

        self._c: PSDistributionConfig = config
        assert self._c.combinator in ['max', 'sum']

        # track how many things have been added to dist
        self._actual_size = 0

        # pre-compute and cache this
        self._trace = np.cumprod(np.ones(self._c.trace_depth) * self._c.trace_decay)

    def update_seq(self, idxs: IDXs, priorities: np.ndarray, terminal: Set[int]):
        self._actual_size = max(self._actual_size, idxs.max() + 1)

        u_idx, u_priorities = _update(
            self.tree.raw,
            self.dim,
            self._actual_size,
            idxs,
            priorities,
            self._c.combinator,
            self._trace,
            terminal,
        )

        self.tree.update(self.dim, u_idx, u_priorities)


@try2jit()
def _update(tree: NList[np.ndarray], d: int, size: int, idxs: np.ndarray, priorities: np.ndarray, comb: str, trace: np.ndarray, terms: Set[int]):
    depth = len(trace)
    out_idxs = np.empty(depth * len(idxs), dtype=np.int64)
    out = np.empty(depth * len(idxs))

    def c(a: float, b: float):
        if comb == 'sum':
            return a + b
        return max(a, b)

    j = 0
    for idx, v in zip(idxs, priorities):
        for i in range(depth):
            s_idx = (idx - (i + 1)) % size
            if s_idx in terms: break

            prior = tree[0][d, s_idx]
            new = c(prior, trace[i] * v)

            out_idxs[j] = s_idx
            out[j] = new
            j += 1

    return (
        np.concatenate((idxs, out_idxs[:j])).astype(np.int64),
        np.concatenate((priorities, out[:j])),
    )
