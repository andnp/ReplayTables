import numpy as np
from typing import Any, Dict
from ReplayTables.ReplayBuffer import ReplayBuffer

from ReplayTables.BackwardsReplay import BackwardsReplay, BackwardsReplayConfig
from ReplayTables.PER import PrioritizedReplay, PERConfig
from ReplayTables.PSER import PrioritizedSequenceReplay, PSERConfig
from ReplayTables.PrototypeBuffer import RandomEgressBuffer

def build_buffer(buffer_type: str, max_size: int, lag: int, rng: np.random.Generator, config: Dict[str, Any]) -> ReplayBuffer:
    buffer_type = buffer_type.lower()

    # TODO: remove once mypy fixes typing inference
    c: Any = None

    if buffer_type == 'uniform' or buffer_type == 'standard':
        return ReplayBuffer(max_size, lag, rng)

    elif buffer_type == 'backwards':
        c = BackwardsReplayConfig(**config)
        return BackwardsReplay(max_size, lag, rng, c)

    elif buffer_type == 'per':
        c = PERConfig(**config)
        return PrioritizedReplay(max_size, lag, rng, c)

    elif buffer_type == 'pser':
        c = PSERConfig(**config)
        return PrioritizedSequenceReplay(max_size, lag, rng, c)

    elif buffer_type == 'random_egress':
        return RandomEgressBuffer(max_size, lag, rng)

    raise Exception('Unable to determine type of buffer')
