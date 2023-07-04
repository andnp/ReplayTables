from __future__ import annotations
import numpy as np
import numpy.typing as npt
from typing import Any, Optional, NamedTuple, Sequence
from ReplayTables._utils.SumTree import SumTree

class Distribution:
    def probs(self, idxs: npt.ArrayLike):
        raise NotImplementedError('Expected probs to be implemented')

    def sample(self, rng: np.random.Generator, n: int):
        raise NotImplementedError('Expected sample to be implemented')

    def isr(self, target: Distribution, idxs: np.ndarray):
        return target.probs(idxs) / self.probs(idxs)


class UniformDistribution(Distribution):
    def __init__(self, size: int):
        super().__init__()

        self._size = size

    def update(self, size: int):
        self._size = size

    def sample(self, rng: np.random.Generator, n: int):
        if self._size == 1:
            return np.zeros(n, dtype=np.uint64)

        return rng.integers(0, self._size, size=n)

    def probs(self, idxs: npt.ArrayLike):
        return np.full_like(idxs, fill_value=(1 / self._size), dtype=np.float_)


class PrioritizedDistribution(Distribution):
    def __init__(self, config: Optional[Any] = None, size: Optional[int] = None):
        self._size = size
        self._tree: Optional[SumTree] = None
        self._dim: Optional[int] = None

        self._weights: Optional[np.ndarray] = None
        self._config = config

    @property
    def tree(self):
        assert self._tree is not None
        return self._tree

    @property
    def dim(self):
        assert self._dim is not None
        return self._dim

    @property
    def weights(self):
        assert self._weights is not None
        return self._weights

    def init(self, memory: Optional[SumTree] = None, dim: Optional[int] = None):
        if memory is None:
            assert self._size is not None
            memory = SumTree(self._size, 1)
            dim = 0

        assert dim is not None
        self._tree = memory
        self._dim = dim
        self._weights = np.zeros(memory.size)
        self._weights[self._dim] = 1

    def probs(self, idxs: npt.ArrayLike):
        idxs = np.asarray(idxs)

        t = self.tree.dim_total(self.dim)
        if t == 0:
            return np.zeros(len(idxs))

        v = self.tree.get_values(self.dim, idxs)
        return v / t

    def sample(self, rng: np.random.Generator, n: int):
        return self.tree.sample(rng, n, self.weights)

    def update(self, idxs: np.ndarray, values: np.ndarray):
        self.tree.update(self.dim, idxs, values)


class MixinUniformDistribution(PrioritizedDistribution):
    def __init__(self, config: Optional[Any] = None, size: Optional[int] = None):
        super().__init__(config, size)

    def update(self, idxs: np.ndarray, *args, **kwargs):
        v = self.tree.get_values(self.dim, idxs)
        if np.all(v == 1):
            return

        self.tree.update(self.dim, idxs, np.ones(len(idxs)))

    def set(self, idxs: np.ndarray, vals: np.ndarray):
        self.tree.update(self.dim, idxs, vals)


class SubDistribution(NamedTuple):
    d: PrioritizedDistribution
    p: float
    isr: bool = True


class MixtureDistribution(Distribution):
    def __init__(self, size: int, dists: Sequence[SubDistribution], isr_remainder: Optional[Distribution] = None):
        super().__init__()

        self._dims = len(dists)
        self._tree = SumTree(size, self._dims)

        self.dists = [sub.d for sub in dists]
        self._weights = np.array([sub.p for sub in dists])
        self._mask = np.array([sub.isr for sub in dists], dtype=bool)

        self._fast_isr = np.all(self._mask)
        self._isr_remainder = isr_remainder

        for i, d in enumerate(self.dists):
            d.init(self._tree, i)

    @property
    def tree(self):
        return self._tree

    def _filter_defunct(self):
        # if a distribution ends up with 0 total, it is defunct and cannot be sampled
        # by default the SumTree then puts all probability mass on the final index
        # which isn't great.
        totals = self._tree.all_totals()
        mask = totals != 0

        if np.all(mask):
            return self._weights

        new_weights = self._weights * mask
        w = new_weights / new_weights.sum()
        return w

    def probs(self, idxs: npt.ArrayLike):
        w = self._filter_defunct()
        sub = np.array([d.probs(idxs) for d in self.dists])
        p = w.dot(sub)
        return p

    def sample(self, rng: np.random.Generator, n: int):
        w = self._filter_defunct()
        w = w * self._tree.effective_weights()
        return self._tree.sample(rng, n, w)

    def isr(self, target: Distribution, idxs: np.ndarray):
        tops = target.probs(idxs)
        subs = np.array([d.probs(idxs) for d in self.dists])
        w = self._filter_defunct()

        # in the base case, we can skip the extra compute
        if self._fast_isr:
            bottoms = w.dot(subs)
            return tops / bottoms

        w = w * self._mask
        missing = 1 - w.sum()

        if self._isr_remainder is not None:
            rest = self._isr_remainder.probs(idxs)
        else:
            rest = np.full_like(tops, fill_value=(1 / self._tree.size))

        bottoms = w.dot(subs) + missing * rest
        return tops / bottoms
