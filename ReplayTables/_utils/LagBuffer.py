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
