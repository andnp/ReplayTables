from typing import Any
import ReplayTables.rust as ru

def test_add_and_load():
    r = ru.RefCount()
    eid: Any = 0
    xid: Any = 0

    sidx = r.add_state(eid, xid)
    assert sidx == 0
    assert r.has_xid(xid)

    eid = 0
    xid = 1
    sidx = r.add_state(eid, xid)
    assert sidx == 1
    assert r.has_xid(xid)

    idx = r.load_state(xid)
    assert idx == 1

def test_remove_transition():
    r = ru.RefCount()
    eid: Any = 0
    xid1: Any = 0
    xid2: Any = 0

    for i in range(10):
        eid = i
        xid1 = i
        xid2 = i + 1

        r.add_state(eid, xid1)
        r.add_state(eid, xid2)

    # can harmlessly remove a non-existing experience
    eid = 10
    r.remove_transition(eid)

    # can add that experience and increment index
    xid1 = 25
    idx = r.add_state(eid, xid1)
    assert idx == 11

    # can remove an existing experience
    eid = 0
    r.remove_transition(eid)

    eid = 11
    xid1 = 26
    idx = r.add_state(eid, xid1)
    assert idx == 0
