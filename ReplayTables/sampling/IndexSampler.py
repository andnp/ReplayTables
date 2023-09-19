import numpy as np
from abc import abstractmethod
from typing import Any
from ReplayTables.interface import IDX, IDXs, LaggedTimestep, Batch
from ReplayTables.Distributions import UniformDistribution
from ReplayTables.storage.Storage import Storage
from ReplayTables.ingress.IndexMapper import IndexMapper

class IndexSampler:
    def __init__(self, rng: np.random.Generator, storage: Storage, mapper: IndexMapper) -> None:
        self._rng = rng
        self._storage = storage
        self._mapper = mapper
        self._max_size = storage.max_size
        self._target = UniformDistribution(storage.max_size)

    @abstractmethod
    def replace(self, idx: IDX, transition: LaggedTimestep, /, **kwargs: Any) -> None:
        ...

    @abstractmethod
    def update(self, idxs: IDXs, batch: Batch, /, **kwargs: Any) -> None:
        ...

    @abstractmethod
    def isr_weights(self, idxs: IDXs) -> np.ndarray:
        ...

    @abstractmethod
    def sample(self, n: int) -> IDXs:
        ...
