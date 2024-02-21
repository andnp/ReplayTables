import numpy as np

from collections import defaultdict
from typing import Any, Dict, Set
from ReplayTables.interface import EID, XID, SIDX

class RefCount:
    def __init__(self) -> None:
        self._i = 0

        self._eid2xids: Dict[EID, Set[XID]] = defaultdict(set)
        self._refs: Dict[XID, Set[EID]] = defaultdict(set)
        self._avail_idxs: Set[int] = set()

        max_i: Any = np.iinfo(np.int64).max
        self._idxs: Dict[XID, int] = {
            max_i: -1
        }

    def add_state(self, eid: EID, xid: XID) -> SIDX:
        self._eid2xids[eid].add(xid)
        self._refs[xid].add(eid)
        idx: Any = self._idxs.get(xid)

        if idx is None:
            idx = self._next_free_idx()
            self._idxs[xid] = idx
            return idx

        return idx

    def load_state(self, xid: XID):
        idx = self._idxs[xid]
        return idx

    def load_states(self, xids: np.ndarray):
        idxs = np.array([self._idxs[xid] for xid in xids], dtype=np.int64)
        return idxs

    def has_xid(self, xid: XID):
        return xid in self._idxs

    def remove_transition(self, eid: EID):
        if eid not in self._eid2xids:
            return

        xids = self._eid2xids[eid]
        del self._eid2xids[eid]

        for xid in xids:
            refs = self._refs[xid]
            refs.discard(eid)

            if len(refs) == 0:
                idx = self._idxs[xid]
                self._avail_idxs.add(idx)
                del self._refs[xid]
                del self._idxs[xid]

    def _next_free_idx(self) -> int:
        if len(self._avail_idxs) == 0:
            self._i += 1
            return self._i - 1

        return self._avail_idxs.pop()
