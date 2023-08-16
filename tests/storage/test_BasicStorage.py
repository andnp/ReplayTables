import numpy as np
from typing import cast
from ReplayTables.storage.BasicStorage import BasicStorage
from ReplayTables.interface import LaggedTimestep, EID, IDX, IDXs
from tests._utils.fake_data import fake_lagged_timestep

def test_inferred_types1():
    storage = BasicStorage(10)

    x = np.zeros((32, 32), dtype=np.uint8)
    a = 1.0

    d = LaggedTimestep(
        eid=cast(EID, 32),
        x=x,
        a=a,
        r=1.0,
        gamma=0.99,
        terminal=False,
        extra=None,
        n_eid=cast(EID, 34),
        n_x=None,
    )

    storage.add(
        cast(IDX, 0),
        None,
        d,
    )

    assert storage._state_store.dtype == np.uint8
    assert storage._state_store.shape == (11, 32, 32)
    assert storage._a.dtype == np.float_

def test_inferred_types2():
    storage = BasicStorage(10)

    x = np.zeros(15, dtype=np.float32)
    a = 1

    d = LaggedTimestep(
        eid=cast(EID, 32),
        x=x,
        a=a,
        r=1.0,
        gamma=0.99,
        terminal=False,
        extra=None,
        n_eid=cast(EID, 34),
        n_x=None,
    )

    storage.add(
        cast(IDX, 0),
        None,
        d,
    )

    assert storage._state_store.dtype == np.float32
    assert storage._state_store.shape == (11, 15)
    assert storage._a.dtype == np.int32

def test_add1():
    storage = BasicStorage(10)

    storage.add(
        cast(IDX, 0),
        cast(IDX, 1),
        fake_lagged_timestep(eid=32, n_eid=34),
    )

    storage.add(
        cast(IDX, 1),
        cast(IDX, 2),
        fake_lagged_timestep(eid=34, n_eid=36),
    )

    assert len(storage) == 2

    d = storage.get(cast(IDXs, np.array([1])))
    assert d.eid == 34

    for i in range(10):
        storage.add(
            cast(IDX, (3 + i) % 10),
            cast(IDX, (4 + i) % 10),
            fake_lagged_timestep(eid=36 + i, n_eid=38 + i),
        )

    assert len(storage) == 10
