import numpy as np

from ReplayTables.ingress.LagBuffer import LagBuffer
from ReplayTables.interface import Timestep

class TestLagBuffer:
    def test_1_step(self):
        buffer = LagBuffer(1)

        exp1 = Timestep(
            x=np.array(3),
            a=0,
            r=None,
            gamma=0.99,
            terminal=False,
        )

        exp2 = Timestep(
            x=np.array(4),
            a=2,
            r=2.0,
            gamma=0,
            terminal=True,
        )

        out = list(buffer.add(exp1))
        assert out == []

        out = list(buffer.add(exp2))
        assert len(out) == 1

        exp = out[0]
        assert np.all(exp.x == exp1.x)
        assert exp.a == exp1.a
        assert exp.r == 2.0
        assert exp.gamma == 0
        assert exp.terminal
        assert np.all(exp.n_x == exp2.x)

        out = list(buffer.add(exp1))
        assert len(out) == 0

    def test_3_step(self):
        buffer = LagBuffer(3)

        experiences = []
        for i in range(3):
            exp = Timestep(
                x=np.array(1 + i),
                a=i,
                r=2.0 * (i + 1),
                gamma=0.9,
                terminal=False,
            )
            out = list(buffer.add(exp))
            assert out == []

            experiences.append(exp)

        exp = Timestep(
            x=np.array(4),
            a=22,
            r=8.0,
            gamma=0.9,
            terminal=False,
        )
        out = list(buffer.add(exp))
        assert len(out) == 1
        assert np.all(out[0].x == 1)
        assert out[0].a == 0
        assert out[0].r == 4 + (0.9 * 6) + (0.9 ** 2 * 8)
        assert out[0].gamma == 0.9 ** 3
        assert not out[0].terminal
        assert np.all(out[0].n_x == 4)

        term = Timestep(
            x=np.array(5),
            a=33,
            r=10.0,
            gamma=0,
            terminal=True,
        )

        out = list(buffer.add(term))
        assert len(out) == 3

        assert np.all(out[0].x == 2)
        assert out[0].a == 1
        assert out[0].r == 6 + (0.9 * 8) + (0.9 ** 2 * 10)
        assert out[0].gamma == 0.
        assert out[0].terminal
        assert np.all(out[0].n_x == 5)

        assert np.all(out[1].x == 3)
        assert out[1].a == 2
        assert out[1].r == 8 + (0.9 * 10)
        assert out[1].gamma == 0.
        assert out[1].terminal
        assert np.all(out[1].n_x == 5)

        assert np.all(out[2].x == 4)
        assert out[2].a == 22
        assert out[2].r == 10
        assert out[2].gamma == 0.
        assert out[2].terminal
        assert np.all(out[2].n_x == 5)

    def test_flush(self):
        buffer = LagBuffer(lag=1)

        buffer.add(Timestep(
            x=np.array(0),
            a=0,
            r=0,
            gamma=0,
            terminal=True,
        ))

        assert len(buffer._buffer) == 1
        buffer.flush()
        assert len(buffer._buffer) == 0
