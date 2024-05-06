import numpy as np
from typing import Any
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.interface import EID, IDX, EIDs, IDXs, LaggedTimestep

class CircularMapper(IndexMapper):
    def __init__(self, max_size: int):
        super().__init__(max_size)

        self._max_eid = 0

    def eid2idx(self, eid: EID) -> IDX:
        idx: Any = eid % self._max_size
        return idx

    def eids2idxs(self, eids: EIDs) -> IDXs:
        idxs: Any = eids % self._max_size
        return idxs.astype(np.int64)

    def add_transition(self, transition: LaggedTimestep, /, **kwargs: Any) -> IDX:
        self._size = min(self._size + 1, self._max_size)

        eid = transition.eid
        self._max_eid = max(eid, self._max_eid)
        return self.eid2idx(eid)

    def has_eids(self, eids: EIDs):
        lower = self._max_eid - self._size
        return (eids <= self._max_eid) & (eids > lower)
