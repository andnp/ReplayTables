import numpy as np
from ReplayTables._utils.jit import try2jit
from typing import Any, Dict, List, Tuple
from ReplayTables.interface import Timestep, LaggedTimestep, XID, TransId

class LagBuffer:
    def __init__(self, lag: int):
        self._lag = lag
        self._max_len = lag + 1

        self._idx = 0
        self._xid: Any = 0
        self._tid: Any = 0

        self._buffer: Dict[int, Tuple[XID | None, Timestep]] = {}
        self._r = np.zeros(self._max_len, dtype=np.float_)
        self._g = np.zeros(self._max_len, dtype=np.float_)

    def add(self, experience: Timestep):
        self._idx = (self._idx + 1) % self._max_len
        idx = self._idx % self._max_len
        self._r[idx] = experience.r
        self._g[idx] = experience.gamma

        xid = None
        if experience.x is not None:
            xid = self._next_xid()

        self._buffer[idx] = (xid, experience)
        out: List[LaggedTimestep] = []
        if len(self._buffer) <= self._lag:
            return out

        f_idx = (idx - self._lag) % self._max_len
        f_xid, f = self._buffer[f_idx]
        r, g = _accumulate_return(self._r, self._g, f_idx, self._lag, self._max_len)

        assert f.x is not None
        assert f_xid is not None
        out.append(LaggedTimestep(
            trans_id=self._next_tid(),
            xid=f_xid,
            x=f.x,
            a=f.a,
            r=r,
            gamma=g,
            extra=f.extra or {},
            terminal=experience.terminal,
            n_xid=xid,
            n_x=experience.x,
        ))

        if not experience.terminal:
            return out

        for i in range(1, self._lag):
            start = (f_idx + i) % self._max_len
            f_xid, f = self._buffer[start]
            r, g = _accumulate_return(self._r, self._g, start, self._lag - i, self._max_len)

            assert f.x is not None
            assert f_xid is not None
            out.append(LaggedTimestep(
                trans_id=self._next_tid(),
                xid=f_xid,
                x=f.x,
                a=f.a,
                r=r,
                gamma=g,
                extra=f.extra or {},
                terminal=experience.terminal,
                n_xid=xid,
                n_x=experience.x,
            ))

        self.flush()
        return out

    def add_action(self, a: Any):
        idx = self._idx % self._max_len

        xid, experience = self._buffer[idx]
        experience = experience._replace(a=a)

        self._buffer[idx] = (xid, experience)

    def flush(self):
        self._buffer = {}
        self._idx = 0
        self._r = np.zeros(self._max_len, dtype=np.float_)
        self._g = np.zeros(self._max_len, dtype=np.float_)

    def _next_tid(self) -> TransId:
        tid = self._tid
        self._tid += 1
        return tid

    def _next_xid(self) -> XID:
        xid = self._xid
        self._xid += 1
        return xid


@try2jit()
def _accumulate_return(rs: np.ndarray, gs: np.ndarray, start: int, steps: int, max_len: int):
    g = 1.
    r = 0.
    for i in range(steps):
        idx = (start + i + 1) % max_len
        assert not np.isnan(rs[idx])
        r += rs[idx] * g
        g *= gs[idx]

    return r, g
