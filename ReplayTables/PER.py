import numpy as np
from dataclasses import dataclass
from typing import cast, Any, Optional
from ReplayTables.Distributions import MixinUniformDistribution, MixtureDistribution, PrioritizedDistribution, SubDistribution, UniformDistribution
from ReplayTables.interface import EID, EIDs, Timestep
from ReplayTables.ReplayBuffer import ReplayBufferInterface

@dataclass
class PERConfig:
    new_priority_mode: str = 'max'
    uniform_probability: float = 1e-3
    priority_exponent: float = 0.5
    max_decay: float = 1.

class PrioritizedReplay(ReplayBufferInterface):
    def __init__(self, max_size: int, lag: int, rng: np.random.Generator, config: Optional[PERConfig] = None):
        super().__init__(max_size, lag, rng)

        self._c = config or PERConfig()
        self._target = UniformDistribution(max_size)

        p = 1 - self._c.uniform_probability

        self._uniform = MixinUniformDistribution()
        self._p_dist = PrioritizedDistribution()
        self._idx_dist = MixtureDistribution(max_size, dists=[
            SubDistribution(d=self._p_dist, p=p),
            SubDistribution(d=self._uniform, p=self._c.uniform_probability),
        ])

        self._max_priority = 1e-16

    def _sample_eids(self, n: int) -> EIDs:
        idxs = self._idx_dist.sample(self._rng, n)
        return cast(EIDs, np.asarray(idxs))

    def _on_add(self, eid: EID, transition: Timestep, /, **kwargs: Any):
        if 'priority' in kwargs:
            priority = kwargs['priority']
        elif self._c.new_priority_mode == 'max':
            priority = self._max_priority
        elif self._c.new_priority_mode == 'mean':
            total_priority = self._idx_dist.tree.dim_total(self._p_dist.dim)
            priority = total_priority / self.size()
            if priority == 0:
                priority = 1e-16
        else:
            raise NotImplementedError()

        idxs = np.array([eid])
        priorities = np.array([priority])
        self._p_dist.update(idxs, priorities)
        self._uniform.update(idxs)

    def _isr_weights(self, idxs: EIDs):
        return self._idx_dist.isr(self._target, idxs)

    def update_priorities(self, idxs: EIDs, priorities: np.ndarray):
        priorities = priorities ** self._c.priority_exponent
        self._p_dist.update(idxs, priorities)

        self._max_priority = max(
            self._c.max_decay * self._max_priority,
            priorities.max(),
        )

    def delete_sample(self, eid: EID):
        idx = np.array([eid])
        zero = np.zeros(1)

        self._p_dist.update(idx, zero)
        self._uniform.update(idx, zero)
