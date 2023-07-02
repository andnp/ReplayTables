from typing import Any
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.interface import EID, IDX, EIDs, IDXs

class CircularMapper(IndexMapper):
    def __init__(self, max_size: int):
        self._max_size = max_size

    def eid2idx(self, eid: EID) -> IDX:
        idx: Any = eid % self._max_size
        return idx

    def eids2idxs(self, eids: EIDs) -> IDXs:
        idxs: Any = eids % self._max_size
        return idxs

    def add_eid(self, eid: EID, /, **kwargs: Any) -> IDX:
        return self.eid2idx(eid)

    def remove_eid(self, eid: EID) -> IDX:
        return self.eid2idx(eid)
