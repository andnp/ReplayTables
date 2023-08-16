import numpy as np
from abc import abstractmethod
from typing import Any
from ReplayTables.interface import Timestep, LaggedTimestep, Batch, EID, EIDs
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.ingress.CircularMapper import CircularMapper
from ReplayTables.ingress.LagBuffer import LagBuffer
from ReplayTables.sampling.IndexSampler import IndexSampler
from ReplayTables.sampling.UniformSampler import UniformSampler
from ReplayTables.storage.BasicStorage import BasicStorage
from ReplayTables.storage.Storage import Storage

class ReplayBufferInterface:
    def __init__(self, max_size: int, rng: np.random.Generator):
        self._max_size = max_size
        self._rng = rng

        self._t = 0
        self._idx_mapper: IndexMapper = CircularMapper(max_size)
        self._sampler: IndexSampler = UniformSampler(self._rng)
        self._storage: Storage = BasicStorage(max_size)

    def size(self) -> int:
        return max(0, len(self._storage))

    def add(self, transition: LaggedTimestep):
        idx = self._idx_mapper.add_eid(transition.eid)
        n_idx = None
        if transition.n_eid is not None:
            n_idx = self._idx_mapper.add_eid(transition.n_eid)

        self._storage.add(idx, n_idx, transition)
        self._on_add(transition)

    def sample(self, n: int) -> Batch:
        idxs = self._sampler.sample(n)
        samples = self._storage.get(idxs)
        return samples

    def isr_weights(self, eids: EIDs) -> np.ndarray:
        idxs = self._idx_mapper.eids2idxs(eids)
        weights = self._sampler.isr_weights(idxs)
        return weights

    def get(self, eids: EIDs):
        idxs = self._idx_mapper.eids2idxs(eids)
        return self._storage.get(idxs)

    def next_eid(self) -> EID:
        eid: Any = self._t
        self._t += 1
        return eid

    def last_eid(self) -> EID:
        assert self._t > 0, "No previous EID!"
        last: Any = self._t - 1
        return last

    @abstractmethod
    def _on_add(self, transition: LaggedTimestep): ...

class ReplayBuffer(ReplayBufferInterface):
    def __init__(self, max_size: int, lag: int, rng: np.random.Generator):
        super().__init__(max_size, rng)
        self._lag_buffer = LagBuffer(lag)

    def add_step(self, transition: Timestep):
        for d in self._lag_buffer.add(transition):
            self.add(d)

    def flush(self):
        self._lag_buffer.flush()

    def _on_add(self, transition: LaggedTimestep):
        idx = self._idx_mapper.add_eid(transition.eid)
        self._sampler.replace(idx, transition)
