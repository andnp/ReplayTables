import numpy as np
from typing import Any
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.interface import EID, IDX, EIDs, IDXs

class RandomIndexer(IndexMapper):
    def __init__(self, max_size: int, rng: np.random.Generator):
        super().__init__(max_size)
        self.rng = rng
        self._idx2eid = {}
        self._eid2idx = {}

    def eid2idx(self, eid: EID) -> IDX:
        return self._eid2idx.get(eid, None)

    def eids2idxs(self, eids: EIDs) -> IDXs:
        return np.array([self._eid2idx[eid] for eid in eids]).astype(np.int64)
    
    def add_eid(self, eid: EID, /, **kwargs: Any) -> IDX:
        # if enough room in buffer add eid
        if self._size < self._max_size:
            idx = self._size
            self._idx2eid[idx] = eid
            self._eid2idx[eid] = idx
            self._size += 1
            return idx
        
        # if buffer full replace an existing random sample
        idx = self.rng.integers(0, self._max_size)

        old_eid = self._idx2eid.get(idx, None)
        if old_eid is not None: del self._eid2idx[old_eid]

        self._idx2eid[idx] = eid
        self._eid2idx[eid] = idx
        return idx

    def has_eids(self, eids: EIDs):
        return np.array([eid in self._eid2idx for eid in eids])
    
