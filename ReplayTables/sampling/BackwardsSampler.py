import numpy as np
from typing import Any
from ReplayTables.sampling.IndexSampler import IndexSampler
from ReplayTables.interface import IDX, IDXs, EIDs, LaggedTimestep, Batch
from ReplayTables.sampling.tools import back_sequence, in_set


class BackwardsSampler(IndexSampler):
    def __init__(
        self,
        rng: np.random.Generator,
        max_size: int,
        jump: int,
        reset_probability: float,
    ) -> None:
        super().__init__(rng, max_size)
        self._reset = reset_probability
        self._jump = jump
        self._batch_size: int | None = None
        self._prior_eids: EIDs | None = None

        self._terminal = set[int]()
        # numba needs help with type inference
        # so add a dummy value to the set
        self._terminal.add(-1)

    def replace(self, idx: IDX, transition: LaggedTimestep, /, **kwargs: Any) -> None:
        self._terminal.discard(idx)
        if transition.terminal:
            self._terminal.add(idx)

    def update(self, idxs: IDXs, batch: Batch, /, **kwargs: Any) -> None:
        ...

    def isr_weights(self, idxs: IDXs):
        return np.ones(len(idxs))

    def sample(self, n: int) -> IDXs:
        idxs: Any = self._rng.integers(0, self._mapper.size, size=n, dtype=np.int64)
        reset_eids = self._storage.meta.get_items_by_idx(idxs).eids

        if self._prior_eids is None or self._batch_size != n:
            self._prior_eids = reset_eids
            self._batch_size = n
            return idxs

        eids: Any = self._prior_eids - self._jump

        back_seq = back_sequence(self._prior_eids, self._jump)
        back_seq = back_seq.reshape(n * self._jump)

        is_term = in_set(back_seq, self._terminal)
        is_term = is_term.reshape((n, self._jump))
        is_term = np.any(is_term, axis=1)

        is_valid = self._mapper.has_eids(eids)
        should_reset = is_term | (1 - is_valid) | (self._rng.random(size=n) < self._reset)

        new_eids = (1 - should_reset) * eids + should_reset * reset_eids
        self._prior_eids = new_eids

        return self._mapper.eids2idxs(new_eids)

    def stratified_sample(self, n: int) -> IDXs:
        raise NotImplementedError()
