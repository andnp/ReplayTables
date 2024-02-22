import pickle
import numpy as np
from typing import cast, Any

from ReplayTables.interface import EID, Timestep
from ReplayTables.PER import PrioritizedReplay, PERConfig

from tests._utils.fake_data import fake_timestep

class TestPER:
    def test_simple_buffer(self):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(5, 1, rng)

        # on creation, the buffer should have no size
        assert buffer.size() == 0

        # should be able to simply add and sample a single data point
        d = fake_timestep(a=1)
        buffer.add_step(d)
        assert buffer.size() == 0

        d = fake_timestep(a=2)
        buffer.add_step(d)
        assert buffer.size() == 1

        samples = buffer.sample(10)
        weights = buffer.isr_weights(samples.eid)
        assert np.all(samples.a == 1)
        assert np.all(samples.eid == 0)
        assert np.all(weights == 0.2)

        # should be able to add a few more points
        for i in range(4):
            x = i + 3
            buffer.add_step(fake_timestep(a=x))

        assert buffer.size() == 5
        samples = buffer.sample(1000)

        unique = np.unique(samples.a)
        unique.sort()

        assert np.all(unique == np.array([1, 2, 3, 4, 5]))

        # buffer drops the oldest element when over max size
        buffer.add_step(fake_timestep(a=6))
        assert buffer.size() == 5

        samples = buffer.sample(1000)
        unique = np.unique(samples.a)
        unique.sort()
        assert np.all(unique == np.array([2, 3, 4, 5, 6]))

    def test_stratified_sample(self):
        rng = np.random.default_rng(0)
        config = PERConfig(
            new_priority_mode='given',
            priority_exponent=1.0,
        )
        buffer = PrioritizedReplay(5, 1, rng, config)

        # on creation, the buffer should have no size
        assert buffer.size() == 0

        # should be able to simply add and sample a single data point
        d = fake_timestep(a=-1, r=None, extra={'priority': 1})
        buffer.add_step(d)
        assert buffer.size() == 0

        for a in range(5):
            d = fake_timestep(a=a, extra={'priority': 1})
            buffer.add_step(d)

        assert buffer.size() == 5

        # slightly loose test criteria due to numerical stability issues
        for _ in range(25):
            batch = buffer.stratified_sample(3)
            assert len(set(batch.a)) >= 2

    def test_priority_on_add(self):
        rng = np.random.default_rng(0)
        config = PERConfig(
            new_priority_mode='given',
            priority_exponent=1.0,
        )
        buffer = PrioritizedReplay(5, 1, rng, config)

        d = fake_timestep(a=0, extra={'priority': 1})
        buffer.add_step(d)
        d = fake_timestep(a=1, extra={'priority': 1})
        buffer.add_step(d)
        d = fake_timestep(a=2, extra={'priority': 3})
        buffer.add_step(d)

        eids: Any = np.array([1], dtype=np.int64)
        batch = buffer.get(eids)
        buffer.update_priorities(batch, np.array([2]))

        batch = buffer.sample(10000)

        b = np.sum(batch.a == 1)
        a = np.sum(batch.a == 0)

        assert b == 6660
        assert a == 3340

    def test_pickeable(self):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(5, 1, rng)

        for i in range(5):
            buffer.add_step(fake_timestep(
                x=np.ones(8) * i,
                a=2 * i,
            ))

        buffer.add_step(fake_timestep())
        byt = pickle.dumps(buffer)
        buffer2 = pickle.loads(byt)

        s = buffer.sample(20)
        s2 = buffer2.sample(20)

        assert np.all(s.x == s2.x) and np.all(s.a == s2.a)

    def test_delete_sample(self):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(5, 1, rng)

        for i in range(5):
            buffer.add_step(fake_timestep(a=i, r=2 * i))

        buffer.add_step(fake_timestep())
        batch = buffer.sample(512)
        assert np.unique(batch.a).shape == (5,)

        buffer.delete_sample(cast(EID, 2))
        batch = buffer.sample(512)
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
            buffer.add_step(d)

        def _inner(buffer: PrioritizedReplay, d: Timestep):
            buffer.add_step(d)

        benchmark(_inner, buffer, d)

    def test_per_sample(self, benchmark):
        rng = np.random.default_rng(0)
        buffer = PrioritizedReplay(100_000, 1, rng)
        d = fake_timestep()

        for i in range(100_000):
            buffer.add_step(d)

        def _inner(buffer: PrioritizedReplay):
            buffer.sample(32)

        benchmark(_inner, buffer)
