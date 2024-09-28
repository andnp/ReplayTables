from dataclasses import dataclass
from typing import Any, Hashable, List, cast
from ReplayTables.interface import Timestep, LaggedTimestep, XID, TransId


@dataclass
class BufferedTransition:
    trans_id: TransId = cast(Any, 0)
    xid: XID = cast(Any, 0)
    x: Any = 0
    a: Any = 0
    extra: dict[Hashable, Any] | None = None
    r: float = 0
    gamma: float = 1


class LagBuffer:
    def __init__(self, lag: int):
        self._lag = lag
        self._max_len = lag + 1

        self._idx = 0
        self._xid: Any = 0
        self._tid: Any = 0

        self._buffer: list[BufferedTransition] = [BufferedTransition() for _ in range(self._max_len)]

    def add(self, experience: Timestep):
        self._idx += 1
        idx = self._idx % self._max_len

        xid = None
        if experience.x is not None:
            xid = self._next_xid()
            d = self._buffer[idx]
            d.xid = xid
            d.x = experience.x
            d.a = experience.a
            d.extra = experience.extra
            d.r = 0.
            d.gamma = 1.

        if experience.r is not None:
            for i in range(self._lag):
                j = (idx + i + 1) % self._max_len
                d = self._buffer[j]

                d.r += d.gamma * experience.r
                d.gamma *= experience.gamma

        out: List[LaggedTimestep] = []
        if self._idx <= self._lag:
            return out

        f_idx = (idx - self._lag) % self._max_len
        f = self._buffer[f_idx]

        assert f.x is not None
        assert f.xid is not None
        out.append(LaggedTimestep(
            trans_id=self._next_tid(),
            xid=f.xid,
            x=f.x,
            a=f.a,
            r=f.r,
            gamma=f.gamma,
            extra=f.extra or {},
            terminal=experience.terminal,
            n_xid=xid,
            n_x=experience.x,
        ))

        if not experience.terminal:
            return out

        for i in range(1, self._lag):
            start = (f_idx + i) % self._max_len
            f = self._buffer[start]

            assert f.x is not None
            assert f.xid is not None
            out.append(LaggedTimestep(
                trans_id=self._next_tid(),
                xid=f.xid,
                x=f.x,
                a=f.a,
                r=f.r,
                gamma=f.gamma,
                extra=f.extra or {},
                terminal=experience.terminal,
                n_xid=xid,
                n_x=experience.x,
            ))

        self.flush()
        return out

    def flush(self):
        self._buffer = [BufferedTransition() for _ in range(self._max_len)]
        self._idx = 0

    def _next_tid(self) -> TransId:
        tid = self._tid
        self._tid += 1
        return tid

    def _next_xid(self) -> XID:
        xid = self._xid
        self._xid += 1
        return xid
