import numpy as np
from typing import Iterable, Tuple
from ReplayTables._utils.RandDict import RandDict
from ReplayTables._utils.numpy import rotatedSequence
from ReplayTables.Table import Table, View

class NStepView(View):
    def __init__(self, table: Table, size: int):
        super().__init__(table)

        # sequences whose starting index is older than this are invalid
        # we will clear these lazily when able
        self.max_age = table.max_size
        self.size = size

        # add a communication link between this view and its parent table
        # so that states are synchronized
        self._table.addSubscriber(self)

        # a special dictionary which stores keys and values in hash tables
        # to allow O(1) random sampling (instead of O(n))
        self._refs: RandDict[int, Tuple[int, int]] = RandDict()

        # monotonically increasing index for accessing
        # self._refs
        self._idx = 0

        # track the current sequence of indices
        # reset whenever the trajectory ends
        self._seq_idx = 0

        # keep track of the last sequence length from this view
        # that way we can back-track to find the last element
        self._last_seq_length = -1

    # called by Table whenever a new datapoint is stored in the table
    def _onAdd(self, idx: int):
        # create a placeholder sequence which starts and ends at the current index
        self._refs[self._idx] = (idx, idx)
        self._idx += 1
        self._seq_idx += 1

        # a sequence can be at most size `n`
        # because of this, we only need to increment the past `n` sequences
        # so iterate backwards over the most recent indices
        n = min(self.size, self._seq_idx)
        to_update = (i - 1 for i in range(self._idx, self._idx - n, -1))

        # lengthen these sequences by a step
        for i in to_update:
            self._refs[i] = (self._refs[i][0], idx + 1)

    # called whenever the table signals the end of a trajectory
    def _onEnd(self):
        self._last_seq_length = min(self._seq_idx, self.size)
        self._seq_idx = 0

    def _seq2TensorTuple(self, seqs: Iterable[Tuple[int, int]]):
        cols = (self._table.getSequence(rotatedSequence(seq[0], seq[1], self._table.max_size), self.size) for seq in seqs)

        return tuple(map(np.stack, zip(*cols)))

    def _resample(self) -> Tuple[int, int]:
        idx = self._table._rng.integers(0, len(self._refs))
        seq = self._refs.getIndex(idx)

        age = self._table._idx - seq[0]
        if age > self.max_age:
            self._refs.delIndex(idx)
            return self._resample()

        return seq

    def sample(self, size: int = 1):
        seqs = (self._resample() for _ in range(size))
        return self._seq2TensorTuple(seqs)

    def getAll(self):
        self.clearOld()
        return self._seq2TensorTuple(self._refs.values())

    def numSequencesThisRound(self):
        # this happens if we never see a termination
        if self._last_seq_length == -1:
            return min(self._idx, self.size)

        return min(self._last_seq_length, self.size)

    def getLastComplete(self, offset: int = 0):
        # clear out memory only when it is twice as full as necessary
        # save some compute since we are hardly using any memory
        if len(self._refs) > self._table.max_size * 2:
            self.clearOld()

        last = self.numSequencesThisRound()
        seq = self._refs[self._idx - last + offset]
        return self._seq2TensorTuple([seq])

    def clearOld(self):
        # create an iterator of all of the keys to delete
        def to_del():
            for key in self._refs:
                seq = self._refs[key]

                if self._table._idx - seq[0] > self.max_age:
                    yield key

        # note this needs to be 2 loops
        # otherwise we change dict while iterating, which is error-prone
        keys = list(to_del())
        for key in keys:
            del self._refs[key]

    def clear(self):
        # clean out the list of saved n-step sequences
        self._refs.clear()
        # we can now reset this monotonic counter, since all dependent artifacts have been deleted
        self._idx = 0
