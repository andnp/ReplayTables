import numpy as np

from ReplayTables.ReplayBuffer import ReplayBuffer
from ReplayTables.storage.BasicStorage import BasicStorage
from tests._utils.fake_data import fake_timestep

def test_two_buffers():
    storage = BasicStorage(max_size=10)

    b1 = ReplayBuffer(
        max_size=10,
        lag=1,
        rng=np.random.default_rng(0),
        storage=storage,
    )

    b2 = ReplayBuffer(
        max_size=5,
        lag=1,
        rng=np.random.default_rng(0),
        storage=storage,
    )

    t1 = fake_timestep(r=0)
    b1.add_step(t1)
    b2.add_step(t1)

    t2 = fake_timestep(r=1)
    b1.add_step(t2)
    b2.add_step(t2)

    assert b1.size() == b2.size() == 1

    t3 = fake_timestep(r=2)
    b1.add_step(t3)
    b2.add_step(t3)

    assert b1.size() == b2.size() == 2

    got1 = b1.sample(100)
    got2 = b2.sample(100)

    assert np.all(got1.r == got2.r)

    # now fill the smallest of the two buffers with some overflow
    for i in range(5):
        t = fake_timestep(r=3 + i)
        b1.add_step(t)
        b2.add_step(t)

    batch1 = b1.sample(100)
    unique_1 = np.sort(np.unique(batch1.r))
    assert b1.size() == 7
    assert np.all(unique_1 == np.array([0, 1, 2, 3, 4, 5, 6]))

    batch2 = b2.sample(100)
    unique_2 = np.sort(np.unique(batch2.r))

    assert np.all(unique_2 == np.array([2, 3, 4, 5, 6]))
