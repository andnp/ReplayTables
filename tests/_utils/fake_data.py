import numpy as np
from typing import cast, Any, Dict
from ReplayTables.interface import Batch, Timestep, LaggedTimestep, EID

_zero = np.zeros(8)
def fake_timestep(x: np.ndarray = _zero, a: int = 0, r: float | None = 0.0, gamma: float = 0.99, terminal: bool = False, extra: Dict[str, Any] | None = None):
    return Timestep(
        x=x,
        a=a,
        r=r,
        gamma=gamma,
        terminal=terminal,
        extra=extra,
    )

_zero_b = np.zeros((1, 8))
def fake_batch(x: np.ndarray = _zero_b, a: np.ndarray = _zero_b, r: np.ndarray = _zero_b, xp: np.ndarray = _zero_b):
    return Batch(
        x=x,
        a=a,
        r=r,
        gamma=np.array([0.99]),
        terminal=np.array([False]),
        eid=np.array([0], dtype=np.uint32),
        xp=xp
    )


def fake_lagged_timestep(
    eid: int,
    n_eid: int,
    x: np.ndarray = _zero,
    a: int | float = 0,
    r: float = 0,
    gamma: float = 0.99,
    terminal: bool = False,
    extra: Dict = {},
    n_x: np.ndarray = _zero,
):
    return LaggedTimestep(
        eid=cast(EID, eid),
        x=x,
        a=a,
        r=r,
        gamma=gamma,
        terminal=terminal,
        extra=extra,
        n_eid=cast(EID, n_eid),
        n_x=n_x,
    )
