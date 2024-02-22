from typing import Any
import numpy as np

def get_dtype(v: Any):
    if isinstance(v, int):
        return np.int32
    elif isinstance(v, float):
        return np.float_

    v = np.asarray(v)
    return v.dtype

def stratified_sample_integers(rng: np.random.Generator, n: int, size: int):
    buckets = np.linspace(0, size, n + 1, endpoint=True, dtype=np.int64)
    samples = [
        rng.integers(buckets[i], buckets[i + 1]) for i in range(n)
    ]
    return np.asarray(samples, dtype=np.int64)
