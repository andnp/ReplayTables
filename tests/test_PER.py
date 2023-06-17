import pickle
import numpy as np
from typing import cast, NamedTuple

from ReplayTables.ReplayBuffer import EID, EIDS
from ReplayTables.PER import PrioritizedReplay

class Data(NamedTuple):
    a: float
    b: int


class TestPER:
    def test_simple_buffer(self):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(5, Data, rng)

        # on creation, the buffer should have no size
        assert buffer.size() == 0

        # should be able to simply add and sample a single data point
        d = Data(a=0.1, b=1)
        buffer.add(d)
        assert buffer.size() == 1
        samples, idxs, weights = buffer.sample(10)
        assert np.all(samples.b == 1)
        assert np.all(idxs == 0)
        assert np.all(weights == 0.2)

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

    def test_priority_on_add(self):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(5, Data, rng)

        d = Data(a=0.1, b=1)
        buffer.add(d, priority=1)
        d = Data(a=0.2, b=2)
        buffer.add(d, priority=2)

        batch, _, _ = buffer.sample(128)

        b = np.sum(batch.b == 2)
        a = np.sum(batch.b == 1)

        assert b == 91
        assert a == 37

    def test_pickeable(self):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(5, Data, rng)

        for i in range(5):
            buffer.add(Data(i, 2 * i))

        ids = cast(EIDS, np.arange(5))
        buffer.update_priorities(ids, np.arange(5) + 1)

        byt = pickle.dumps(buffer)
        buffer2 = pickle.loads(byt)

        s, _, _ = buffer.sample(20)
        s2, _, _ = buffer2.sample(20)

        assert np.all(s.a == s2.a) and np.all(s.b == s2.b)

    def test_delete_sample(self):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(5, Data, rng)

        for i in range(5):
            buffer.add(Data(i, 2 * i))

        batch, _, _, = buffer.sample(512)
        assert np.unique(batch.a).shape == (5,)

        buffer.delete_sample(cast(EID, 2))
        batch, _, _ = buffer.sample(512)
        assert np.unique(batch.a).shape == (4,)
        assert 2 not in batch.a

# ----------------
# -- Benchmarks --
# ----------------
class TestBenchmarks:
    def test_per_add(self, benchmark):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(100_000, Data, rng)
        d = Data(a=0.1, b=1)

        for i in range(100_000):
            buffer.add(d, priority=2 * i + 1)

        def _inner(buffer: PrioritizedReplay, d: Data):
            buffer.add(d, priority=1)

        benchmark(_inner, buffer, d)

    def test_per_sample(self, benchmark):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(100_000, Data, rng)
        d = Data(a=0.1, b=1)

        for i in range(100_000):
            buffer.add(d, priority=2 * i + 1)

        def _inner(buffer: PrioritizedReplay):
            buffer.sample(32)

        benchmark(_inner, buffer)
