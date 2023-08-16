import numpy as np
from dataclasses import dataclass
from typing import Optional
from ReplayTables.interface import EID, LaggedTimestep, Batch
from ReplayTables.ReplayBuffer import ReplayBuffer
from ReplayTables.sampling.PrioritySampler import PrioritySampler

@dataclass
class PERConfig:
    new_priority_mode: str = 'max'
    uniform_probability: float = 1e-3
    priority_exponent: float = 0.5
    max_decay: float = 1.

class PrioritizedReplay(ReplayBuffer):
    def __init__(self, max_size: int, lag: int, rng: np.random.Generator, config: Optional[PERConfig] = None):
        super().__init__(max_size, lag, rng)

        self._c = config or PERConfig()
        self._sampler: PrioritySampler = PrioritySampler(
            self._c.uniform_probability,
            max_size,
            self._rng,
        )

        self._max_priority = 1e-16

    def _on_add(self, transition: LaggedTimestep):
        if transition.extra is not None and 'priority' in transition.extra:
            priority = transition.extra['priority']
        elif self._c.new_priority_mode == 'max':
            priority = self._max_priority
        elif self._c.new_priority_mode == 'mean':
            total_priority = self._sampler.total_priority()
            priority = total_priority / self.size()
            if priority == 0:
                priority = 1e-16
        else:
            raise NotImplementedError()

        idx = self._idx_mapper.eid2idx(transition.eid)
        self._sampler.replace(idx, transition, priority=priority)

    def update_priorities(self, batch: Batch, priorities: np.ndarray):
        idxs = self._idx_mapper.eids2idxs(batch.eid)

        priorities = priorities ** self._c.priority_exponent
        self._sampler.update(idxs, batch, priorities=priorities)

        self._max_priority = max(
            self._c.max_decay * self._max_priority,
            priorities.max(),
        )

    def delete_sample(self, eid: EID):
        idx = self._idx_mapper.eid2idx(eid)
        self._sampler.mask_sample(idx)
