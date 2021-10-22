from __future__ import annotations
import numpy as np
import numpy.typing as npt
from abc import abstractmethod
from numpy.random import default_rng
from typing import Any, Dict, List, Sequence, Tuple, TypedDict
from ReplayTables._utils.numpy import asTuple, padded

class _ColumnDefReq(TypedDict):
    name: str
    shape: npt._shape._ShapeLike

class ColumnDef(_ColumnDefReq, total=False):
    pad: float
    pad_multiple: int
    dtype: npt.DTypeLike

# ------------------------
# -- base View contract --
# ------------------------

# to avoid circular imports, this needs to be stored alongside Table
class View:
    def __init__(self, table: Table) -> None:
        self._table = table

    @abstractmethod
    def _onAdd(self, idx: int):
        ...

    @abstractmethod
    def _onEnd(self):
        ...

    @abstractmethod
    def sample(self, size: int = 1) -> Tuple[np.ndarray]:
        ...

    @abstractmethod
    def getAll(self) -> Tuple[np.ndarray]:
        ...

    @abstractmethod
    def clear(self):
        ...


# -------------------------
# -- base Table contract --
# -------------------------
class Table:
    def __init__(self, max_size: int, columns: Sequence[ColumnDef], seed: int = 0):
        self.max_size = max_size
        self._column_defs = columns

        self.seed = seed
        self._rng = default_rng(seed)

        # monotonically increasing index which counts how many times we've added
        # technically we rely on numpy.int64 in the code so there is a limit
        # but that's okay, this limit is too huge for my use cases
        self._idx = 0
        self._samples = 0

        # force a consistent order over columns
        # defined by user input order
        self._col_names = list(map(lambda c: c['name'], columns))
        self.columns: Dict[str, np.ndarray] = {}

        # views of this table
        # this need to be informed whenever data is added
        # or whenever a trajectory terminates
        self._subscribers: List[Any] = []

        # values to pad a tensor with
        # depends on datatype
        self.pads: List[float] = []

        # the padding size will always be a multiple of this value
        # useful when the padded data has unknown size and is being shipped
        # off to jax (or other XLA compilers) and we don't want kernel recompilations
        self._multiples: List[int] = []

        # build these at the end in an easily overrideable function
        self._buildColumns()

    def _buildColumns(self):
        for col_def in self._column_defs:
            # construct the shape of the storage
            # which should be the shape of the column, plus
            # a leading axis of size max_size
            shape = (self.max_size, ) + asTuple(col_def['shape'])

            # it's okay to use totally empty arrays and not waste time
            # cleaning memory. We will do bound checks and avoid
            # reaching into uninitialized memory
            column = np.empty(shape, dtype=col_def.get('dtype'))
            self.columns[col_def['name']] = column

            if 'pad_multiple' in col_def:
                self._multiples.append(col_def['pad_multiple'])
            else:
                self._multiples.append(1)

            # figure out what value to use to pad arrays
            if 'pad' in col_def:
                self.pads.append(col_def['pad'])
            elif np.issubdtype(col_def.get('dtype'), np.integer):
                self.pads.append(0)
            else:
                self.pads.append(np.nan)

    def addSubscriber(self, sus: View):
        if self._idx > 0:
            raise Exception("Cannot subscribe after data has already been collected")

        self._subscribers.append(sus)

    def addTuple(self, data: Sequence[npt.ArrayLike]):
        for i, name in enumerate(self._col_names):
            col = self.columns[name]
            d = data[i]

            col[self._idx % self.max_size] = d

        for sus in self._subscribers: sus._onAdd(self._idx)
        self._idx += 1
        self._samples = min(self._samples + 1, self.max_size)

    def endTrajectory(self):
        for sus in self._subscribers: sus._onEnd()

    def _iterCols(self):
        return (self.columns[name] for name in self._col_names)

    def getSequence(self, seq: np.ndarray, pad: int = 0) -> Tuple[np.ndarray, ...]:
        if not pad:
            return tuple((col[seq] for col in self._iterCols()))
        else:
            return tuple((padded(col[seq], pad, mult, pad_val) for col, mult, pad_val in zip(self._iterCols(), self._multiples, self.pads)))

    def getAll(self):
        return tuple((np.roll(col, -self._idx, axis=0) for col in self._iterCols()))

    def sample(self, size: int = 1):
        idxs = self._rng.permutation(self._samples)[:size]
        return tuple((col[idxs] for col in self._iterCols()))

    def __len__(self):
        return self._samples
