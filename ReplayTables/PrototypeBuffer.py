import numpy as np

from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.sampling.IndexSampler import IndexSampler
from ReplayTables.storage.Storage import Storage
from ReplayTables.ReplayBuffer import ReplayBuffer

from ReplayTables.ingress.RandomIndexer import RandomIndexer

class RandomEgressBuffer(ReplayBuffer):
    def __init__(
            self,
            max_size: int,
            lag: int,
            rng: np.random.Generator,
            idx_mapper: IndexMapper | None = None,
            storage: Storage | None = None,
            sampler: IndexSampler | None = None,
    ):
        super().__init__(max_size, lag, rng, idx_mapper=idx_mapper, storage=storage, sampler=sampler)
        self._idx_mapper: IndexMapper = RandomIndexer(max_size, rng=self._rng)
        