import numpy as np
from typing import cast
from ReplayTables.storage.BasicStorage import BasicStorage
from ReplayTables.interface import LaggedTimestep, EID

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
        extra={},
        n_eid=None,
        n_x=None,
    )

    storage.add(d)

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
        extra={},
        n_eid=None,
        n_x=None,
    )

    storage.add(d)

    assert storage._state_store.dtype == np.float32
    assert storage._state_store.shape == (11, 15)
    assert storage._a.dtype == np.int32
