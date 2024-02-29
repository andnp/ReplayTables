import numpy as np

from typing import Any
from ReplayTables.interface import Batch, IDXs, Item, LaggedTimestep, Timestep
from ReplayTables.ReplayBuffer import ReplayBufferInterface
from ReplayTables.ingress.LagBuffer import LagBuffer

from tests._utils.fake_data import batch_equal

# ---------------
# -- Baselines --
# ---------------

class SuperSimpleBuffer:
    def __init__(self, max_size: int):
        self.storage = {}
        self._i = 0
        self._max = max_size

    def add(self, e):
        self.storage[self._i] = Batch(
            x=e.x,
            a=e.a,
            r=e.r,
            gamma=e.gamma,
            terminal=e.terminal,
            eid=e.eid,
            xp=e.n_x,
        )
        self._i = (self._i + 1) % self._max

    def size(self):
        return len(self.storage)

    def get(self, idxs: IDXs) -> Batch:
        x, a, r, g, t, e, xp = zip(*[self.storage[idx] for idx in idxs])

        xps = []
        for _xp in xp:
            if _xp is None:
                xps.append(np.zeros(8))
            else:
                xps.append(_xp)

        eid: Any = np.array(e)
        return Batch(
            x=np.array(x),
            a=np.array(a),
            r=np.array(r),
            gamma=np.array(g),
            terminal=np.array(t),
            eid=eid,
            xp=np.array(xps),
        )

class ReplayBuffer(ReplayBufferInterface):
    def _on_add(self, item: Item, transition: LaggedTimestep):
        self._sampler.replace(item.idx, transition)

# -----------
# -- Tests --
# -----------

def test_1():
    rng = np.random.default_rng(0)
    ss = SuperSimpleBuffer(100)
    bu = ReplayBuffer(100, rng=rng)

    lag = LagBuffer(1)

    last_term = False
    for step in range(1000000):
        x = rng.normal(size=8)
        a = step
        r = rng.normal()
        gamma = rng.uniform(0.1, 0.99)
        term = not last_term and rng.random() < 0.01
        last_term = term

        if term:
            x = None

        lags = lag.add(Timestep(
            x=x,
            a=a,
            r=r,
            gamma=gamma,
            terminal=term,
        ))

        for d in lags:
            ss.add(d)
            bu.add(d)

        if step > 0:
            idxs: Any = rng.integers(ss.size(), size=8, dtype=np.int64)

            g1 = ss.get(idxs)
            g2 = bu._storage.get(idxs)

            assert batch_equal(g1, g2)
