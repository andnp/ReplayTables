from dataclasses import dataclass
from typing import Any, Hashable, cast
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
    def __init__(self, lag: int, multi_lag: bool = False):
        self._lag = lag
        self._multi = multi_lag
        self._max_len = lag + 1

        self._idx = 0
        self._xid: Any = 0
        self._tid: Any = 0

        self._buffer: list[BufferedTransition] = [BufferedTransition() for _ in range(self._max_len)]

    def add(self, experience: Timestep) -> list[LaggedTimestep]:
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

        # if there is no reward, then this must be the first
        # timestep of the episode
        if experience.r is None:
            return []

        # distribute reward and gamma across existing experiences
        for i in range(self._lag):
            j = (idx + i + 1) % self._max_len
            d = self._buffer[j]

            d.r += d.gamma * experience.r
            d.gamma *= experience.gamma

        out = self._build_timesteps(experience, xid)

        if experience.terminal:
            self.flush()

        return out

    def _build_timesteps(self, experience: Timestep, xid: XID | None) -> list[LaggedTimestep]:
        if self._idx <= self._lag and not self._multi:
            return []

        out = []

        idx = self._idx % self._max_len
        lag = min(self._lag, self._idx - 1)
        f_idx = (idx - lag) % self._max_len
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

        if not experience.terminal and not self._multi:
            return out

        for i in range(1, lag):
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
