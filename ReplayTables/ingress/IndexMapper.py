import numpy as np
from typing import Any
from abc import abstractmethod
from ReplayTables.interface import LaggedTimestep, StorageIdx, StorageIdxs, TransId, TransIds

class IndexMapper:
    def __init__(self, max_size: int):
        self._max_size = max_size
        self._size = 0

    @property
    def size(self):
        return self._size

    @abstractmethod
    def add_transition(self, transition: LaggedTimestep, /, **kwargs: Any) -> StorageIdx | None: ...

    @abstractmethod
    def eid2idx(self, tid: TransId) -> StorageIdx: ...

    @abstractmethod
    def eids2idxs(self, tids: TransIds) -> StorageIdxs: ...

    @abstractmethod
    def has_eids(self, tids: TransIds) -> np.ndarray: ...
