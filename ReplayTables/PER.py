import numpy as np
from dataclasses import dataclass
from typing import Any
from ReplayTables.interface import LaggedTimestep, Batch, Item, TransId
from ReplayTables.ReplayBuffer import ReplayBuffer
from ReplayTables.sampling.PrioritySampler import PrioritySampler
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.storage.Storage import Storage

@dataclass
class PERConfig:
    new_priority_mode: str = 'max'
    uniform_probability: float = 1e-3
    priority_exponent: float = 0.5
    max_decay: float = 1.

class PrioritizedReplay(ReplayBuffer):
    def __init__(
        self,
        max_size: int,
        lag: int,
        rng: np.random.Generator,
        config: PERConfig | None = None,
        idx_mapper: IndexMapper | None = None,
        storage: Storage | None = None,
    ):
        super().__init__(max_size, lag, rng, idx_mapper=idx_mapper, storage=storage)

        self._c = config or PERConfig()
        self._sampler = PrioritySampler(
            rng=self._rng,
            max_size=self._storage.max_size,
            uniform_probability=self._c.uniform_probability,
        )

        self._max_priority = 1e-16

    def _on_add(self, item: Item, transition: LaggedTimestep):
        if transition.extra is not None and 'priority' in transition.extra:
            priority = transition.extra['priority']

        elif self._c.new_priority_mode == 'max':
            priority = self._max_priority

        elif self._c.new_priority_mode == 'mean':
            assert isinstance(self._sampler, PrioritySampler)
            total_priority = self._sampler.total_priority()
            priority = total_priority / self.size()
            if priority == 0:
                priority = 1e-16

        else:
            raise NotImplementedError()

        self._sampler.replace(item.storage_idx, transition, priority=priority)

    def update_batch(self, batch: Batch, **kwargs: Any):
        priorities = kwargs['priorities']
        return self.update_priorities(batch, priorities)

    def update_priorities(self, batch: Batch, priorities: np.ndarray):
        idxs = self._idx_mapper.get_storage_idxs(batch.trans_id)

        priorities = np.abs(priorities) ** self._c.priority_exponent
        self._sampler.update(idxs, batch, priorities=priorities)

        self._max_priority = max(
            self._c.max_decay * self._max_priority,
            priorities.max(),
        )

    def delete_sample(self, tid: TransId):
        storage_idx = self._idx_mapper.get_storage_idx(tid)

        assert isinstance(self._sampler, PrioritySampler)
        self._sampler.mask_sample(storage_idx)
