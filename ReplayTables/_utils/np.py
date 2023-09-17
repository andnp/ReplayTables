from typing import Any
import numpy as np

def get_dtype(v: Any):
    if isinstance(v, int):
        return np.int32
    elif isinstance(v, float):
        return np.float_

    v = np.asarray(v)
    return v.dtype
