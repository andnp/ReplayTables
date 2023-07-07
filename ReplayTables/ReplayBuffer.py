import numpy as np
from abc import abstractmethod
from typing import Any, Tuple
from ReplayTables.interface import Timestep, Batch, EID, EIDs
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.ingress.CircularMapper import CircularMapper
from ReplayTables.sampling.IndexSampler import IndexSampler
from ReplayTables.sampling.UniformSampler import UniformSampler
from ReplayTables.storage.BasicStorage import BasicStorage
from ReplayTables.storage.Storage import Storage
from ReplayTables._utils.LagBuffer import LagBuffer

class ReplayBufferInterface:
    def __init__(self, max_size: int, lag: int, rng: np.random.Generator):
        self._max_size = max_size
        self._lag = lag
        self._rng = rng

        self._t = 0
        self._lag_buffer = LagBuffer[Tuple[EID, Timestep, Any]](maxlen=lag)
        self._idx_mapper: IndexMapper = CircularMapper(max_size + lag)
        self._sampler: IndexSampler = UniformSampler(self._rng)
        self._storage: Storage = BasicStorage(max_size + lag)

    def size(self) -> int:
        return max(0, len(self._storage) - self._lag)

    def add(self, transition: Timestep, /, **kwargs: Any):
        eid = self._next_eid()
        idx = self._idx_mapper.add_eid(eid)
        self._storage.add(idx, eid, transition)

        last = self._lag_buffer.push((eid, transition, kwargs))
        if last is not None:
            self._on_add(
                last[0],
                last[1],
                **last[2],
            )

        return eid

    def sample(self, n: int) -> Tuple[Batch, np.ndarray]:
        idxs = self._sampler.sample(n)
        eids = self._storage.get_eids(idxs)

        n_eids: Any = eids + self._lag
        n_idxs = self._idx_mapper.eids2idxs(n_eids)

        weights = self._sampler.isr_weights(idxs)
        samples = self._storage.get(idxs, n_idxs, self._lag)
        return samples, weights

    def get(self, eids: EIDs):
        idxs = self._idx_mapper.eids2idxs(eids)
        n_eids: Any = eids + self._lag
        n_idxs = self._idx_mapper.eids2idxs(n_eids)
        return self._storage.get(idxs, n_idxs, self._lag)

    def _next_eid(self) -> EID:
        eid: Any = self._t
        self._t += 1
        return eid

    def _last_eid(self) -> EID:
        assert self._t > 0, "No previous EID!"
        last: Any = self._t - 1
        return last

    @abstractmethod
    def _on_add(self, eid: EID, transition: Timestep, /, **kwargs: Any): ...

class ReplayBuffer(ReplayBufferInterface):
    def __init__(self, max_size: int, lag: int, rng: np.random.Generator):
        super().__init__(max_size, lag, rng)

    def _on_add(self, eid: EID, transition: Timestep, /, **kwargs: Any):
        idx = self._idx_mapper.add_eid(eid)
        self._sampler.replace(idx, **kwargs)
