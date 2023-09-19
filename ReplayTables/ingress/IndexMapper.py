import numpy as np
from typing import Any
from abc import abstractmethod
from ReplayTables.interface import EID, IDX, EIDs, IDXs

class IndexMapper:
    def __init__(self, max_size: int):
        self._max_size = max_size
        self._size = 0

    @property
    def size(self):
        return self._size

    @abstractmethod
    def add_eid(self, eid: EID, /, **kwargs: Any) -> IDX: ...

    @abstractmethod
    def remove_eid(self, eid: EID) -> IDX: ...

    @abstractmethod
    def eid2idx(self, eid: EID) -> IDX: ...

    @abstractmethod
    def eids2idxs(self, eids: EIDs) -> IDXs: ...

    @abstractmethod
    def has_eids(self, eids: EIDs) -> np.ndarray: ...
