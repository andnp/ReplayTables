import numpy as np
from typing import Any, Dict
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.interface import LaggedTimestep, StorageIdx, StorageIdxs, TransId, TransIds
from ReplayTables._utils.MinMaxHeap import MinMaxHeap

class MinHeapMapper(IndexMapper):
    def __init__(self, max_size: int):
        super().__init__(max_size)

        self._heap = MinMaxHeap()
        self._eid2idx: Dict[TransId, StorageIdx] = {}
        self._idx2eid = np.zeros(max_size, dtype=np.int64)

    def get_storage_idx(self, tid: TransId) -> StorageIdx:
        default: Any = -1
        return self._eid2idx.get(tid, default)

    def get_storage_idxs(self, tids: TransIds) -> StorageIdxs:
        f = np.vectorize(self.get_storage_idx, otypes=[np.int64])
        return f(tids)

    def add_transition(self, transition: LaggedTimestep, /, **kwargs: Any) -> StorageIdx:
        # check if priority is given, else assume max
        if 'priority' in kwargs:
            p = kwargs['priority']
        else:
            p, _ = self._heap.max()

        # when not full, next index is just the current size
        idx: Any = self._size

        # when full, delete lowest priority
        if self._size == self._max_size:
            _, idx = self._heap.min()
            self._heap.update(p, idx)

            last_tid: Any = self._idx2eid[idx]
            del self._eid2idx[last_tid]

        else:
            self._heap.add(p, idx)

        tid = transition.trans_id
        self._eid2idx[tid] = idx
        self._idx2eid[idx] = tid

        self._size = min(self._size + 1, self._max_size)
        return idx

    def update_transition(self, tid: TransId, /, **kwargs: Any):
        assert 'priority' in kwargs
        p = kwargs['priority']

        idx = self._eid2idx[tid]
        self._heap.update(p, idx)

    def has_transitions(self, tids: TransIds):
        f = np.vectorize(lambda e: e in self._eid2idx, otypes=[np.bool_])
        return f(tids)
