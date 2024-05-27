import numpy as np
from typing import Tuple
from ReplayTables.interface import SIDX, XID, Item, Items, StorageIdx, StorageIdxs, TransId

class RefCount:
    def add_state(self, tid: TransId, xid: XID) -> SIDX: ...
    def load_state(self, xid: XID) -> int: ...
    def has_xid(self, xid: XID) -> bool: ...
    def remove_transition(self, tid: TransId) -> None: ...


class MetadataStorage:
    def __init__(self, *args): ...
    def get_item_by_idx(self, idx: StorageIdx) -> Item: ...
    def get_items_by_idx(self, idxs: StorageIdxs) -> Items: ...
    def add_item(self, tid: TransId, idx: StorageIdx, xid: XID, n_xid: XID | None) -> Tuple[Item, Item | None]: ...
    def has_xid(self, xid: XID) -> bool: ...
    def __getstate__(self): ...
    def __setstate__(self, state): ...

class SumTree:
    size: int
    dims: int

    def __new__(cls, *args): ...
    def __init__(self, size: int | None = None, dims: int | None = None): ...
    def update(self, dim: int, idxs: np.ndarray, values: np.ndarray): ...
    def update_single(self, dim: int, idx: int, value: float): ...
    def get_value(self, dim: int, idx: int) -> float: ...
    def get_values(self, dim: int, idxs: np.ndarray) -> np.ndarray: ...
    def dim_total(self, dim: int) -> float: ...
    def all_totals(self) -> np.ndarray: ...
    def total(self, w: np.ndarray) -> float: ...
    def effective_weights(self) -> np.ndarray: ...
    def query(self, v: np.ndarray, w: np.ndarray) -> np.ndarray: ...
    def __getstate__(self): ...
    def __setstate__(self, state): ...