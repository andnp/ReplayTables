import numpy as np
from typing import Iterable, Tuple
from ReplayTables._utils.RandDict import RandDict
from ReplayTables._utils.numpy import rotatedSequence
from ReplayTables.Table import Table, View

class EpisodeView(View):
    # if max_size == 0, then do not apply padding
    # otherwise, pad so that all episodes have equivalent length
    def __init__(self, table: Table, max_size: int = 0):
        super().__init__(table)

        self.max_size = max_size
        self._table.addSubscriber(self)

        self._refs: RandDict[int, Tuple[int, int]] = RandDict()
        self._idx = 0

        self._seq_idx = 0

    def _onAdd(self, idx: int):
        if self._seq_idx != 0:
            self._seq_idx += 1
            return

        self._refs[self._idx] = (idx, idx)

        self._seq_idx += 1

    def _onEnd(self):
        start, _ = self._refs[self._idx]
        self._refs[self._idx] = (start, start + self._seq_idx)

        self._idx += 1
        self._seq_idx = 0

    def _seq2TensorTuple(self, seqs: Iterable[Tuple[int, int]]):
        cols = (self._table.getSequence(rotatedSequence(seq[0], seq[1], self._table.max_size), self.max_size) for seq in seqs)

        return tuple(map(np.stack, zip(*cols)))

    def sample(self, size: int = 1):
        idxs = self._table._rng.permutation(len(self._refs))[:size]
        return self._seq2TensorTuple((self._refs.getIndex(idx) for idx in idxs))

    def getAll(self):
        return self._seq2TensorTuple(self._refs.values())

    def clear(self):
        self._refs.clear()
