import numpy as np
import ReplayTables._utils.numpy as npu

from typing import Any, Dict
from ReplayTables.interface import Batch, EIDs, LaggedTimestep, IDX, IDXs
from ReplayTables.storage.Storage import Storage

from ReplayTables._utils.jit import try2jit

class BasicStorage(Storage):
    def __init__(self, max_size: int):
        super().__init__(max_size)

        self._built = False

        self._idx2n_idx = np.zeros(max_size, dtype=np.uint64)

        self._extras: Dict[IDX, Any] = {}
        self._eids = np.zeros(max_size + 1, dtype=np.uint64)
        self._r = np.empty(max_size, dtype=np.float_)
        self._term = np.empty(max_size, dtype=np.bool_)
        self._gamma = np.empty(max_size, dtype=np.float_)

        # building dummy values here for type inference
        self._state_store = np.empty(0)
        self._a = np.zeros(0)

    def _deferred_init(self, transition: LaggedTimestep):
        self._built = True

        shape = transition.x.shape
        self._state_store = np.empty((self._max_size + 1, ) + shape, dtype=transition.x.dtype)
        self._a = np.empty(self._max_size, dtype=npu.get_dtype(transition.a))

        self._state_store[self._max_size] = 0

    def add(self, idx: IDX, n_idx: IDX | None, transition: LaggedTimestep, /, **kwargs: Any):
        if not self._built: self._deferred_init(transition)

        # let's try to avoid copying observation vectors repeatedly
        # this should cut the number of copies in half
        old_eid = self._eids[idx]
        if transition.eid == 0 or old_eid != transition.eid:
            self._eids[idx] = transition.eid
            self._state_store[idx] = transition.x

        self._r[idx] = transition.r
        self._a[idx] = transition.a
        self._term[idx] = transition.terminal
        self._gamma[idx] = transition.gamma
        self._extras[idx] = transition.extra

        if n_idx is not None:
            assert transition.n_x is not None
            assert transition.n_eid is not None

            self._idx2n_idx[idx] = n_idx
            self._eids[n_idx] = transition.n_eid
            self._state_store[n_idx] = transition.n_x
        else:
            self._idx2n_idx[idx] = self._max_size

    def set(self, idx: IDX, n_idx: IDX | None, transition: LaggedTimestep):
        if not self._built: self._deferred_init(transition)

        self._state_store[idx] = transition.x
        self._eids[idx] = transition.eid
        self._r[idx] = transition.r
        self._a[idx] = transition.a
        self._term[idx] = transition.terminal
        self._gamma[idx] = transition.gamma
        self._extras[idx] = transition.extra

        if n_idx is not None:
            assert transition.n_x is not None
            assert transition.n_eid is not None

            self._idx2n_idx[idx] = n_idx
            self._eids[n_idx] = transition.n_eid
            self._state_store[n_idx] = transition.n_x
        else:
            self._idx2n_idx[idx] = self._max_size

    def get(self, idxs: IDXs) -> Batch:
        eids: Any = self._eids[idxs]
        n_idxs = self._idx2n_idx[idxs]

        x = self._state_store[idxs]
        xp = self._state_store[n_idxs]

        return Batch(
            x=x,
            a=self._a[idxs],
            r=self._r[idxs],
            gamma=self._gamma[idxs],
            terminal=self._term[idxs],
            eid=eids,
            xp=xp,
        )

    def get_item(self, idx: IDX) -> LaggedTimestep:
        n_idx = self._idx2n_idx[idx]
        eid: Any = self._eids[idx]
        n_eid: Any = None if n_idx == self._max_size else self._eids[n_idx]

        return LaggedTimestep(
            x=self._state_store[idx],
            a=self._a[idx],
            r=self._r[idx],
            gamma=self._gamma[idx],
            terminal=self._term[idx],
            eid=eid,
            extra=self._extras[idx],
            n_eid=n_eid,
            n_x=self._state_store[n_idx],
        )

    def get_eids(self, idxs: IDXs) -> EIDs:
        eids: Any = self._eids[idxs]
        return eids

    def __delitem__(self, idx: IDX):
        del self._extras[idx]

    def __len__(self):
        return len(self._extras)

@try2jit()
def _return(idx_seqs: np.ndarray, r: np.ndarray, term: np.ndarray, gamma: np.ndarray):
    lag = idx_seqs.shape[0]
    samples = idx_seqs.shape[1]

    g = np.zeros(samples)
    d = np.ones(samples)
    t = np.zeros(samples, dtype=np.bool_)
    n_idxs = idx_seqs[-1]

    for b in range(samples):
        for i in range(1, lag):
            idx = idx_seqs[i, b]
            g[b] += d[b] * r[idx]

            if term[idx]:
                n_idxs[b] = idx
                t[b] = True
                break

            d[b] *= gamma[idx]

    return g, d, t, n_idxs
