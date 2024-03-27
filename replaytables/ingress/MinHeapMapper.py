import numpy as np
from typing import Any, Dict
from replaytables.ingress.IndexMapper import IndexMapper
from replaytables.interface import EID, IDX, EIDs, IDXs
from replaytables._utils.MinMaxHeap import MinMaxHeap

class MinHeapMapper(IndexMapper):
    def __init__(self, max_size: int):
        super().__init__(max_size)

        self._heap = MinMaxHeap()
        self._eid2idx: Dict[EID, IDX] = {}
        self._idx2eid = np.zeros(max_size, dtype=np.int64)

    def eid2idx(self, eid: EID) -> IDX:
        default: Any = -1
        return self._eid2idx.get(eid, default)

    def eids2idxs(self, eids: EIDs) -> IDXs:
        f = np.vectorize(self.eid2idx, otypes=[np.int64])
        return f(eids)

    def add_eid(self, eid: EID, /, **kwargs: Any) -> IDX:
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

            last_eid: Any = self._idx2eid[idx]
            del self._eid2idx[last_eid]

        else:
            self._heap.add(p, idx)

        self._eid2idx[eid] = idx
        self._idx2eid[idx] = eid

        self._size = min(self._size + 1, self._max_size)
        return idx

    def update_eid(self, eid: EID, /, **kwargs: Any):
        assert 'priority' in kwargs
        p = kwargs['priority']

        idx = self._eid2idx[eid]
        self._heap.update(p, idx)

    def has_eids(self, eids: EIDs):
        f = np.vectorize(lambda e: e in self._eid2idx, otypes=[np.bool_])
        return f(eids)
