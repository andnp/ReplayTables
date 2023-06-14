import numpy as np
from abc import abstractmethod
from typing import Any, Generic, List, Tuple, Type, cast
from ReplayTables.Distributions import UniformDistribution
from ReplayTables.interface import T, EIDs
from ReplayTables.storage.BasicStorage import BasicStorage
from ReplayTables.storage.Storage import Storage

class ReplayBufferInterface(Generic[T]):
    def __init__(self, max_size: int, structure: Type[T], rng: np.random.Generator):
        self._max_size = max_size
        self._structure = cast(Any, structure)
        self._rng = rng

        self._storage: Storage[T] = BasicStorage(self._max_size)

        self._views: List[ReplayViewInterface[T]] = []

    def size(self) -> int:
        return len(self._storage)

    def add(self, transition: T, /, **kwargs: Any):
        eid = self._storage.add(transition)
        self._update_dist(eid, transition=transition, **kwargs)
        for view in self._views:
            view._update_dist(eid, transition=transition, **kwargs)

        return eid

    def sample(self, n: int) -> Tuple[T, EIDs, np.ndarray]:
        idxs = self._sample_idxs(n)
        weights = self._isr_weights(idxs)
        return self.get(idxs), idxs, weights

    def get(self, eids: EIDs):
        samples = self._storage.get(eids)
        stacked = (np.stack(xs, axis=0) for xs in zip(*samples))

        return self._structure(*stacked)

    def register_view(self, view: Any):
        self._views.append(view)

    # required private methods
    @abstractmethod
    def _sample_idxs(self, n: int) -> EIDs: ...

    @abstractmethod
    def _isr_weights(self, idxs: EIDs) -> np.ndarray: ...

    # optional methods
    def _update_dist(self, idx: int, /, **kwargs: Any): ...


class ReplayBuffer(ReplayBufferInterface[T]):
    def __init__(self, max_size: int, structure: Type[T], rng: np.random.Generator):
        super().__init__(max_size, structure, rng)
        self._idx_dist = UniformDistribution(0)

    def _update_dist(self, idx: int, /, **kwargs: Any):
        self._idx_dist.update(self.size())

    def _sample_idxs(self, n: int):
        return self._idx_dist.sample(self._rng, n)

    def _isr_weights(self, idxs: np.ndarray):
        return np.ones(len(idxs))

class ReplayViewInterface(Generic[T]):
    def __init__(self, buffer: ReplayBufferInterface[T]):
        self._buffer = buffer
        self._rng = buffer._rng

        self._buffer.register_view(self)

    def size(self) -> int:
        return self._buffer.size()

    def sample(self, n: int) -> Tuple[T, EIDs, np.ndarray]:
        idxs = self._sample_idxs(n)
        weights = self._isr_weights(idxs)
        return self._buffer.get(idxs), idxs, weights

    # required private methods
    @abstractmethod
    def _sample_idxs(self, n: int) -> EIDs: ...

    @abstractmethod
    def _isr_weights(self, idxs: EIDs) -> np.ndarray: ...

    # optional methods
    def _update_dist(self, idx: int, /, **kwargs: Any): ...
