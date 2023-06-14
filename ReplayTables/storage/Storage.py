from abc import abstractmethod
from typing import Any, cast, Generic, List
from ReplayTables.interface import T, EID, EIDs

class Storage(Generic[T]):
    def __init__(self, max_size: int):
        self._max_size = max_size

        self._t = 0

    def _next_eid(self) -> EID:
        eid = cast(EID, self._t)
        self._t += 1
        return eid

    def _last_eid(self) -> EID:
        assert self._t > 0, "No previous EID!"
        return cast(EID, self._t - 1)

    @abstractmethod
    def __len__(self) -> int:
        ...

    @abstractmethod
    def __delitem__(self, eid: EID):
        ...

    @abstractmethod
    def get(self, idxs: EIDs) -> List[T]:
        ...

    @abstractmethod
    def get_item(self, idx: EID) -> T:
        ...

    @abstractmethod
    def set(self, eid: EID, transition: T):
        ...

    @abstractmethod
    def add(self, transition: T, /, **kwargs: Any) -> EID:
        ...
