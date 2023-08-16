from abc import abstractmethod
from typing import Any
from ReplayTables.interface import Batch, LaggedTimestep, EIDs, IDX, IDXs

class Storage:
    def __init__(self, max_size: int):
        self._max_size = max_size

    @abstractmethod
    def __len__(self) -> int:
        ...

    @abstractmethod
    def __delitem__(self, idx: IDX):
        ...

    @abstractmethod
    def get(self, idxs: IDXs) -> Batch:
        ...

    @abstractmethod
    def get_item(self, idx: IDX) -> LaggedTimestep:
        ...

    @abstractmethod
    def set(self, idx: IDX, n_idx: IDX | None, transition: LaggedTimestep):
        ...

    @abstractmethod
    def add(self, idx: IDX, n_idx: IDX | None, transition: LaggedTimestep, /, **kwargs: Any) -> None:
        ...

    @abstractmethod
    def get_eids(self, idxs: IDXs) -> EIDs:
        ...
