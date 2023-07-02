from typing import Any
from abc import abstractmethod
from ReplayTables.interface import EID, IDX, EIDs, IDXs

class IndexMapper:
    def __init__(self):
        ...

    @abstractmethod
    def add_eid(self, eid: EID, /, **kwargs: Any) -> IDX: ...

    @abstractmethod
    def remove_eid(self, eid: EID) -> IDX: ...

    @abstractmethod
    def eid2idx(self, eid: EID) -> IDX: ...

    @abstractmethod
    def eids2idxs(self, eids: EIDs) -> IDXs: ...
