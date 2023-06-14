import numpy as np
import pickle
from dataclasses import dataclass, fields
from typing import NamedTuple

from ReplayTables.ReplayBuffer import ReplayBuffer

class Data(NamedTuple):
    a: float | np.ndarray
    b: int | np.ndarray

@dataclass
class Data2:
    b: float | np.ndarray
    c: float | np.ndarray

    def __iter__(self):
        return (getattr(self, field.name) for field in fields(self))

class TestReplayBuffer:
    def test_simple_buffer(self):
        rng = np.random.default_rng(0)
        buffer = ReplayBuffer(5, Data, rng)

        # on creation, the buffer should have no size
        assert buffer.size() == 0

        # should be able to simply add and sample a single data point
        d = Data(a=0.1, b=1)
        buffer.add(d)
        assert buffer.size() == 1
        samples, idxs, weights = buffer.sample(10)
        assert np.all(samples.b == 1)
        assert np.all(idxs == 0)
        assert np.all(weights == 1)

        # should be able to add a few more points
        for i in range(4):
            x = i + 2
            buffer.add(Data(a=x / 10, b=x))

        assert buffer.size() == 5
        samples, idxs, weights = buffer.sample(1000)

        unique = np.unique(samples.b)
        unique.sort()

        assert np.all(unique == np.array([1, 2, 3, 4, 5]))

        # buffer drops the oldest element when over max size
        buffer.add(Data(a=0.6, b=6))
        assert buffer.size() == 5

        samples, _, _ = buffer.sample(1000)
        unique = np.unique(samples.b)
        unique.sort()
        assert np.all(unique == np.array([2, 3, 4, 5, 6]))

        # -------------------------------
        # Can also handle other iterables

        rng = np.random.default_rng(0)
        buffer = ReplayBuffer(5, Data2, rng)
        buffer.add(Data2(1, 2))
        buffer.add(Data2(2, 3))

        samples, _, _ = buffer.sample(2)
        assert np.all(samples.b == np.array([2, 2]))

    def test_pickleable(self):
        rng = np.random.default_rng(0)
        buffer = ReplayBuffer(5, Data, rng)

        for i in range(8):
            buffer.add(Data(a=i, b=i))

        byt = pickle.dumps(buffer)
        buffer2 = pickle.loads(byt)

        s, _, _ = buffer.sample(3)
        s2, _, _ = buffer2.sample(3)

        assert np.all(s.a == s2.a) and np.all(s.b == s2.b)

# ----------------
# -- Benchmarks --
# ----------------
class TestBenchmarks:
    def test_replay_buffer_add(self, benchmark):
        rng = np.random.default_rng(0)
        buffer = ReplayBuffer(100_000, Data, rng)
        d = Data(0, 1)

        def _inner(buffer, d):
            buffer.add(d)

        benchmark(_inner, buffer, d)

    def test_replay_buffer_sample(self, benchmark):
        rng = np.random.default_rng(0)
        buffer = ReplayBuffer(100_000, Data, rng)
        d = Data(0, 1)

        for _ in range(100_000):
            buffer.add(d)

        def _inner(buffer):
            buffer.sample(32)

        benchmark(_inner, buffer)
