import numpy as np
from typing import Set

from ReplayTables._utils.jit import try2jit

@try2jit()
def back_sequence(arr: np.ndarray, jump: int):
    out = np.empty((arr.shape[0], jump), dtype=np.int64)

    for i in range(jump):
        out[:, i] = arr - (i + 1)

    return out

@try2jit()
def in_set(arr: np.ndarray, s: Set[int]):
    out = np.empty(arr.shape, dtype=np.bool_)

    for i in range(arr.shape[0]):
        out[i] = arr[i] in s

    return out
