import numpy as np
from ReplayTables.interface import Batch, Timestep

_zero = np.zeros(8)
def fake_timestep(x: np.ndarray = _zero, a: int = 0, r: float = 0.0, gamma: float = 0.99, terminal: bool = False):
    return Timestep(
        x=x,
        a=a,
        r=r,
        gamma=gamma,
        terminal=terminal
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
