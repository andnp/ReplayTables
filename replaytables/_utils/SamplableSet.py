import numpy as np
from typing import Dict, Iterable, Optional
from numba import types, typed
from numba.experimental import jitclass

@jitclass
class _SamplableSet:
    _idx2val: Dict[int, int]
    _val2idx: Dict[int, int]
    _idx: int

    def __init__(self, data: Optional[Iterable[int]] = None):
        # have a two-way binding that allows indexing values
        # which is necessary for sampling, but also hashing values
        # which is necessary for fast set operations
        # (like O(1) existence checks)
        self._idx2val: Dict[int, int] = typed.Dict.empty(types.int_, types.int_)
        self._val2idx: Dict[int, int] = typed.Dict.empty(types.int_, types.int_)

        self._idx = 0

        if data is not None:
            for d in data: self.add(d)

    def add(self, val: int):
        if val not in self._val2idx:
            self._val2idx[val] = self._idx
            self._idx2val[self._idx] = val
            self._idx += 1

    def remove(self, val: int):
        if val not in self._val2idx:
            return

        # the strategy here is to take the current last item
        # and place it where the deleted item was.
        # then we just decrement the counter
        self._idx -= 1

        # figure out what idx this value is associated with
        del_idx = self._val2idx[val]

        last_idx = self._idx
        last_val = self._idx2val[last_idx]

        self._val2idx[last_val] = del_idx
        self._idx2val[del_idx] = last_val

        del self._idx2val[last_idx]
        del self._val2idx[val]

    def length(self):
        return self._idx

    def contains(self, key: int):
        return key in self._val2idx

    def sample(self, n: int, rng: np.random.Generator):
        idxs = rng.integers(0, self.length(), size=n)
        return np.array([self._idx2val[idx] for idx in idxs])

    def values(self):
        return list(self._idx2val.values())

class SamplableSet:
    def __init__(self, rng: np.random.Generator):
        self._rng = rng
        self._set = _SamplableSet()

    def add(self, val: int):
        return self._set.add(val)

    def remove(self, val: int):
        return self._set.remove(val)

    def length(self):
        return self._set.length()

    def contains(self, key: int):
        return self._set.contains(key)

    def sample(self, n: int):
        return self._set.sample(n, self._rng)

    def __getstate__(self):
        return {
            'vals': list(self._set.values()),
            'rng': self._rng,
        }

    def __setstate__(self, state):
        self._set = _SamplableSet()
        self._rng = state['rng']
        for d in state['vals']:
            self._set.add(d)
