import pytest
import numpy as np

from typing import Type
from ReplayTables.interface import Timestep

from ReplayTables.ReplayBuffer import ReplayBuffer
from ReplayTables.BackwardsReplay import BackwardsReplay
from ReplayTables.PER import PrioritizedReplay
from ReplayTables.PSER import PrioritizedSequenceReplay

BUFFERS = [
    ReplayBuffer,
    BackwardsReplay,
    PrioritizedReplay,
    PrioritizedSequenceReplay,
]

# ----------------
# -- Benchmarks --
# ----------------
@pytest.mark.parametrize('Buffer', BUFFERS)
def test_1_step_loop(benchmark, Buffer: Type[ReplayBuffer]):
    benchmark.name = Buffer.__name__
    benchmark.group = 'integration | 1-step'

    def rl_loop(buffer: ReplayBuffer, d):
        for _ in range(100):
            buffer.add_step(d)
            if buffer.size() > 1:
                _ = buffer.sample(32)

    rng = np.random.default_rng(0)
    buffer = Buffer(30, 1, rng)
    d = Timestep(
        x=np.zeros(50),
        a=0,
        r=0.1,
        gamma=0.99,
        terminal=False,
    )

    benchmark(rl_loop, buffer, d)

@pytest.mark.parametrize('Buffer', BUFFERS)
def test_3_step_loop(benchmark, Buffer: Type[ReplayBuffer]):
    benchmark.name = Buffer.__name__
    benchmark.group = 'integration | 3-step'

    def rl_loop(buffer: ReplayBuffer, d):
        for _ in range(100):
            buffer.add_step(d)
            if buffer.size() > 1:
                _ = buffer.sample(32)

    rng = np.random.default_rng(0)
    buffer = ReplayBuffer(30, 3, rng)
    d = Timestep(
        x=np.zeros(50),
        a=0,
        r=0.1,
        gamma=0.99,
        terminal=False,
    )

    benchmark(rl_loop, buffer, d)
