import numpy as np

from dataclasses import dataclass
from ReplayTables.ReplayBuffer import ReplayBuffer
from ReplayTables.sampling.BackwardsSampler import BackwardsSampler

@dataclass
class BackwardsReplayConfig:
    reset_probability: float = 0.05
    jump: int = 1

class BackwardsReplay(ReplayBuffer):
    def __init__(self, max_size: int, lag: int, rng: np.random.Generator, config: BackwardsReplayConfig | None = None):
        super().__init__(max_size, lag, rng)

        self._c = config or BackwardsReplayConfig()
        self._sampler: BackwardsSampler = BackwardsSampler(
            rng=rng,
            storage=self._storage,
            mapper=self._idx_mapper,
            reset_probability=self._c.reset_probability,
            jump=self._c.jump,
        )
