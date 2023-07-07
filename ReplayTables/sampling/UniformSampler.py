import numpy as np
from typing import Any
from ReplayTables.sampling.IndexSampler import IndexSampler
from ReplayTables.Distributions import UniformDistribution
from ReplayTables.interface import IDX, IDXs

class UniformSampler(IndexSampler):
    def __init__(self, rng: np.random.Generator) -> None:
        super().__init__(rng)
        self._dist = UniformDistribution(0)
        self._max = 0

    def replace(self, idx: IDX, /, **kwargs: Any) -> None:
        self._max = max(self._max, idx)
        self._dist.update(self._max + 1)

    def update(self, idxs: IDXs, /, **kwargs: Any) -> None:
        m = idxs.max()
        self._max = max(self._max, m)
        self._dist.update(self._max + 1)

    def isr_weights(self, idxs: IDXs):
        return np.ones(len(idxs))

    def sample(self, n: int) -> IDXs:
        idxs: Any = self._dist.sample(self._rng, n)
        return idxs
