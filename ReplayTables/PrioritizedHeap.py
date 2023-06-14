import numpy as np
import dataclasses

from typing import Any, Dict, List, Optional, Tuple, Type
from ReplayTables._utils.logger import logger
from ReplayTables._utils.MinMaxHeap import MinMaxHeap
from ReplayTables.ReplayBuffer import ReplayBufferInterface
from ReplayTables.interface import EID, EIDs, T
from ReplayTables.storage.Storage import Storage

@dataclasses.dataclass
class PrioritizedHeapConfig:
    threshold: float = 1.0

class PrioritizedHeap(ReplayBufferInterface[T]):
    def __init__(self, max_size: int, structure: Type[T], rng: np.random.Generator, config: Optional[PrioritizedHeapConfig] = None):
        super().__init__(max_size, structure, rng)

        self._c = config or PrioritizedHeapConfig()
        self._heap = MinMaxHeap[EID]()
        self._storage = NoncircularBuffer(max_size)

    def size(self):
        return self._heap.size()

    def _add(self, transition: T):
        eid = getattr(transition, 'eid', None)
        if eid is not None:
            self._storage.set(eid, transition)
        else:
            eid = self._storage.add(transition)
            try:
                setattr(transition, 'eid', eid)
            except Exception: ...

        return eid

    def add(self, transition: T, /, **kwargs: Any):
        priority = kwargs['priority']
        if priority < self._c.threshold:
            return -1

        if self.size() == self._max_size and priority < self._heap.min()[0]:
            return -1

        eid = self._add(transition)
        if self.size() == self._max_size:
            p, tossed_eid = self._heap.pop_min()
            logger.debug(f'Heap is full. Tossing item: {tossed_eid} - {p}')
            print(eid, tossed_eid)
            print(self._heap.size())
            del self._storage[tossed_eid]

        logger.debug(f'Adding element: {eid} - {priority}')
        self._heap.add(priority, eid)
        return eid

    def _pop_min_idx(self):
        if self._heap.size() == 0:
            return None

        p, idx = self._heap.pop_min()
        logger.debug(f'Grabbed sample: {idx} - {p}')
        return idx

    def _pop_idx(self):
        if self._heap.size() == 0:
            return None

        p, idx = self._heap.pop_max()
        logger.debug(f'Grabbed sample: {idx} - {p}')
        return idx

    def pop_min(self):
        idx = self._pop_min_idx()
        if idx is None:
            return None

        d = self._storage.get_item(idx)
        del self._storage[idx]
        return d

    def pop(self):
        idx = self._pop_idx()
        if idx is None:
            return None

        d = self._storage.get_item(idx)
        del self._storage[idx]
        return d

    def _sample_idxs(self, n: int):
        idxs = (self._pop_idx() for _ in range(n))
        idxs = (d for d in idxs if d is not None)
        return np.fromiter(idxs, dtype=np.int64)

    def sample(self, n: int) -> Tuple[T, EIDs, np.ndarray]:
        batch, idxs, weights = super().sample(n)

        for idx in idxs:
            del self._storage[idx]

        return batch, idxs, weights

    def _isr_weights(self, idxs: EIDs) -> np.ndarray:
        return np.ones(len(idxs))


class NoncircularBuffer(Storage[T]):
    def __init__(self, max_size: int):
        super().__init__(max_size)

        self._store: Dict[EID, T] = {}

    def add(self, transition: T, /, **kwargs: Any) -> EID:
        eid = self._next_eid()
        self._store[eid] = transition

        return eid

    def set(self, eid: EID, transition: T):
        self._store[eid] = transition

    def get(self, eids: EIDs) -> List[T]:
        return [self._store[eid] for eid in eids]

    def get_item(self, eid: EID) -> T:
        return self._store[eid]

    def __delitem__(self, eid: EID):
        del self._store[eid]

    def __len__(self) -> int:
        return len(self._store)
