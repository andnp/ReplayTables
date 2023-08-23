from abc import abstractmethod
from typing import Any
from ReplayTables.interface import Batch, LaggedTimestep, EID, EIDs, IDXs
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.ingress.CircularMapper import CircularMapper

class Storage:
    def __init__(self, max_size: int, idx_mapper: IndexMapper | None = None):
        self._idx_mapper = idx_mapper or CircularMapper(max_size)
        self._max_size = max_size

    @property
    def max_size(self):
        return self._max_size

    @abstractmethod
    def __len__(self) -> int:
        ...

    @abstractmethod
    def __delitem__(self, eid: EID):
        ...

    @abstractmethod
    def __contains__(self, eid: EID):
        ...

    @abstractmethod
    def get(self, eids: EIDs) -> Batch:
        ...

    @abstractmethod
    def get_item(self, eid: EID) -> LaggedTimestep:
        ...

    @abstractmethod
    def set(self, transition: LaggedTimestep):
        ...

    @abstractmethod
    def add(self, transition: LaggedTimestep, /, **kwargs: Any) -> None:
        ...

    @abstractmethod
    def get_eids(self, idxs: IDXs) -> EIDs:
        ...
