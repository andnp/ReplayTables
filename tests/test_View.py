import unittest
import numpy as np

from ReplayTables.Table import Table
from ReplayTables.NStepView import NStepView

class TestView(unittest.TestCase):
    def test_getAllSequences(self):
        table = Table(7, seed=0, columns=[
            { 'name': 'A', 'shape': 3 },
            { 'name': 'B', 'shape': 1, 'dtype': bool },
            { 'name': 'C', 'shape': tuple(), 'dtype': 'int32' },
        ])

        # will record sequences of size 3
        view = NStepView(table, 3)

        for i in range(20):
            table.addTuple((np.arange(3) * i, i % 3 == 0, i))

        A, B, C = view.getAll()

        self.assertEqual(A.shape, (7, 3, 3))
        self.assertEqual(B.shape, (7, 3, 1))
        self.assertEqual(C.shape, (7, 3))

        self.assertTrue(np.allclose(C, [
            # n_t, n_{t+1}, n_{t+2}
            [13, 14, 15],
            [14, 15, 16],
            [15, 16, 17],
            [16, 17, 18],
            [17, 18, 19],
            # importantly, the last bits of the sequence will be incomplete
            # these are padded with np.nan for floats and 0 for ints (by default, configurable)
            [18, 19, 0 ],
            [19, 0 , 0 ],
        ]))

        # if we try to add a view to a table that already has data
        # that is undefined behavior and so through an error
        self.assertRaises(Exception, lambda: NStepView(table, 4))

    def test_customPad(self):
        table = Table(7, seed=0, columns=[
            { 'name': 'A', 'shape': 3 },
            { 'name': 'B', 'shape': 1, 'dtype': bool },
            { 'name': 'C', 'shape': tuple(), 'dtype': 'int32', 'pad': -22 },
        ])

        # will record sequences of size 3
        view = NStepView(table, 3)

        for i in range(20):
            table.addTuple((np.arange(3) * i, i % 3 == 0, i))

        A, B, C = view.getAll()

        self.assertEqual(A.shape, (7, 3, 3))
        self.assertEqual(B.shape, (7, 3, 1))
        self.assertEqual(C.shape, (7, 3))

        self.assertTrue(np.allclose(C, [
            [13, 14, 15],
            [14, 15, 16],
            [15, 16, 17],
            [16, 17, 18],
            [17, 18, 19],
            [18, 19,  -22],
            [19, -22, -22],
        ]))

    def test_endSequence(self):
        # if a sequence terminates during the stream
        # e.g. if an episode terminates during an RL stream of experience
        # then the view should also treat this as sequence termination

        table = Table(7, seed=0, columns=[
            { 'name': 'A', 'shape': 3 },
            { 'name': 'B', 'shape': 1, 'dtype': bool },
            { 'name': 'C', 'shape': tuple(), 'dtype': 'int32' },
        ])

        # will record sequences of size 3 and 5
        view3 = NStepView(table, 3)
        view5 = NStepView(table, 5)

        for i in range(20):
            table.addTuple((np.arange(3) * i, i % 3 == 0, i))

            # each sequence is of length 4
            if i % 4 == 3:
                table.endTrajectory()

        A, B, C = view3.getAll()
        self.assertTrue(np.allclose(C, [
            [13, 14, 15],
            [14, 15, 0],
            [15, 0, 0],
            [16, 17, 18],
            [17, 18, 19],
            [18, 19, 0],
            [19, 0, 0],
        ]))

        A, B, C = view5.getAll()
        self.assertTrue(np.allclose(C, [
            [13, 14, 15, 0, 0],
            [14, 15, 0, 0, 0],
            [15, 0, 0, 0, 0],
            [16, 17, 18, 19, 0],
            [17, 18, 19, 0, 0],
            [18, 19, 0, 0, 0],
            [19, 0, 0, 0, 0],
        ]))

    def test_sample(self):
        table = Table(7, seed=0, columns=[
            { 'name': 'A', 'shape': 3 },
            { 'name': 'B', 'shape': 1, 'dtype': bool },
            { 'name': 'C', 'shape': tuple(), 'dtype': 'int32' },
        ])

        # will record sequences of size 3 and 5
        view3 = NStepView(table, 3)
        view5 = NStepView(table, 5)

        for i in range(20):
            table.addTuple((np.arange(3) * i, i % 3 == 0, i))

            # each sequence is of length 4
            if i % 4 == 3:
                table.endTrajectory()

        # lots of numbers, here's what happened
        # an ER buffer with the 7 most recent elements
        # a stream of length 20 was observed, there were terminations every 4 samples
        # we collected trajectories of length 3 (i.e. 3-step trajectories)
        # now I want 2 of those trajectories sampled at random
        A, B, C = view3.sample(2)
        self.assertTrue(np.allclose(C, [
            [17, 18, 19],
            [15, 0, 0],
        ]))

        A, B, C = view5.sample(3)
        self.assertTrue(np.allclose(C, [
            [15, 0, 0, 0, 0],
            [16, 17, 18, 19, 0],
            [15, 0, 0, 0, 0],
        ]))

    def test_getLastComplete(self):
        table = Table(7, seed=0, columns=[
            { 'name': 'A', 'shape': 3 },
            { 'name': 'B', 'shape': 1, 'dtype': bool },
            { 'name': 'C', 'shape': tuple(), 'dtype': 'int32' },
        ])

        # will record sequences of size 3 and 5
        view3 = NStepView(table, 3)
        view5 = NStepView(table, 5)

        for i in range(20):
            table.addTuple((np.arange(3) * i, i % 3 == 0, i))

            # each sequence is of length 4
            if i % 4 == 3:
                table.endTrajectory()

        # this should be the last *complete* trajectory
        A, B, C = view3.getLastComplete()
        self.assertTrue(np.allclose(C, [17, 18, 19]))

        A, B, C = view5.getLastComplete()
        self.assertTrue(np.allclose(C, [16, 17, 18, 19, 0]))

        A, B, C = view5.getLastComplete(offset=1)
        self.assertTrue(np.allclose(C, [17, 18, 19, 0, 0]))
