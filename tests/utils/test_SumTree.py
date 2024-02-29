import pickle
import numpy as np

from ReplayTables._utils.SumTree import SumTree

class TestSumTree:
    def test_can_add_stuff(self):
        # human readable test
        v = np.array([1, 2, 3, 4, 5])
        truth = 15
        tree = SumTree(500, dims=1)
        tree.update(0, [0, 5, 8, 102, 358], v)

        assert tree.dim_total(0) == truth

        # fuzz test
        tree = SumTree(100, dims=1)
        rng = np.random.default_rng(0)
        for _ in range(100):
            v = rng.standard_normal(100)
            truth = v.sum()
            tree.update(0, np.arange(100), v)

            assert np.isclose(tree.dim_total(0), truth)

    def test_can_add_stuff_in_multiple_dims(self):
        tree = SumTree(213, dims=2)
        rng = np.random.default_rng(1)
        for _ in range(50):
            v = rng.integers(0, 1000, size=(2, 213))
            truth = v.sum(axis=1)

            idxs = rng.permutation(213)
            tree.update(0, idxs, v[0])
            tree.update(1, idxs, v[1])

            assert np.allclose(truth, tree.all_totals())

    def test_can_sample(self):
        tree = SumTree(50, dims=1)
        tree.update(0, np.arange(50), np.ones(50))

        assert tree.total() == 50

        rng = np.random.default_rng(0)
        samples = tree.sample(rng, 10000)

        u, c = np.unique(samples, return_counts=True)
        assert np.all(u == np.arange(50))
        assert np.all(
            (c >= 150) & (c <= 250)
        )

    def test_can_sample_proportionally(self):
        tree = SumTree(10, dims=1)
        tree.update(0, np.arange(10), [2**i for i in range(10)])

        # NOTE: it takes a shockingly high number of samples for the proportions
        # to converge even within a single decimal point..
        rng = np.random.default_rng(22)
        samples = tree.sample(rng, 10000000)

        u, c = np.unique(samples, return_counts=True)
        assert np.all(u == np.arange(10))

        for i in range(1, 10):
            assert np.isclose(c[i] / c[i - 1], 2, atol=0.1)

    def test_pickleable(self):
        tree = SumTree(123, dims=2)
        tree.update(0, np.arange(123), np.arange(123))
        tree.update(1, np.arange(123), np.sin(np.arange(123)))

        byt = pickle.dumps(tree)
        tree2 = pickle.loads(byt)

        assert np.all(
            tree.all_totals() == tree2.all_totals()
        )

        tree.update(0, [2], [22])
        tree2.update(0, [2], [22])

        assert np.all(
            tree.all_totals() == tree2.all_totals()
        )

# ----------------
# -- Benchmarks --
# ----------------
class TestBenchmarks:
    def test_sumtree_update(self, benchmark):
        tree = SumTree(100_000, dims=1)
        rng = np.random.default_rng(0)
        idxs = np.arange(32)
        vals = rng.uniform(0, 2, size=32)

        def _inner(tree: SumTree, idxs, vals):
            tree.update(0, idxs, vals)

        benchmark(_inner, tree, idxs, vals)

    def test_sumtree_sample(self, benchmark):
        tree = SumTree(100_000, dims=1)
        rng = np.random.default_rng(0)

        idxs = np.arange(10_000)
        vals = rng.uniform(0, 2, size=10_000)
        tree.update(0, idxs, vals)

        def _inner(tree: SumTree, rng):
            tree.sample(rng, 32)

        benchmark(_inner, tree, rng)
