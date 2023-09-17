import numpy as np
import ReplayTables._utils.np as npu

from typing import Any, Dict
from ReplayTables.interface import LaggedTimestep
from ReplayTables.storage.BasicStorage import BasicStorage

class NonArrayStorage(BasicStorage):
    def __init__(self, max_size: int):
        super().__init__(max_size)

        self._state_store: Dict[int, Any] = {}

    def _deferred_init(self, transition: LaggedTimestep):
        self._built = True

        self._a = np.empty(self._max_size, dtype=npu.get_dtype(transition.a))
        self._state_store[-1] = None

    def _store_state(self, idx: int, state: Any):
        self._state_store[idx] = state

    def _load_state(self, idx: int) -> Any:
        return self._state_store[idx]

    def _load_states(self, idxs: np.ndarray) -> Any:
        return [self._load_state(idx) for idx in idxs]
