import numpy as np
import ReplayTables._utils.np as npu

from typing import Any, Dict
from ReplayTables.interface import Batch, EIDs, LaggedTimestep, IDX, EID, IDXs
from ReplayTables.storage.Storage import Storage
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables._utils.RefCount import RefCount

class BasicStorage(Storage):
    def __init__(self, max_size: int, idx_mapper: IndexMapper | None = None):
        super().__init__(max_size, idx_mapper)

        self._built = False
        self._max_i = np.iinfo(np.uint64).max

        self._ref = RefCount()
        self._xids = np.zeros(max_size, dtype=np.uint64)
        self._nxids = np.zeros(max_size + 1, dtype=np.uint64)

        self._extras: Dict[IDX, Any] = {}
        self._eids = np.ones(max_size, dtype=np.uint64) * self._max_i
        self._r = np.ones(max_size, dtype=np.float_) * np.nan
        self._term = np.empty(max_size, dtype=np.bool_)
        self._gamma = np.ones(max_size, dtype=np.float_) * np.nan

        # building dummy values here for type inference
        self._state_store: Any = np.empty(0)
        self._a = np.zeros(0)

    def _deferred_init(self, transition: LaggedTimestep):
        self._built = True

        shape = transition.x.shape
        self._state_store = np.empty((self._max_size + 1, ) + shape, dtype=transition.x.dtype)
        self._a = np.empty(self._max_size, dtype=npu.get_dtype(transition.a))

        self._state_store[-1] = 0

    def add(self, transition: LaggedTimestep, /, **kwargs: Any):
        if not self._built: self._deferred_init(transition)

        idx = self._idx_mapper.add_eid(transition.eid)

        # get rid of old transition
        old_eid = self._eids[idx]
        if old_eid < self._max_i:
            self._ref.remove_transition(old_eid)

        # store easy things
        self._eids[idx] = transition.eid
        self._xids[idx] = transition.xid
        self._r[idx] = transition.r
        self._a[idx] = transition.a
        self._term[idx] = transition.terminal
        self._gamma[idx] = transition.gamma
        self._extras[idx] = transition.extra

        # get idx for state storage
        s_idx, already_stored = self._ref.add_state(transition.eid, transition.xid)

        # let's try to avoid copying observation vectors repeatedly
        # this should cut the number of copies in half
        if not already_stored:
            self._store_state(s_idx, transition.x)

        # if there is a bootstrap state, then store that too
        if transition.n_xid is not None:
            assert transition.n_x is not None
            self._nxids[idx] = transition.n_xid

            ns_idx, _ = self._ref.add_state(transition.eid, transition.n_xid)
            self._store_state(ns_idx, transition.n_x)
        else:
            self._nxids[idx] = self._max_i

    def set(self, transition: LaggedTimestep):
        if not self._built: self._deferred_init(transition)

        idx = self._idx_mapper.add_eid(transition.eid)

        self._eids[idx] = transition.eid
        self._xids[idx] = transition.xid
        self._r[idx] = transition.r
        self._a[idx] = transition.a
        self._term[idx] = transition.terminal
        self._gamma[idx] = transition.gamma
        self._extras[idx] = transition.extra

        s_idx, _ = self._ref.add_state(transition.eid, transition.xid)
        self._store_state(s_idx, transition.x)

        if transition.n_xid is not None:
            assert transition.n_x is not None
            self._nxids[idx] = transition.n_xid

            ns_idx, _ = self._ref.add_state(transition.eid, transition.n_xid)
            self._store_state(ns_idx, transition.n_x)
        else:
            self._nxids[idx] = self._max_i

    def get(self, eids: EIDs) -> Batch:
        idxs = self._idx_mapper.eids2idxs(eids)

        xids = self._xids[idxs]
        nxids = self._nxids[idxs]
        s_idxs = self._ref.load_states(xids)
        ns_idxs = self._ref.load_states(nxids)

        x = self._load_states(s_idxs)
        xp = self._load_states(ns_idxs)

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

        xid = self._xids[idx]
        s_idx = self._ref.load_state(xid)

        n_x = None

        nxid = self._nxids[idx]
        if nxid < self._max_i:
            ns_idx = self._ref.load_state(nxid)
            n_x = self._load_state(ns_idx)
        else:
            nxid = None

        return LaggedTimestep(
            x=self._load_state(s_idx),
            a=self._a[idx],
            r=self._r[idx],
            gamma=self._gamma[idx],
            terminal=self._term[idx],
            eid=eid,
            xid=xid,
            extra=self._extras[idx],
            n_xid=nxid,
            n_x=n_x,
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

    def _store_state(self, idx: int, state: np.ndarray):
        # leave one spot at the end for zero term for bootstrapping
        cur_size = self._state_store.shape[0] - 1
        if idx >= cur_size:
            new_shape = (cur_size + 5, ) + self._state_store.shape[1:]
            self._state_store = np.resize(self._state_store, new_shape)
            self._state_store[-1] = 0

        self._state_store[idx] = state

    def _load_states(self, idxs: np.ndarray) -> np.ndarray:
        return self._state_store[idxs]

    def _load_state(self, idx: int) -> np.ndarray:
        return self._state_store[idx]
