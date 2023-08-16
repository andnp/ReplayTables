import numpy as np
from typing import Any, Dict, Optional
from numba.typed import List as NList
from ReplayTables._utils.jit import try2jit
from concurrent.futures import ThreadPoolExecutor, Future

@try2jit()
def _update(tree: NList[np.ndarray], dim: int, idxs: np.ndarray, values: np.ndarray):
    for idx, value in zip(idxs, values):
        sub_idx = np.array(idx, dtype=np.uint64)
        old = tree[0][dim, idx]

        for i in range(len(tree)):
            tree[i][dim, sub_idx] += value - old
            sub_idx = np.array(sub_idx // 2, dtype=np.uint64)

class MemoryWriter:
    def __init__(self, mem: NList[np.ndarray], dims: int):
        self._mem = mem
        self._dims = dims

    def write(self, dim: int, idxs: np.ndarray, values: np.ndarray):
        _update(self._mem, dim, idxs, values)

    def sync(self):
        ...

class ThreadedWriter(MemoryWriter):
    def __init__(self, mem: NList[np.ndarray], dims: int):
        super().__init__(mem, dims)

        self._tpe = ThreadPoolExecutor(max_workers=5)
        self._locks: Dict[int, Optional[Future]] = { i: None for i in range(self._dims) }

        self._buffer: Dict[int, WriteBuffer] = {
            i: WriteBuffer() for i in range(self._dims)
        }

    def _wait(self, dim: int):
        lock = self._locks[dim]
        if lock is not None:
            lock.result()
            self._locks[dim] = None

    def _isDone(self, dim: int):
        lock = self._locks[dim]
        if lock is None:
            return True

        if lock.done():
            self._locks[dim] = None
            return True

        return False

    def _doneCallback(self, dim: int):
        data = self._buffer[dim].get()
        if data is None:
            return

        fut = self._tpe.submit(_update, self._mem, dim, *data)
        fut.add_done_callback(lambda _: self._doneCallback(dim))
        self._locks[dim] = fut

    def _clearBuffer(self, fut: Future, dim: int):
        f = Future[None]()

        def _inner(_: Any):
            data = self._buffer[dim].get()
            if data is None:
                f.set_result(None)
                return

            _if = self._tpe.submit(_update, self._mem, dim, *data)
            _if.add_done_callback(lambda _: f.set_result(None))

        fut.add_done_callback(_inner)
        return f

    def write(self, dim: int, idxs: np.ndarray, values: np.ndarray):
        if not self._isDone(dim):
            self._buffer[dim].add(idxs, values)
            return

        self._buffer[dim].add(idxs, values)
        data = self._buffer[dim].get()

        assert data is not None

        fut = self._tpe.submit(_update, self._mem, dim, *data)
        self._locks[dim] = self._clearBuffer(fut, dim)

    def sync(self):
        for i in range(self._dims):
            self._wait(i)


class WriteBuffer:
    def __init__(self):
        self.idxs = None
        self.values = None

    def add(self, idxs: np.ndarray, values: np.ndarray):
        if self.idxs is None:
            self.idxs = idxs
        else:
            self.idxs = np.concatenate((self.idxs, idxs), axis=0)

        if self.values is None:
            self.values = values
        else:
            self.values = np.concatenate((self.values, values), axis=0)

    def get(self):
        if self.idxs is None or self.values is None:
            return None

        out = (self.idxs, self.values)
        self.idxs = None
        self.values = None
        return out
