import numpy as np
from typing import Any

from ReplayTables.storage.BasicStorage import BasicStorage
from ReplayTables.ingress.CircularMapper import CircularMapper
from ReplayTables.sampling.PrioritySequenceSampler import PrioritizedSequenceDistribution, PSDistributionConfig

from tests._utils.fake_data import LaggedDataStream

def test_pser_dist():
    storage = BasicStorage(10)
    mapper = CircularMapper(10)
    config = PSDistributionConfig(
        trace_decay=0.1,
        trace_depth=3,
        combinator='max',
    )
    dist = PrioritizedSequenceDistribution(config, storage, mapper)
    dist._size = 10
    dist.init()

    data = LaggedDataStream(lag=1)
    data.next()
    for _ in range(10):
        d = data.next_single()

        idx = mapper.add_eid(d.eid)
        storage.add(idx, d)

    tree = dist.tree
    dim = dist.dim

    assert tree.dim_total(dim) == 0.

    idx: Any = np.array([0], dtype=np.int64)
    eid: Any = np.array([0], dtype=np.int64)
    val = np.array([1.], dtype=np.float64)
    terms = set([6])

    dist.update_seq(eid, idx, val, terms)

    assert tree.dim_total(dim) == 1.
    assert tree.get_value(dim, 0) == 1.

    # next index with high priority
    # should not change earlier priorities because
    # combinator is max
    idx: Any = np.array([1], dtype=np.int64)
    eid: Any = np.array([1], dtype=np.int64)
    val = np.array([1.], dtype=np.float64)

    dist.update_seq(eid, idx, val, terms)

    assert tree.dim_total(dim) == 2.
    assert tree.get_value(dim, 0) == 1.
    assert tree.get_value(dim, 1) == 1.

    # now prior indices should change
    idx: Any = np.array([2], dtype=np.int64)
    eid: Any = np.array([2], dtype=np.int64)
    val = np.array([1000.], dtype=np.float64)

    dist.update_seq(eid, idx, val, terms)

    assert np.allclose(tree.dim_total(dim), 1110.)
    assert np.allclose(tree.get_value(dim, 0), 10.)
    assert np.allclose(tree.get_value(dim, 1), 100.)
    assert np.allclose(tree.get_value(dim, 2), 1000.)

    # does not cross termination boundaries
    idx: Any = np.array([8], dtype=np.int64)
    eid: Any = np.array([8], dtype=np.int64)
    val = np.array([10.], dtype=np.float64)

    dist.update_seq(eid, idx, val, terms)

    assert np.allclose(tree.dim_total(dim), 1121.)
    assert np.allclose(tree.get_value(dim, 0), 10.)
    assert np.allclose(tree.get_value(dim, 1), 100.)
    assert np.allclose(tree.get_value(dim, 2), 1000.)
    assert np.allclose(tree.get_value(dim, 8), 10.)
    assert np.allclose(tree.get_value(dim, 7), 1.)
    assert np.allclose(tree.get_value(dim, 6), 0.)
