import numpy as np
import pickle
from ReplayTables.ReplayBuffer import ReplayBuffer

from tests._utils.fake_data import fake_timestep

class TestReplayBuffer:
    def test_simple_buffer(self):
        rng = np.random.default_rng(0)
        buffer = ReplayBuffer(5, 1, rng)

        # on creation, the buffer should have no size
        assert buffer.size() == 0

        # should be able to simply add and sample a single data point
        d = fake_timestep(a=1, r=None)
        buffer.add_step(d)
        assert buffer.size() == 0

        d = fake_timestep(a=2)
        buffer.add_step(d)
        assert buffer.size() == 1

        samples = buffer.sample(10)
        weights = buffer.isr_weights(samples.eid)
        assert np.all(samples.a == 1)
        assert np.all(samples.eid == 0)
        assert np.all(weights == 1)

        # should be able to add a few more points
        for i in range(4):
            x = i + 3
            d = fake_timestep(a=x)
            buffer.add_step(d)

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
        buffer = ReplayBuffer(5, 1, rng)

        # on creation, the buffer should have no size
        assert buffer.size() == 0

        # should be able to simply add and sample a single data point
        d = fake_timestep(a=-1, r=None)
        buffer.add_step(d)
        assert buffer.size() == 0

        for a in range(5):
            d = fake_timestep(a=a)
            buffer.add_step(d)

        assert buffer.size() == 5

        for _ in range(25):
            batch = buffer.stratified_sample(3)
            assert len(set(batch.a)) == 3

        for _ in range(25):
            batch = buffer.stratified_sample(5)
            assert len(set(batch.a)) == 5

    def test_without_replacement(self):
        rng = np.random.default_rng(0)
        buffer = ReplayBuffer(5, 1, rng)

        # on creation, the buffer should have no size
        assert buffer.size() == 0

        # should be able to simply add and sample a single data point
        d = fake_timestep(a=-1, r=None)
        buffer.add_step(d)
        assert buffer.size() == 0

        for a in range(5):
            d = fake_timestep(a=a)
            buffer.add_step(d)

        assert buffer.size() == 5

        for _ in range(25):
            batch = buffer.sample_without_replacement(3)
            assert len(set(batch.a)) == 3

        for _ in range(25):
            batch = buffer.sample_without_replacement(5)
            assert len(set(batch.a)) == 5

    def test_terminal_states(self):
        rng = np.random.default_rng(0)
        buffer = ReplayBuffer(5, 1, rng)

        d = fake_timestep(x=np.ones(8), r=None)
        buffer.add_step(d)

        for i in range(3):
            d = fake_timestep(x=np.ones(8), r=i)
            buffer.add_step(d)

        d = fake_timestep(x=None, r=3, terminal=True)
        buffer.add_step(d)

        samples = buffer.sample(25)
        assert np.all(samples.x == 1)
        assert np.all(samples.xp[samples.terminal] == 0)

    def test_n_step(self):
        rng = np.random.default_rng(0)
        buffer = ReplayBuffer(5, 2, rng)

        d = fake_timestep(x=np.ones(8), r=1, gamma=0.99)
        for _ in range(3):
            buffer.add_step(d)

        samples = buffer.sample(1)
        assert np.all(samples.r == 1.99)

        d = fake_timestep(r=2, gamma=0, terminal=True, x=None)
        buffer.add_step(d)

        samples = buffer.sample(10)
        assert np.all(samples.r == np.array([2, 2.98, 2.98, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 2]))
        assert np.all(samples.xp[samples.terminal] == 0)

    def test_pickleable(self):
        rng = np.random.default_rng(0)
        buffer = ReplayBuffer(5, 1, rng)

        for i in range(8):
            buffer.add_step(fake_timestep(a=0))

        byt = pickle.dumps(buffer)
        buffer2 = pickle.loads(byt)

        s = buffer.sample(3)
        s2 = buffer2.sample(3)

        assert np.all(s.a == s2.a) and np.all(s.x == s2.x)

# ----------------
# -- Benchmarks --
# ----------------
class TestBenchmarks:
    def test_replay_buffer_add(self, benchmark):
        rng = np.random.default_rng(0)
        buffer = ReplayBuffer(100_000, 1, rng)
        d = fake_timestep(a=0)

        def _inner(buffer, d):
            buffer.add_step(d)

        benchmark(_inner, buffer, d)

    def test_replay_buffer_sample(self, benchmark):
        rng = np.random.default_rng(0)
        buffer = ReplayBuffer(100_000, 1, rng)
        d = fake_timestep(a=0)

        for _ in range(100_000):
            buffer.add_step(d)

        def _inner(buffer):
            buffer.sample(32)

        benchmark(_inner, buffer)
