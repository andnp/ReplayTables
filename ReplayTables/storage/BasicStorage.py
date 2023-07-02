import numpy as np
from typing import Any, Dict
from ReplayTables.interface import Batch, Timestep, TaggedTimestep, EID, EIDs, IDX
from ReplayTables.ingress.IndexMapper import IndexMapper
from ReplayTables.storage.Storage import Storage

from ReplayTables._utils.jit import try2jit

class BasicStorage(Storage):
    def __init__(self, max_size: int, idx_mapper: IndexMapper):
        super().__init__(max_size, idx_mapper)

        self._state_store: Dict[IDX, np.ndarray] = {}
        self._eids = np.zeros(max_size, dtype=np.uint64)
        # TODO: we should take dtype params to optionally store this as an integer
        self._a = np.zeros(max_size)
        self._r = np.zeros(max_size)
        self._term = np.zeros(max_size, dtype=np.bool_)
        self._gamma = np.zeros(max_size)

    def add(self, transition: Timestep, /, **kwargs: Any) -> EID:
        eid = self._next_eid()

        idx = self._idx_mapper.add_eid(eid, **kwargs)
        self._state_store[idx] = transition.x
        self._r[idx] = transition.r
        self._a[idx] = transition.a
        self._term[idx] = transition.terminal
        self._gamma[idx] = transition.gamma
        self._eids[idx] = eid

        return eid

    def set(self, eid: EID, transition: Timestep):
        idx = self._idx_mapper.eid2idx(eid)
        self._state_store[idx] = transition.x
        self._r[idx] = transition.r
        self._a[idx] = transition.a
        self._term[idx] = transition.terminal
        self._gamma[idx] = transition.gamma

    def get(self, eids: EIDs, lag: int) -> Batch:
        idxs = self._idx_mapper.eids2idxs(eids)

        n_eids: Any = eids + lag
        n_idxs = self._idx_mapper.eids2idxs(n_eids)
        x = np.stack([self._state_store[idx] for idx in idxs], axis=0)
        xp = np.stack([self._state_store[idx] for idx in n_idxs], axis=0)

        r, gamma, term = _return(self._max_size - lag, idxs, lag, self._r, self._term, self._gamma)
        return Batch(
            x=x,
            a=self._a[idxs],
            r=r,
            gamma=gamma,
            terminal=term,
            eid=eids,
            xp=xp,
        )

    def get_item(self, eid: EID) -> TaggedTimestep:
        idx = self._idx_mapper.eid2idx(eid)
        return TaggedTimestep(
            x=self._state_store[idx],
            a=self._a[idx],
            r=self._r[idx],
            gamma=self._gamma[idx],
            terminal=self._term[idx],
            eid=eid,
        )

    def __delitem__(self, eid: EID):
        idx = self._idx_mapper.remove_eid(eid)
        del self._state_store[idx]

    def __len__(self):
        return len(self._state_store)

@try2jit()
def _return(max_size: int, idxs: np.ndarray, lag: int, r: np.ndarray, term: np.ndarray, gamma: np.ndarray):
    samples = len(idxs)
    g = np.zeros(samples)
    d = np.ones(samples)
    t = np.zeros(samples, dtype=np.bool_)

    for b in range(samples):
        idx = idxs[b]
        for i in range(lag):
            n_idx = int((idx + i) % max_size)
            g[b] += d[b] * r[n_idx]

            if term[n_idx]:
                t[b] = True
                break

            d[b] *= gamma[n_idx]

    return g, d, t
