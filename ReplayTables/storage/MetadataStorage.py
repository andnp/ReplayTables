import numpy as np
from typing import Any, Tuple
from ReplayTables.interface import Item, Items, EID, IDX, IDXs, XID
from ReplayTables._utils.RefCount import RefCount

_EID_C = 0
_XID_C = 1
_NXID_C = 2
_SIDX_C = 3
_NSIDX_C = 4

class MetadataStorage:
    def __init__(self, max_size: int, null_idx: int):
        self._max_size = max_size

        self._ref = RefCount()

        self._max_i = null_idx
        self._ids = np.zeros((max_size, 5), dtype=np.int64) + self._max_i

    def get_item_by_idx(self, idx: IDX) -> Item:
        meta: Any = self._ids[idx]
        n_xid = meta[_NXID_C]
        n_sidx = meta[_NSIDX_C]
        return Item(
            idx=idx,
            eid=meta[_EID_C],
            xid=meta[_XID_C],
            sidx=meta[_SIDX_C],
            n_xid=n_xid if n_xid < self._max_i else None,
            n_sidx=n_sidx if n_xid < self._max_i else None,
        )

    def get_items_by_idx(self, idxs: IDXs) -> Items:
        meta: Any = self._ids[idxs]
        return Items(
            idxs=idxs,
            eids=meta[:, _EID_C],
            xids=meta[:, _XID_C],
            sidxs=meta[:, _SIDX_C],
            n_xids=meta[:, _NXID_C],
            n_sidxs=meta[:, _NSIDX_C],
        )

    def add_item(self, eid: EID, idx: IDX, xid: XID, n_xid: XID | None) -> Tuple[Item, Item | None]:
        # first check if there was already an item
        last_item = None
        if self._ids[idx, _EID_C] < self._max_i:
            last_item = self.get_item_by_idx(idx)
            self._ref.remove_transition(last_item.eid)

        # register states with reference counter
        sidx = self._ref.add_state(eid, xid)
        n_sidx: Any = -1
        if n_xid is not None:
            n_sidx = self._ref.add_state(eid, n_xid)

        # stash metadata in storage
        d = [
            eid,
            xid,
            n_xid if n_xid is not None else self._max_i,
            sidx,
            n_sidx,
        ]

        self._ids[idx] = d

        # construct new item
        item = Item(
            eid=eid,
            idx=idx,
            xid=xid,
            n_xid=n_xid,
            sidx=sidx,
            n_sidx=n_sidx if n_xid is not None else None,
        )

        return item, last_item

    def has_xid(self, xid: XID):
        return self._ref.has_xid(xid)
