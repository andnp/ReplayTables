from typing import Any, Dict, List, NewType
from ReplayTables.interface import T, EID, EIDs
from ReplayTables.storage.Storage import Storage

Idx = NewType('Idx', int)

class BasicStorage(Storage[T]):
    def __init__(self, max_size: int):
        super().__init__(max_size)

        self._store: Dict[Idx, T] = {}

    def add(self, transition: T, /, **kwargs: Any) -> EID:
        eid = self._next_eid()

        # by wrapping, this implicitly deletes old transitions (i.e. circular buffer)
        idx = self.eid2idx(eid)
        self._store[idx] = transition

        return eid

    def set(self, eid: EID, transition: T):
        idx = self.eid2idx(eid)
        self._store[idx] = transition

    def get(self, eids: EIDs) -> List[T]:
        samples = [self._store[self.eid2idx(e)] for e in eids]
        return samples

    def get_item(self, idx: EID) -> T:
        return self._store[self.eid2idx(idx)]

    def __delitem__(self, eid: EID):
        idx = self.eid2idx(eid)
        del self._store[idx]

    def __len__(self):
        return len(self._store)

    def eid2idx(self, eid: EID) -> Idx:
        idx: Any = eid % self._max_size
        return idx
