import numpy as np
from abc import abstractmethod
from typing import Any
from ReplayTables.interface import LaggedTimestep, Batch, StorageIdx, StorageIdxs
from ReplayTables.Distributions import UniformDistribution
from ReplayTables.storage.Storage import Storage
from ReplayTables.ingress.IndexMapper import IndexMapper

_tmp: Any = None

class IndexSampler:
    def __init__(self, rng: np.random.Generator, max_size: int) -> None:
        self._rng = rng
        self._storage: Storage = _tmp
        self._mapper: IndexMapper = _tmp
        self._max_size = max_size
        self._target = UniformDistribution(max_size)

        self._built = False

    def deferred_init(self, storage: Storage, mapper: IndexMapper):
        assert not self._built
        self._storage = storage
        self._mapper = mapper
        self._built = True

    @abstractmethod
    def replace(self, idx: StorageIdx, transition: LaggedTimestep, /, **kwargs: Any) -> None:
        ...

    @abstractmethod
    def update(self, idxs: StorageIdxs, batch: Batch, /, **kwargs: Any) -> None:
        ...

    @abstractmethod
    def isr_weights(self, idxs: StorageIdxs) -> np.ndarray:
        ...

    @abstractmethod
    def sample(self, n: int) -> StorageIdxs:
        ...

    @abstractmethod
    def stratified_sample(self, n: int) -> StorageIdxs:
        ...
