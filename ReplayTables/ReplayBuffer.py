import numpy as np
from abc import abstractmethod
from typing import Any
from ReplayTables._utils.logger import logger
from ReplayTables.interface import Timestep, LaggedTimestep, Batch, EID, EIDs, Item
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.ingress.CircularMapper import CircularMapper
from ReplayTables.ingress.LagBuffer import LagBuffer
from ReplayTables.sampling.IndexSampler import IndexSampler
from ReplayTables.sampling.UniformSampler import UniformSampler
from ReplayTables.storage.BasicStorage import BasicStorage
from ReplayTables.storage.Storage import Storage

class ReplayBufferInterface:
    def __init__(
        self,
        max_size: int,
        rng: np.random.Generator,
        idx_mapper: IndexMapper | None = None,
        storage: Storage | None = None,
        sampler: IndexSampler | None = None,
    ):
        self._max_size = max_size
        self._rng = rng

        self._t = 0
        self._idx_mapper: IndexMapper = idx_mapper or CircularMapper(max_size)
        self._storage: Storage = storage or BasicStorage(max_size)
        self._sampler: IndexSampler = sampler or UniformSampler(self._rng, max_size)

        self._built = False

    def _deferred_init(self):
        self._sampler.deferred_init(self._storage, self._idx_mapper)
        self._built = True

    def size(self) -> int:
        return max(0, len(self._storage))

    def add(self, transition: LaggedTimestep):
        if not self._built: self._deferred_init()

        idx = self._idx_mapper.add_eid(transition.eid)
        item = self._storage.add(idx, transition)
        self._on_add(item, transition)

    def sample(self, n: int) -> Batch:
        idxs = self._sampler.sample(n)
        samples = self._storage.get(idxs)
        return samples

    def stratified_sample(self, n: int) -> Batch:
        idxs = self._sampler.stratified_sample(n)
        samples = self._storage.get(idxs)
        return samples

    def sample_without_replacement(self, n: int) -> Batch:
        # most of the time, we get unique idxs in the first sample
        # so we fastpath past the type conversions and set additions
        # for that common case for performance reasons.
        sub_idxs = self._sampler.sample(n)
        uniq_idxs = set(sub_idxs)

        if len(uniq_idxs) < n:
            for _ in range(25):
                sub_idxs = self._sampler.sample(n)
                uniq_idxs |= set(sub_idxs)

        idx_list = list(uniq_idxs)
        if len(idx_list) < n:
            logger.warn(f'Failed to get <{n}> required unique samples. Got <{len(idx_list)}>')

        if len(idx_list) > n:
            idx_list = idx_list[:n]

        idxs: Any = np.asarray(idx_list, dtype=np.int64)
        return self._storage.get(idxs)

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

    def use_storage(self, storage: Storage):
        assert self._max_size <= storage.max_size
        self._storage = storage

    def update_batch(self, batch: Batch, **kwargs: Any): ...

    @abstractmethod
    def _on_add(self, item: Item, transition: LaggedTimestep): ...

class ReplayBuffer(ReplayBufferInterface):
    def __init__(
            self,
            max_size: int,
            lag: int,
            rng: np.random.Generator,
            idx_mapper: IndexMapper | None = None,
            storage: Storage | None = None,
            sampler: IndexSampler | None = None,
    ):

        super().__init__(max_size, rng, idx_mapper=idx_mapper, sampler=sampler, storage=storage)
        self._lag_buffer = LagBuffer(lag)

    def add_step(self, transition: Timestep):
        out = self._lag_buffer.add(transition)
        for d in out:
            self.add(d)

        return out

    def flush(self):
        self._lag_buffer.flush()

    def _on_add(self, item: Item, transition: LaggedTimestep):
        self._sampler.replace(item.idx, transition)
