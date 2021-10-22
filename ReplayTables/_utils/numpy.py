import numpy as np
import numpy.typing as npt

from typing import Tuple
from numba import njit

@njit(cache=True)
def rotatedSequence(lo: int, hi: int, mod: int) -> np.ndarray:
    seq = np.arange(lo, hi, dtype=np.int64)
    return seq % mod

def asTuple(shape: npt._shape._ShapeLike) -> Tuple[int, ...]:
    if isinstance(shape, tuple):
        return shape

    if isinstance(shape, list):
        return tuple(shape)

    if isinstance(shape, int):
        return (shape, )

    raise Exception("Could not cast shape to tuple!")

@njit(cache=True)
def padded(arr: np.ndarray, size: int, mult: int, value: float = np.nan):
    s = int(np.ceil(size / mult) * mult)
    out = np.ones((s, ) + arr.shape[1:], dtype=arr.dtype) * value
    out[:arr.shape[0]] = arr
    return out
