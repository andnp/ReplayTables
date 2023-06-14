import numpy as np
from typing import NewType, Iterable, TypeVar

T = TypeVar('T', bound=Iterable)
EID = NewType('EID', int)
EIDs = NewType('EIDs', np.ndarray)
