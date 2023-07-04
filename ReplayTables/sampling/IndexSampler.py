import numpy as np
from abc import abstractmethod
from typing import Any
from ReplayTables.interface import IDX, IDXs
from ReplayTables.Distributions import UniformDistribution

class IndexSampler:
    def __init__(self, rng: np.random.Generator) -> None:
        self._rng = rng
        self._target = UniformDistribution(0)

    @abstractmethod
    def replace(self, idx: IDX) -> None:
        ...

    @abstractmethod
    def update(self, idxs: IDXs, /, **kwargs: Any) -> None:
        ...

    @abstractmethod
    def isr_weights(self, idxs: IDXs) -> np.ndarray:
        ...

    @abstractmethod
    def sample(self, n: int) -> IDXs:
        ...
