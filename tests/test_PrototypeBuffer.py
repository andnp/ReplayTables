import numpy as np

from ReplayTables.PrototypeBuffer import RandomEgressBuffer

from tests._utils.fake_data import fake_timestep


class TestRandomEgressBuffer:
    def test_ingress(self):
        max_size = 5
        lag = 1
        seed = 42

        sampler_rng = np.random.default_rng(seed)
        indexer_rng = np.random.default_rng(seed)

        buffer = RandomEgressBuffer(max_size, lag, sampler_rng)
        buffer._idx_mapper._rng = indexer_rng

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
        assert np.all(weights == 1.0)


        # should be able to add a few more points
        for i in range(4):
            x = i + 3
            buffer.add_step(fake_timestep(a=x))

        assert buffer.size() == 5


        # should remove random elements when over max size
        control_as = np.array([1, 2, 3, 4, 5])
        for i in range(100):
            x = i + 7
            buffer.add_step(fake_timestep(a=x))
            swap_idx = indexer_rng.integers(0, 5)
            control_as[swap_idx] = x - 1

        assert np.all(buffer._storage.get(np.array([0, 1, 2 , 3, 4])).a == control_as)


    def test_sampling(self):
        max_size = 5
        lag = 1
        seed = 0

        sampler_rng = np.random.default_rng(seed)
        indexer_rng = np.random.default_rng(seed)

        buffer = RandomEgressBuffer(max_size, lag, sampler_rng)
        buffer._idx_mapper._rng = indexer_rng


        # should be able to sample all data points
        for i in range(6):
            x = i + 1
            buffer.add_step(fake_timestep(a=x))

        assert buffer.size() == 5

        samples = buffer.sample(1000)
        unique = np.unique(samples.a)
        unique.sort()
        assert np.all(unique == np.array([1, 2, 3, 4, 5]))





       
