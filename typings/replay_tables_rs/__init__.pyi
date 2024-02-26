from typing import Tuple
from ReplayTables.interface import EID, IDX, SIDX, XID, IDXs, Item, Items

class RefCount:
    def add_state(self, eid: EID, xid: XID) -> SIDX: ...
    def load_state(self, xid: XID) -> int: ...
    def has_xid(self, xid: XID) -> bool: ...
    def remove_transition(self, eid: EID) -> None: ...


class MetadataStorage:
    def __init__(self, max_size: int, null_idx: int): ...
    def get_item_by_idx(self, idx: IDX) -> Item: ...
    def get_items_by_idx(self, idxs: IDXs) -> Items: ...
    def add_item(self, eid: EID, idx: IDX, xid: XID, n_xid: XID | None) -> Tuple[Item, Item | None]: ...
    def has_xid(self, xid: XID) -> bool: ...