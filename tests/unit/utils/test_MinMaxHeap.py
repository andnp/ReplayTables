from ReplayTables._utils.MinMaxHeap import MinMaxHeap

class TestMinMaxHeap:
    def test_can_track_stats(self):
        h = MinMaxHeap()

        h.add(1.1, 0)
        p, got = h.min()
        assert p == 1.1
        assert got == 0

        p, got = h.max()
        assert p == 1.1
        assert got == 0

        h.add(3, 2)
        p, got = h.min()
        assert p == 1.1
        assert got == 0

        p, got = h.max()
        assert p == 3
        assert got == 2

        for i in range(33):
            h.add(i, i)

        p, got = h.min()
        assert p == 0
        assert got == 0

        p, got = h.max()
        assert p == 32
        assert got == 32

        p, got = h.pop_min()
        assert p == 0
        assert got == 0

        p, got = h.pop_min()
        assert p == 1
        assert got == 1

        p, got = h.pop_max()
        assert p == 32
        assert got == 32

        p, got = h.pop_max()
        assert p == 31
        assert got == 31
