import pickle
import numpy as np
from typing import cast

from ReplayTables.interface import EID, EIDs, Timestep
from ReplayTables.PER import PrioritizedReplay

from tests._utils.fake_data import fake_timestep

class TestPER:
    def test_simple_buffer(self):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(5, 1, rng)

        # on creation, the buffer should have no size
        assert buffer.size() == 0

        # should be able to simply add and sample a single data point
        d = fake_timestep(a=1)
        buffer.add(d)
        assert buffer.size() == 0

        d = fake_timestep(a=2)
        buffer.add(d)
        assert buffer.size() == 1

        samples, idxs, weights = buffer.sample(10)
        assert np.all(samples.a == 1)
        assert np.all(idxs == 0)
        assert np.all(weights == 0.2)

        # should be able to add a few more points
        for i in range(4):
            x = i + 3
            buffer.add(fake_timestep(a=x))

        assert buffer.size() == 5
        samples, idxs, weights = buffer.sample(1000)

        unique = np.unique(samples.a)
        unique.sort()

        assert np.all(unique == np.array([1, 2, 3, 4, 5]))

        # buffer drops the oldest element when over max size
        buffer.add(fake_timestep(a=6))
        assert buffer.size() == 5

        samples, _, _ = buffer.sample(1000)
        unique = np.unique(samples.a)
        unique.sort()
        assert np.all(unique == np.array([2, 3, 4, 5, 6]))

    def test_priority_on_add(self):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(5, 1, rng)

        d = fake_timestep(a=0)
        buffer.add(d, priority=1)
        d = fake_timestep(a=1)
        buffer.add(d, priority=2)
        d = fake_timestep(a=2)
        buffer.add(d, priority=3)

        batch, _, _ = buffer.sample(128)

        b = np.sum(batch.a == 1)
        a = np.sum(batch.a == 0)

        assert b == 91
        assert a == 37

    def test_pickeable(self):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(5, 1, rng)

        for i in range(5):
            buffer.add(fake_timestep(
                x=np.ones(8) * i,
                a=2 * i,
            ))

        buffer.add(fake_timestep())
        ids = cast(EIDs, np.arange(5))
        buffer.update_priorities(ids, np.arange(5) + 1)

        byt = pickle.dumps(buffer)
        buffer2 = pickle.loads(byt)

        s, _, _ = buffer.sample(20)
        s2, _, _ = buffer2.sample(20)

        assert np.all(s.x == s2.x) and np.all(s.a == s2.a)

    def test_delete_sample(self):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(5, 1, rng)

        for i in range(5):
            buffer.add(fake_timestep(a=i, r=2 * i))

        buffer.add(fake_timestep())
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
        buffer = PrioritizedReplay(100_000, 1, rng)
        d = fake_timestep()

        for i in range(100_000):
            buffer.add(d, priority=2 * i + 1)

        def _inner(buffer: PrioritizedReplay, d: Timestep):
            buffer.add(d, priority=1)

        benchmark(_inner, buffer, d)

    def test_per_sample(self, benchmark):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(100_000, 1, rng)
        d = fake_timestep()

        for i in range(100_000):
            buffer.add(d, priority=2 * i + 1)

        def _inner(buffer: PrioritizedReplay):
            buffer.sample(32)

        benchmark(_inner, buffer)
