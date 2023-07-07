import numpy as np

from ReplayTables.ReplayBuffer import ReplayBuffer
from ReplayTables.interface import Timestep

# ----------------
# -- Benchmarks --
# ----------------
class TestBenchmarks:
    def test_1_step_loop(self, benchmark):
        def rl_loop(buffer: ReplayBuffer, d):
            for _ in range(100):
                buffer.add(d)
                if buffer.size() > 1:
                    _ = buffer.sample(32)

        rng = np.random.default_rng(0)
        buffer = ReplayBuffer(30, 1, rng)
        d = Timestep(
            x=np.zeros(50),
            a=0,
            r=0.1,
            gamma=0.99,
            terminal=False,
        )

        benchmark(rl_loop, buffer, d)

    def test_3_step_loop(self, benchmark):
        def rl_loop(buffer: ReplayBuffer, d):
            for _ in range(100):
                buffer.add(d)
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
