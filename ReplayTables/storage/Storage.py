import numpy as np
from abc import abstractmethod
from typing import Any
from ReplayTables.interface import Batch, LaggedTimestep, Item, StorageIdx, StorageIdxs
from ReplayTables.storage.MetadataStorage import MetadataStorage

class Storage:
    def __init__(self, max_size: int):
        self._max_size = max_size
        self._max_i = np.iinfo(np.int64).max
        self.meta = MetadataStorage(max_size, self._max_i)

    @property
    def max_size(self):
        return self._max_size

    @abstractmethod
    def __len__(self) -> int:
        ...

    @abstractmethod
    def get(self, idxs: StorageIdxs) -> Batch:
        ...

    @abstractmethod
    def get_item(self, idx: StorageIdx) -> LaggedTimestep:
        ...

    @abstractmethod
    def set(self, idx: StorageIdx, transition: LaggedTimestep) -> Item:
        ...

    @abstractmethod
    def add(self, idx: StorageIdx, transition: LaggedTimestep, /, **kwargs: Any) -> Item:
        ...

    @abstractmethod
    def delete(self, idx: StorageIdx):
        ...
