from typing import Tuple
from ReplayTables.interface import Item, Items, XID, StorageIdx, StorageIdxs, TransId
import ReplayTables.rust as ru

_EID_C = 0
_XID_C = 1
_NXID_C = 2
_SIDX_C = 3
_NSIDX_C = 4

class MetadataStorage:
    def __init__(self, max_size: int, null_idx: int):
        self._m = ru.MetadataStorage(max_size, null_idx)

    def get_item_by_idx(self, idx: StorageIdx) -> Item:
        return self._m.get_item_by_idx(idx)

    def get_items_by_idx(self, idxs: StorageIdxs) -> Items:
        return self._m.get_items_by_idx(idxs)

    def add_item(self, eid: TransId, idx: StorageIdx, xid: XID, n_xid: XID | None) -> Tuple[Item, Item | None]:
        return self._m.add_item(eid, idx, xid, n_xid)

    def has_xid(self, xid: XID):
        return self._m.has_xid(xid)

    def __getstate__(self):
        return {
            'm': self._m.__getstate__()
        }

    def __setstate__(self, state):
        self._m = ru.MetadataStorage()
        self._m.__setstate__(state['m'])
