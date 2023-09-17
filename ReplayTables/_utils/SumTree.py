from typing import Iterable, Optional
import numpy as np
from numba.typed import List as NList
from ReplayTables._utils.jit import try2jit, try2vectorize

W = Optional[np.ndarray]


@try2jit()
def _nearestPowerOf2(x: float):
    i = np.log2(x)
    u = np.ceil(i)
    return int(2**u)

@try2jit()
def update(tree: NList[np.ndarray], dim: int, idxs: np.ndarray, values: np.ndarray):
    for idx, value in zip(idxs, values):
        sub_idx = idx
        old = tree[0][dim, idx]

        for i in range(len(tree)):
            tree[i][dim, sub_idx] += value - old
            sub_idx = int(sub_idx // 2)

@try2vectorize
def _bound(x: int, ma: int):
    return min(x, ma)

@try2jit()
def query(tree: NList[np.ndarray], size: int, weights: np.ndarray, values: np.ndarray) -> np.ndarray:
    totals = np.zeros(len(values), dtype=np.float64)
    idxs = np.zeros(len(values), dtype=np.int64)

    for i in range(len(tree) - 2, -1, -1):
        layer = tree[i]

        idxs = idxs * 2
        lefts = weights.dot(layer[:, idxs])
        mask = lefts < (values - totals)
        totals = totals + mask * lefts
        idxs = idxs + mask

    return _bound(idxs, size - 1)


class SumTree:
    def __init__(self, size: int, dims: int = 1, _defer_build: bool = False):
        self._size = size
        self._dims = dims

        self._total_size = _nearestPowerOf2(size)

        layers = []
        if not _defer_build:
            for i in range(int(np.log2(self._total_size)), -1, -1):
                layers.append(np.zeros((dims, 2**i), dtype=np.float64))

        self._tree: NList[np.ndarray] = NList(layers)

        # cached to avoid recreating this space in memory repeatedly
        self._u = np.ones(dims, dtype=np.float64)

    @property
    def dims(self):
        return self._dims

    @property
    def size(self):
        return self._size

    @property
    def raw(self):
        return self._tree

    def update(self, dim: int, idxs: Iterable[int], values: Iterable[float]):
        a_idxs = np.asarray(idxs, dtype=np.int64)
        a_values = np.asarray(values, dtype=np.float64)

        update(self._tree, dim, a_idxs, a_values)

    def update_single(self, dim: int, idx: int, value: float):
        update(
            self._tree,
            dim,
            np.array([idx], dtype=np.int64),
            np.array([value], dtype=np.float64),
        )

    def get_value(self, dim: int, idx: int) -> float:
        return self._tree[0][dim, idx]

    def get_values(self, dim: int, idxs: np.ndarray) -> np.ndarray:
        return self._tree[0][dim, idxs]

    def dim_total(self, dim: int) -> float:
        return self._tree[-1][dim, 0]

    def all_totals(self) -> np.ndarray:
        return self._tree[-1][:, 0]

    def total(self, w: W = None) -> float:
        w_ = self._get_w(w)
        return w_.dot(self._tree[-1])[0]

    def effective_weights(self):
        t = self.all_totals()
        return _safe_invert(t)

    def sample(self, rng: np.random.Generator, n: int, w: W = None) -> np.ndarray:
        w_ = self._get_w(w)
        t = self.total(w_)
        assert t > 0, "Cannot sample when the tree is empty or contains negative values"

        rs = rng.uniform(0, t, size=n)
        return query(self._tree, self._size, w_, rs)

    def _get_w(self, w: W = None):
        if w is None:
            return self._u

        return w

    def __getstate__(self):
        return {
            'size': self._size,
            'dims': self._dims,
            'memory': list(self._tree)
        }

    def __setstate__(self, state):
        self.__init__(state['size'], state['dims'], _defer_build=True)
        self._tree = NList(state['memory'])

@try2jit()
def _safe_invert(arr: np.ndarray):
    out = np.empty_like(arr)
    for i in range(len(arr)):
        out[i] = 0 if arr[i] == 0 else 1 / arr[i]

    return out
