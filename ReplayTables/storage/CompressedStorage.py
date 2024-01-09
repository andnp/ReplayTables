import lz4.frame
import numpy as np
import ReplayTables._utils.np as npu

from typing import Dict
from concurrent.futures import ThreadPoolExecutor, Future

from ReplayTables.interface import LaggedTimestep, SIDX, SIDXs
from ReplayTables.storage.BasicStorage import BasicStorage

class CompressedStorage(BasicStorage):
    def __init__(self, max_size: int):
        super().__init__(max_size)

        self._state_store: Dict[int, bytes] = {}
        self._tpe = ThreadPoolExecutor(max_workers=2)
        self._locks: Dict[int, Future] = {}

    def _deferred_init(self, transition: LaggedTimestep):
        self._built = True

        shape = transition.x.shape
        self._dtype = transition.x.dtype
        zero_x = np.zeros(shape, dtype=self._dtype)
        self._a = np.empty(self._max_size, dtype=npu.get_dtype(transition.a))

        self._state_store[-1] = lz4.frame.compress(zero_x)
        self._shape = zero_x.shape

    def _wait(self, idx: int):
        if idx in self._locks:
            self._locks[idx].result()
            del self._locks[idx]

    def _store_state(self, idx: SIDX, state: np.ndarray):
        def _inner(data):
            self._state_store[idx] = lz4.frame.compress(data)

        self._wait(idx)
        self._locks[idx] = self._tpe.submit(_inner, state)

    def _load_state(self, idx: SIDX) -> np.ndarray:
        self._wait(idx)
        raw = lz4.frame.decompress(self._state_store[idx])
        return np.frombuffer(raw, dtype=self._dtype).reshape(self._shape)

    def _load_states(self, idxs: SIDXs) -> np.ndarray:
        return np.stack([self._load_state(idx) for idx in idxs])

    def _remove_state(self, sidx: SIDX):
        if sidx in self._state_store:
            del self._state_store[sidx]

    def __getstate__(self):
        for idx in list(self._locks): self._wait(idx)
        d = self.__dict__.copy()
        del d['_tpe']
        return d

    def __setstate__(self, state):
        self.__dict__ = state
        self._tpe = ThreadPoolExecutor(max_workers=2)
        self._locks = {}
