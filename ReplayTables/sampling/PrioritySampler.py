import numpy as np
from typing import Any
from ReplayTables.Distributions import MixinUniformDistribution, SubDistribution, PrioritizedDistribution, MixtureDistribution
from ReplayTables.interface import IDX, IDXs, LaggedTimestep, Batch
from ReplayTables.sampling.IndexSampler import IndexSampler

class PrioritySampler(IndexSampler):
    def __init__(
        self,
        rng: np.random.Generator,
        max_size: int,
        uniform_probability: float,
    ) -> None:
        super().__init__(rng, max_size)

        self._target.update(self._max_size)

        self._uniform = MixinUniformDistribution()
        self._p_dist = PrioritizedDistribution()
        self._dist = MixtureDistribution(self._max_size, dists=[
            SubDistribution(d=self._p_dist, p=1 - uniform_probability),
            SubDistribution(d=self._uniform, p=uniform_probability)
        ])

    def replace(self, idx: IDX, transition: LaggedTimestep, /, **kwargs: Any) -> None:
        idxs = np.array([idx], dtype=np.int64)

        priority: float = kwargs['priority']
        priorities = np.array([priority])
        self._uniform.update(idxs)
        self._p_dist.update(idxs, priorities)

    def update(self, idxs: IDXs, batch: Batch, /, **kwargs: Any) -> None:
        priorities = kwargs['priorities']
        self._uniform.update(idxs)
        self._p_dist.update(idxs, priorities)

    def isr_weights(self, idxs: IDXs):
        return self._dist.isr(self._target, idxs)

    def sample(self, n: int) -> IDXs:
        idxs: Any = self._dist.sample(self._rng, n)
        return idxs

    def stratified_sample(self, n: int) -> IDXs:
        idxs: Any = self._dist.stratified_sample(self._rng, n)
        return idxs

    def mask_sample(self, idx: IDX):
        idxs = np.array([idx], dtype=np.int64)
        zero = np.zeros(1)

        self._p_dist.update(idxs, zero)
        self._uniform.set(idxs, zero)

    def total_priority(self):
        return self._p_dist.tree.dim_total(self._p_dist.dim)
