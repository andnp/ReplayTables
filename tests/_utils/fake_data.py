import numpy as np
from typing import cast, Any, Dict, Hashable, Sequence, Tuple
from ReplayTables.interface import Batch, Timestep, LaggedTimestep, EID, XID
from ReplayTables.ingress.LagBuffer import LagBuffer

_zero = np.zeros(8)
def fake_timestep(
    x: np.ndarray | None = _zero,
    a: int = 0,
    r: float | None = 0.0,
    gamma: float = 0.99,
    terminal: bool = False,
    extra: Dict[Hashable, Any] | None = None,
):
    return Timestep(
        x=x,
        a=a,
        r=r,
        gamma=gamma,
        terminal=terminal,
        extra=extra,
    )

_zero_b = np.zeros((1, 8))
def fake_batch(
    x: np.ndarray = _zero_b,
    a: np.ndarray = _zero_b,
    r: np.ndarray = _zero_b,
    xp: np.ndarray = _zero_b,
):
    eids: Any = np.array([0], dtype=np.int64)
    return Batch(
        x=x,
        a=a,
        r=r,
        gamma=np.array([0.99]),
        terminal=np.array([False]),
        eid=eids,
        xp=xp
    )


def fake_lagged_timestep(
    eid: int,
    xid: int,
    n_xid: int,
    x: np.ndarray = _zero,
    a: int | float = 0,
    r: float = 0,
    gamma: float = 0.99,
    terminal: bool = False,
    extra: Dict = {},
    n_x: np.ndarray = _zero,
):
    return LaggedTimestep(
        eid=cast(EID, eid),
        xid=cast(XID, xid),
        x=x,
        a=a,
        r=r,
        gamma=gamma,
        terminal=terminal,
        extra=extra,
        n_xid=cast(XID, n_xid),
        n_x=n_x,
    )

def obs_equal(x1: np.ndarray | None, x2: np.ndarray | None):
    if x1 is None:
        return x2 is None

    return np.all(x1 == x2)

def lagged_equal(l1: LaggedTimestep, l2: LaggedTimestep):
    return obs_equal(l1.x, l2.x) \
        and obs_equal(l1.n_x, l2.n_x) \
        and l1.a == l2.a and l1.r == l2.r \
        and l1.gamma == l2.gamma \
        and l1.terminal == l2.terminal \
        and l1.xid == l2.xid and l1.n_xid == l2.n_xid


def batch_equal(b1: Batch, b2: Batch):
    return obs_equal(b1.x, b2.x) \
        and obs_equal(b1.xp, b2.xp) \
        and np.all(b1.a == b2.a) \
        and np.all(b1.eid == b2.eid) \
        and np.all(b1.r == b2.r) \
        and np.all(b1.gamma == b2.gamma) \
        and np.all(b1.terminal == b2.terminal)


def lags_to_batch(lagged: Sequence[LaggedTimestep]) -> Batch:
    zero = np.zeros_like(lagged[0].x)
    xps = []

    for lag in lagged:
        if lag.n_x is None:
            xps.append(zero)
        else:
            xps.append(lag.n_x)

    eids: Any = np.array([lag.eid for lag in lagged])
    return Batch(
        eid=eids,
        x=np.stack([d.x for d in lagged], axis=0),
        a=np.array([d.a for d in lagged]),
        r=np.array([d.r for d in lagged]),
        gamma=np.array([d.gamma for d in lagged]),
        terminal=np.array([d.terminal for d in lagged]),
        xp=np.stack(xps, axis=0),
    )


class DataStream:
    def __init__(self, obs_shape: Tuple[int, ...] = (8,)):
        self._shape = obs_shape
        self._rng = np.random.default_rng(0)
        self._start = True

    def next(self, hard_term: bool = False, soft_term: bool = False):
        assert not (hard_term and soft_term)
        start = self._start
        self._start = False

        x = None
        a = None
        r = None
        gamma = 0
        if not hard_term:
            x = self._rng.random(size=self._shape)
            a = self._rng.integers(0, 10)
            gamma = 0.99

        if not start:
            r = self._rng.random()

        return Timestep(
            x=x,
            a=a,
            r=r,
            gamma=gamma,
            terminal=(hard_term or soft_term),
        )


class LaggedDataStream:
    def __init__(self, lag: int, obs_shape: Tuple[int, ...] = (8,)):
        self._shape = obs_shape
        self._lag = LagBuffer(lag)
        self._data = DataStream(obs_shape)

    def next(self, hard_term: bool = False, soft_term: bool = False):
        d = self._data.next(hard_term, soft_term)
        exps = self._lag.add(d)

        if hard_term or soft_term:
            self._lag.flush()

        return exps

    def next_single(self):
        d = self.next()
        assert len(d) == 1
        return d[0]
