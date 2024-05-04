import numpy as np

from ReplayTables.ingress.RandomIndexer import RandomIndexer

def test_random_indexer():
    test_seed = 42
    buffer_size = 5

    test_rng = np.random.default_rng(test_seed)
    mapper = RandomIndexer(buffer_size, np.random.default_rng(test_seed))

    # add 5 eids to the buffer
    control_eids = [0, 1, 2, 3, 4]
    control_eid2idx = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4}
    control_idx2eid = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4}

    for eid in control_eids:
        idx = mapper.add_eid(eid)
        assert idx == control_eid2idx[eid]
    
    assert mapper.size == buffer_size
    assert mapper._eid2idx == control_eid2idx
    assert mapper._idx2eid == control_idx2eid

    # add 100 more eids to the buffer
    for eid in range(5, 105):
        idx = mapper.add_eid(eid)
        control_idx = test_rng.integers(0, buffer_size)

        assert idx == control_idx

        old_eid = control_idx2eid.get(control_idx, None)
        if old_eid is not None: del control_eid2idx[old_eid]

        control_eid2idx[eid] = control_idx
        control_idx2eid[control_idx] = eid

    assert mapper.size == buffer_size
    assert mapper._eid2idx == control_eid2idx
    assert mapper._idx2eid == control_idx2eid


