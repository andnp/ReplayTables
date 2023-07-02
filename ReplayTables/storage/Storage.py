from abc import abstractmethod
from typing import Any, cast
from ReplayTables.interface import Batch, Timestep, TaggedTimestep, EID, EIDs

class Storage:
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
    def get(self, idxs: EIDs, lag: int) -> Batch:
        ...

    @abstractmethod
    def get_item(self, idx: EID) -> TaggedTimestep:
        ...

    @abstractmethod
    def set(self, eid: EID, transition: Timestep):
        ...

    @abstractmethod
    def add(self, transition: Timestep, /, **kwargs: Any) -> EID:
        ...
