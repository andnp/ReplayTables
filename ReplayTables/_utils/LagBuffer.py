from typing import Dict, Generic, TypeVar

T = TypeVar('T')

class LagBuffer(Generic[T]):
    def __init__(self, maxlen: int):
        self._maxlen = maxlen
        self._i = 0

        self._store: Dict[int, T] = {}

    def push(self, t: T) -> T | None:
        item = self._store.get(self._i)

        self._store[self._i] = t
        self._i = (self._i + 1) % self._maxlen

        return item

    def last(self):
        idx = self._i - 1
        if idx < 0:
            idx = self._maxlen - 1

        return self._store[idx]

    def modify_last(self, t: T):
        idx = self._i - 1
        if idx < 0:
            idx = self._maxlen - 1

        self._store[idx] = t

    def flush(self):
        for j in range(len(self._store)):
            i = (self._i + j) % self._maxlen
            item = self._store.get(i)
            if item is None:
                break

            yield item
