import numpy as np
from typing import Any
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.interface import LaggedTimestep, StorageIdx, StorageIdxs, TransId, TransIds

class RandomIndexer(IndexMapper):
    def __init__(self, max_size: int, rng: np.random.Generator):
        super().__init__(max_size)
        self.rng = rng
        self._idx2eid = {}
        self._eid2idx = {}

    def get_storage_idx(self, tid: TransId) -> StorageIdx:
        return self._eid2idx.get(tid, None)

    def get_storage_idxs(self, tids: TransIds) -> StorageIdxs:
        idxs: Any = np.array([self._eid2idx[tid] for tid in tids]).astype(np.int64)
        return idxs

    def add_transition(self, transition: LaggedTimestep, /, **kwargs: Any) -> StorageIdx:
        tid = transition.trans_id

        # if enough room in buffer add transition
        if self._size < self._max_size:
            idx: Any = self._size
            self._idx2eid[idx] = tid
            self._eid2idx[tid] = idx
            self._size += 1
            return idx

        # if buffer full replace an existing random sample
        idx = self.rng.integers(0, self._max_size)

        old_tid = self._idx2eid.get(idx, None)
        if old_tid is not None: del self._eid2idx[old_tid]

        self._idx2eid[idx] = tid
        self._eid2idx[tid] = idx
        return idx

    def has_transitions(self, tids: TransIds):
        return np.array([tid in self._eid2idx for tid in tids])
