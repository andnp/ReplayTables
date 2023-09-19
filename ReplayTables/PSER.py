import numpy as np
from dataclasses import dataclass
from typing import Optional
from ReplayTables.PER import PrioritizedReplay, PERConfig
from ReplayTables.sampling.PrioritySequenceSampler import PrioritySequenceSampler

@dataclass
class PSERConfig(PERConfig):
    trace_decay: float = 0.9
    trace_depth: int = 5
    combinator: str = 'sum'

class PrioritizedSequenceReplay(PrioritizedReplay):
    def __init__(self, max_size: int, lag: int, rng: np.random.Generator, config: Optional[PSERConfig] = None):
        super().__init__(max_size, lag, rng)

        self._c = config or PSERConfig()
        self._sampler: PrioritySequenceSampler = PrioritySequenceSampler(
            self._rng,
            self._storage,
            self._idx_mapper,
            self._c.uniform_probability,
            self._c.trace_decay,
            self._c.trace_depth,
            self._c.combinator,
        )
