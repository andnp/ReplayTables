import numpy as np
import ReplayTables._utils.np as npu

from typing import Any, Dict
from ReplayTables.interface import Batch, LaggedTimestep, IDX, IDXs, SIDX, SIDXs, Item
from ReplayTables.storage.Storage import Storage


class BasicStorage(Storage):
    def __init__(self, max_size: int):
        super().__init__(max_size)

        self._built = False

        self._extras: Dict[IDX, Any] = {}
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

    def add(self, idx: IDX, transition: LaggedTimestep, /, **kwargs: Any):
        if not self._built: self._deferred_init(transition)

        # stash metadata
        item, last_item = self.meta.add_item(
            eid=transition.eid,
            idx=idx,
            xid=transition.xid,
            n_xid=transition.n_xid,
        )

        # make room in state storage
        if last_item is not None:
            self.delete_item(last_item)

        # store easy things
        self._r[idx] = transition.r
        self._a[idx] = transition.a
        self._term[idx] = transition.terminal
        self._gamma[idx] = transition.gamma
        self._extras[idx] = transition.extra

        self._store_state(item.sidx, transition.x)

        # if there is a bootstrap state, then store that too
        if item.n_sidx is not None:
            assert transition.n_x is not None
            self._store_state(item.n_sidx, transition.n_x)

        return item

    def set(self, idx: IDX, transition: LaggedTimestep):
        if not self._built: self._deferred_init(transition)

        item = self.meta.get_item_by_idx(idx)

        self._r[idx] = transition.r
        self._a[idx] = transition.a
        self._term[idx] = transition.terminal
        self._gamma[idx] = transition.gamma
        self._extras[idx] = transition.extra

        self._store_state(item.sidx, transition.x)

        if item.n_sidx is not None:
            assert transition.n_x is not None
            self._store_state(item.n_sidx, transition.n_x)

        return item

    def get(self, idxs: IDXs) -> Batch:
        items = self.meta.get_items_by_idx(idxs)

        x = self._load_states(items.sidxs)
        xp = self._load_states(items.n_sidxs)

        return Batch(
            x=x,
            a=self._a[idxs],
            r=self._r[idxs],
            gamma=self._gamma[idxs],
            terminal=self._term[idxs],
            eid=items.eids,
            xp=xp,
        )

    def get_item(self, idx: IDX) -> LaggedTimestep:
        item = self.meta.get_item_by_idx(idx)
        n_x = None

        if item.n_xid is not None:
            assert item.n_sidx is not None
            n_x = self._load_state(item.n_sidx)

        return LaggedTimestep(
            x=self._load_state(item.sidx),
            a=self._a[idx],
            r=self._r[idx],
            gamma=self._gamma[idx],
            terminal=self._term[idx],
            eid=item.eid,
            xid=item.xid,
            extra=self._extras[idx],
            n_xid=item.n_xid,
            n_x=n_x,
        )

    def delete(self, idx: IDX):
        item = self.meta.get_item_by_idx(idx)
        self.delete_item(item)

    def delete_item(self, item: Item):
        if not self.meta.has_xid(item.xid):
            self._remove_state(item.sidx)

        if item.idx in self._extras:
            del self._extras[item.idx]

        if item.n_xid is not None and not self.meta.has_xid(item.n_xid):
            assert item.n_sidx is not None
            self._remove_state(item.n_sidx)

    def __len__(self):
        return len(self._extras)

    def _store_state(self, idx: SIDX, state: np.ndarray):
        # leave one spot at the end for zero term for bootstrapping
        cur_size = self._state_store.shape[0] - 1
        if idx >= cur_size:
            new_shape = (cur_size + 5, ) + self._state_store.shape[1:]
            self._state_store = np.resize(self._state_store, new_shape)
            self._state_store[-1] = 0

        self._state_store[idx] = state

    def _load_states(self, idxs: SIDXs) -> np.ndarray:
        return self._state_store[idxs]

    def _load_state(self, idx: SIDX) -> np.ndarray:
        return self._state_store[idx]

    def _remove_state(self, sidx: SIDX):
        ...
