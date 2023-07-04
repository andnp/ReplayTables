from abc import abstractmethod
from typing import Any
from ReplayTables.interface import Batch, Timestep, TaggedTimestep, EID, EIDs, IDX, IDXs

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
    def get(self, idxs: IDXs, n_idxs: IDXs, lag: int) -> Batch:
        ...

    @abstractmethod
    def get_item(self, idx: IDX) -> TaggedTimestep:
        ...

    @abstractmethod
    def set(self, idx: IDX, transition: Timestep):
        ...

    @abstractmethod
    def add(self, idx: IDX, eid: EID, transition: Timestep, /, **kwargs: Any) -> None:
        ...

    @abstractmethod
    def get_eids(self, idxs: IDXs) -> EIDs:
        ...
