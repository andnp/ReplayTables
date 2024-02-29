import numpy as np
from typing import Iterable
from replay_tables_rs import SumTree as SumTreeRS

class SumTree:
    def __init__(self, size: int, dims: int):
        self.st = SumTreeRS(size, dims)
        self.u = np.ones(dims, dtype=np.float64)

    @property
    def dims(self):
        return self.st.dims

    @property
    def size(self):
        return self.st.size

    def update(self, dim: int, idxs: Iterable[int], values: Iterable[float]):
        a_idxs = np.asarray(idxs, dtype=np.int64)
        a_values = np.asarray(values, dtype=np.float64)

        self.st.update(dim, a_idxs, a_values)

    def update_single(self, dim: int, idx: int, value: float):
        self.st.update_single(dim, idx, value)

    def get_value(self, dim: int, idx: int) -> float:
        return self.st.get_value(dim, idx)

    def get_values(self, dim: int, idxs: np.ndarray) -> np.ndarray:
        return self.st.get_values(dim, idxs)

    def dim_total(self, dim: int) -> float:
        return self.st.dim_total(dim)

    def all_totals(self) -> np.ndarray:
        return self.st.all_totals()

    def total(self, w: np.ndarray | None = None) -> float:
        w = self._get_w(w)
        return self.st.total(w)

    def effective_weights(self):
        return self.st.effective_weights()

    def sample(self, rng: np.random.Generator, n: int, w: np.ndarray | None = None) -> np.ndarray:
        w = self._get_w(w)
        t = self.total(w)
        assert t > 0, "Cannot sample when the tree is empty or contains negative values"

        rs = rng.uniform(0, t, size=n)
        return self.st.query(rs, w)

    def stratified_sample(self, rng: np.random.Generator, n: int, w: np.ndarray | None = None) -> np.ndarray:
        w = self._get_w(w)
        t = self.total(w)
        assert t > 0, "Cannot sample when the tree is empty or contains negative values"

        buckets = np.linspace(0., 1., n + 1)
        values = np.asarray([
            rng.uniform(buckets[i], buckets[i + 1]) for i in range(n)
        ])

        return self.st.query(values, w)

    def _get_w(self, w: np.ndarray | None = None) -> np.ndarray:
        if w is None:
            return self.u
        return w
