import numpy as np
import ReplayTables._utils.numpy as npu

from typing import Any, Dict
from ReplayTables.interface import Batch, EIDs, LaggedTimestep, IDX, EID, IDXs
from ReplayTables.storage.Storage import Storage
from ReplayTables.ingress.IndexMapper import IndexMapper

class BasicStorage(Storage):
    def __init__(self, max_size: int, idx_mapper: IndexMapper | None = None):
        super().__init__(max_size, idx_mapper)

        self._built = False

        self._idx2n_idx = np.zeros(max_size, dtype=np.uint64)

        self._extras: Dict[IDX, Any] = {}
        self._eids = np.zeros(max_size + 1, dtype=np.uint64)
        self._r = np.empty(max_size, dtype=np.float_)
        self._term = np.empty(max_size, dtype=np.bool_)
        self._gamma = np.empty(max_size, dtype=np.float_)

        # building dummy values here for type inference
        self._state_store: Any = np.empty(0)
        self._a = np.zeros(0)

    def _deferred_init(self, transition: LaggedTimestep):
        self._built = True

        shape = transition.x.shape
        self._state_store = np.empty((self._max_size + 1, ) + shape, dtype=transition.x.dtype)
        self._a = np.empty(self._max_size, dtype=npu.get_dtype(transition.a))

        self._state_store[self._max_size] = 0

    def add(self, transition: LaggedTimestep, /, **kwargs: Any):
        if not self._built: self._deferred_init(transition)

        idx = self._idx_mapper.add_eid(transition.eid)

        # let's try to avoid copying observation vectors repeatedly
        # this should cut the number of copies in half
        old_eid = self._eids[idx]
        if transition.eid == 0 or old_eid != transition.eid:
            self._eids[idx] = transition.eid
            self._store_state(idx, transition.x)

        self._r[idx] = transition.r
        self._a[idx] = transition.a
        self._term[idx] = transition.terminal
        self._gamma[idx] = transition.gamma
        self._extras[idx] = transition.extra

        if transition.n_eid is not None:
            assert transition.n_x is not None
            n_idx = self._idx_mapper.add_eid(transition.n_eid)

            self._idx2n_idx[idx] = n_idx
            self._eids[n_idx] = transition.n_eid
            self._store_state(n_idx, transition.n_x)
        else:
            self._idx2n_idx[idx] = self._max_size

    def set(self, transition: LaggedTimestep):
        if not self._built: self._deferred_init(transition)

        idx = self._idx_mapper.add_eid(transition.eid)

        self._store_state(idx, transition.x)
        self._eids[idx] = transition.eid
        self._r[idx] = transition.r
        self._a[idx] = transition.a
        self._term[idx] = transition.terminal
        self._gamma[idx] = transition.gamma
        self._extras[idx] = transition.extra

        if transition.n_eid is not None:
            assert transition.n_x is not None
            n_idx = self._idx_mapper.add_eid(transition.n_eid)

            self._idx2n_idx[idx] = n_idx
            self._eids[n_idx] = transition.n_eid
            self._store_state(n_idx, transition.n_x)
        else:
            self._idx2n_idx[idx] = self._max_size

    def get(self, eids: EIDs) -> Batch:
        idxs = self._idx_mapper.eids2idxs(eids)
        n_idxs = self._idx2n_idx[idxs]

        x = self._load_states(idxs)
        xp = self._load_states(n_idxs)

        return Batch(
            x=x,
            a=self._a[idxs],
            r=self._r[idxs],
            gamma=self._gamma[idxs],
            terminal=self._term[idxs],
            eid=eids,
            xp=xp,
        )

    def get_item(self, eid: EID) -> LaggedTimestep:
        idx = self._idx_mapper.eid2idx(eid)
        n_idx = self._idx2n_idx[idx]
        n_eid: Any = None if n_idx == self._max_size else self._eids[n_idx]

        return LaggedTimestep(
            x=self._load_state(idx),
            a=self._a[idx],
            r=self._r[idx],
            gamma=self._gamma[idx],
            terminal=self._term[idx],
            eid=eid,
            extra=self._extras[idx],
            n_eid=n_eid,
            n_x=self._load_state(n_idx),
        )

    def get_eids(self, idxs: IDXs) -> EIDs:
        eids: Any = self._eids[idxs]
        return eids

    def __delitem__(self, eid: EID):
        idx = self._idx_mapper.eid2idx(eid)
        del self._extras[idx]

    def __len__(self):
        return len(self._extras)

    def __contains__(self, eid: EID):
        idx = self._idx_mapper.eid2idx(eid)
        return self._eids[idx] == eid

    def _store_state(self, idx: IDX, state: np.ndarray):
        self._state_store[idx] = state

    def _load_states(self, idxs: np.ndarray) -> np.ndarray:
        return self._state_store[idxs]

    def _load_state(self, idx: int) -> np.ndarray:
        return self._state_store[idx]
