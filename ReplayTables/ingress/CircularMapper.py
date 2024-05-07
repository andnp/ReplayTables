import numpy as np
from typing import Any
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.interface import LaggedTimestep, StorageIdx, StorageIdxs, TransId, TransIds

class CircularMapper(IndexMapper):
    def __init__(self, max_size: int):
        super().__init__(max_size)

        self._max_tid = 0

    def get_storage_idx(self, tid: TransId) -> StorageIdx:
        idx: Any = tid % self._max_size
        return idx

    def get_storage_idxs(self, tids: TransIds) -> StorageIdxs:
        idxs: Any = tids % self._max_size
        return idxs.astype(np.int64)

    def add_transition(self, transition: LaggedTimestep, /, **kwargs: Any) -> StorageIdx:
        self._size = min(self._size + 1, self._max_size)

        tid = transition.trans_id
        self._max_tid = max(tid, self._max_tid)
        return self.get_storage_idx(tid)

    def has_transitions(self, tids: TransIds):
        lower = self._max_tid - self._size
        return (tids <= self._max_tid) & (tids > lower)
