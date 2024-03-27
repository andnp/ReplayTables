import numpy as np
from abc import abstractmethod

class Tracker:
    @abstractmethod
    def update(self, a: float) -> float:
        ...


class MeanTracker(Tracker):
    def __init__(self, beta: float):
        self._b = beta
        self._t = 0
        self._m = 0.

    def update(self, a: float) -> float:
        self._t += 1
        if self._t == 1:
            self._m = a

        self._m = (1 - self._b) * a + self._b * self._m
        return self._m

class ZScoreTracker(Tracker):
    def __init__(self, beta: float):
        self._b = beta
        self._t = 0
        self._m = 0.
        self._v = 0.

    def update(self, a: float) -> float:
        self._t += 1
        if self._t == 1:
            self._m = a

        self._m = (1 - self._b) * a + self._b * self._m
        self._v = (1 - self._b) * (a - self._m) ** 2 + self._b * self._v

        if self._v < 1e-8:
            return 0.

        return (a - self._m) / np.sqrt(self._v)
