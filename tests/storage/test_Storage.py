import pytest
import numpy as np

from typing import cast, Type
from ReplayTables.storage.BasicStorage import Storage, BasicStorage
from ReplayTables.storage.CompressedStorage import CompressedStorage
from ReplayTables.storage.NonArrayStorage import NonArrayStorage
from ReplayTables.interface import EIDs

from tests._utils.fake_data import fake_lagged_timestep


STORAGES = [
    BasicStorage,
    CompressedStorage,
    NonArrayStorage,
]

@pytest.mark.parametrize('Store', STORAGES)
def test_add1(Store: Type[Storage]):
    storage = Store(10)
    storage.add(
        fake_lagged_timestep(eid=32, n_eid=34),
    )

    storage.add(
        fake_lagged_timestep(eid=34, n_eid=36),
    )

    assert len(storage) == 2

    d = storage.get(cast(EIDs, np.array([34])))
    assert d.eid == 34

    for i in range(10):
        storage.add(
            fake_lagged_timestep(eid=36 + i, n_eid=38 + i),
        )

    assert len(storage) == 10


@pytest.mark.parametrize('Store', STORAGES)
def test_small_data(benchmark, Store: Type[Storage]):
    benchmark.name = Store.__name__
    benchmark.group = 'storage | small data'

    def add_and_get(storage: Storage, timesteps, eids):
        for i in range(100):
            storage.add(timesteps[i])

        for i in range(100):
            storage.get(eids)

    storage = Store(10_000)
    eids = np.arange(32)
    data = [
        fake_lagged_timestep(eid=2 * i, n_eid=2 * i + 1, x=np.ones(10), n_x=np.ones(10))
        for i in range(100)
    ]

    benchmark(add_and_get, storage, data, eids)


@pytest.mark.parametrize('Store', STORAGES)
def test_big_data(benchmark, Store: Type[Storage]):
    benchmark.name = Store.__name__
    benchmark.group = 'storage | big data'

    def add_and_get(storage: Storage, timesteps, eids):
        for i in range(100):
            storage.add(timesteps[i])

        for i in range(100):
            storage.get(eids)

    storage = Store(10_000)
    eids = np.arange(32)
    x = np.ones((64, 64, 3), dtype=np.uint8)
    data = [
        fake_lagged_timestep(eid=2 * i, n_eid=2 * i + 1, x=x, n_x=x)
        for i in range(100)
    ]

    benchmark(add_and_get, storage, data, eids)
