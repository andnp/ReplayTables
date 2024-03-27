import numpy as np
from typing import Any, Dict, Hashable, NewType, NamedTuple, Protocol, TypeVar

IDX = NewType('IDX', int)
IDXs = NewType('IDXs', np.ndarray)
EID = NewType('EID', int)
EIDs = NewType('EIDs', np.ndarray)
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
    eid: EID
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
    eid: EIDs
    xp: np.ndarray

T = TypeVar('T', bound=Timestep)

class Item(NamedTuple):
    eid: EID
    idx: IDX
    xid: XID
    n_xid: XID | None
    sidx: SIDX
    n_sidx: SIDX | None

class Items(NamedTuple):
    eids: EIDs
    idxs: IDXs
    xids: XIDs
    n_xids: XIDs
    sidxs: SIDXs
    n_sidxs: SIDXs
