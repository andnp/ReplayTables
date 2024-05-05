import numpy as np
from typing import Iterable
import ReplayTables.rust as ru

class SumTree(ru.SumTree):
    def __new__(
        cls,
        size: int | None = None,
        dims: int | None = None,
    ):
        # when rebuilding from pickle, both args are none
        # otherwise both args need to be specified
        args = [size, dims]
        if args[0] is None:
            assert args[1] is None
            args = []

        return super().__new__(cls, *args)

    def __init__(self, size: int, dims: int):
        super().__init__()
        self.u = np.ones(dims, dtype=np.float64)

    def update(self, dim: int, idxs: Iterable[int], values: Iterable[float]):
        a_idxs = np.asarray(idxs, dtype=np.int64)
        a_values = np.asarray(values, dtype=np.float64)

        super().update(dim, a_idxs, a_values)

    def total(self, w: np.ndarray | None = None) -> float:
        w = self._get_w(w)
        return super().total(w)

    def sample(self, rng: np.random.Generator, n: int, w: np.ndarray | None = None) -> np.ndarray:
        w = self._get_w(w)
        t = self.total(w)
        assert t > 0, "Cannot sample when the tree is empty or contains negative values"

        rs = rng.uniform(0, t, size=n)
        return super().query(rs, w)

    def stratified_sample(self, rng: np.random.Generator, n: int, w: np.ndarray | None = None) -> np.ndarray:
        w = self._get_w(w)
        t = self.total(w)
        assert t > 0, "Cannot sample when the tree is empty or contains negative values"

        buckets = np.linspace(0., 1., n + 1)
        values = np.asarray([
            rng.uniform(buckets[i], buckets[i + 1]) for i in range(n)
        ])

        return super().query(values, w)

    def _get_w(self, w: np.ndarray | None = None) -> np.ndarray:
        if w is None:
            return self.u
        return w

    def __getstate__(self):
        return {
            'st': super().__getstate__()
        }

    def __setstate__(self, state):
        super().__setstate__(state['st'])
