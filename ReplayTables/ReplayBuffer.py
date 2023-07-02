import numpy as np
from abc import abstractmethod
from typing import Any, Tuple
from ReplayTables.Distributions import UniformDistribution
from ReplayTables.interface import Timestep, Batch, EID, EIDs
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.ingress.CircularMapper import CircularMapper
from ReplayTables.storage.BasicStorage import BasicStorage
from ReplayTables.storage.Storage import Storage
from ReplayTables._utils.LagBuffer import LagBuffer

class ReplayBufferInterface:
    def __init__(self, max_size: int, lag: int, rng: np.random.Generator):
        self._max_size = max_size
        self._lag = lag
        self._rng = rng

        self._lag_buffer = LagBuffer[Tuple[EID, Timestep, Any]](maxlen=lag)
        self._idx_mapper: IndexMapper = CircularMapper(max_size + lag)
        self._storage: Storage = BasicStorage(max_size + lag, self._idx_mapper)

    def size(self) -> int:
        return max(0, len(self._storage) - self._lag)

    def add(self, transition: Timestep, /, **kwargs: Any):
        eid = self._storage.add(transition)

        last = self._lag_buffer.push((eid, transition, kwargs))
        if last is not None:
            self._on_add(
                last[0],
                last[1],
                **last[2],
            )

        return eid

    def sample(self, n: int) -> Tuple[Batch, EIDs, np.ndarray]:
        eids = self._sample_eids(n)
        weights = self._isr_weights(eids)
        return self.get(eids), eids, weights

    def get(self, eids: EIDs):
        return self._storage.get(eids, self._lag)

    # required private methods
    @abstractmethod
    def _sample_eids(self, n: int) -> EIDs: ...

    @abstractmethod
    def _isr_weights(self, idxs: EIDs) -> np.ndarray: ...

    @abstractmethod
    def _on_add(self, eid: EID, transition: Timestep, /, **kwargs: Any): ...

class ReplayBuffer(ReplayBufferInterface):
    def __init__(self, max_size: int, lag: int, rng: np.random.Generator):
        super().__init__(max_size, lag, rng)
        self._idx_dist = UniformDistribution(0)

    def _on_add(self, idx: EID, transition: Timestep, /, **kwargs: Any):
        self._idx_dist.update(self.size())

    def _sample_eids(self, n: int):
        return self._idx_dist.sample(self._rng, n)

    def _isr_weights(self, idxs: np.ndarray):
        return np.ones(len(idxs))
