import numpy as np
from typing import Any, Dict, Hashable, NewType, NamedTuple, Protocol, TypeVar

StorageIdx = NewType('StorageIdx', int)
StorageIdxs = NewType('StorageIdxs', np.ndarray)
TransId = NewType('TransId', int)
TransIds = NewType('TransIds', np.ndarray)
XID = NewType('XID', int)
XIDs = NewType('XIDs', np.ndarray)
SIDX = NewType('SIDX', int)
SIDXs = NewType('SIDXs', np.ndarray)

class Addable(Protocol):
    def __add__(self, other: Any, /) -> Any:
        ...

class Ring(Protocol):
    def __add__(self, other: Any, /) -> Any:
        ...

    def __mul__(self, other: Any, /) -> Any:
        ...

    def __rmul__(self, other: Any, /) -> Any:
        ...

    def __pow__(self, other: Any, /) -> Any:
        ...

class Timestep(NamedTuple):
    x: np.ndarray | None
    a: Any
    r: Ring | None
    gamma: Ring
    terminal: bool
    extra: Dict[Hashable, Any] | None = None

class LaggedTimestep(NamedTuple):
    trans_id: TransId
    xid: XID
    x: np.ndarray
    a: Any
    r: Ring
    gamma: Ring
    terminal: bool
    extra: Dict[Hashable, Any]
    n_xid: XID | None
    n_x: np.ndarray | None

class Batch(NamedTuple):
    x: np.ndarray
    a: np.ndarray
    r: np.ndarray
    gamma: np.ndarray
    terminal: np.ndarray
    trans_id: TransIds
    xp: np.ndarray

T = TypeVar('T', bound=Timestep)

class Item(NamedTuple):
    trans_id: TransId
    storage_idx: StorageIdx
    xid: XID
    n_xid: XID | None
    sidx: SIDX
    n_sidx: SIDX | None

class Items(NamedTuple):
    trans_ids: TransIds
    storage_idxs: StorageIdxs
    xids: XIDs
    n_xids: XIDs
    sidxs: SIDXs
    n_sidxs: SIDXs
