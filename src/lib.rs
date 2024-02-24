use std::collections::BTreeSet;

use hashbrown::HashMap;
use pyo3::{prelude::*, types::PyBytes};
use bincode::{deserialize, serialize};
use serde::{Deserialize, Serialize};

#[pyclass(module = "replay_tables_rs")]
#[derive(Serialize, Deserialize)]
struct RefCount {
    _i: i64,
    _eid2xids: HashMap<i64, BTreeSet<i64>>,
    _refs: HashMap<i64, BTreeSet<i64>>,
    _avail_idxs: BTreeSet<i64>,
    _idxs: HashMap<i64, i64>,
}

#[pymethods]
impl RefCount {
    #[new]
    fn new() -> Self {
        let mut idxs = HashMap::new();
        idxs.insert(i64::MAX, -1);

        RefCount {
            _i: 0,
            _eid2xids: HashMap::new(),
            _refs: HashMap::new(),
            _avail_idxs: BTreeSet::new(),
            _idxs: idxs,
        }
    }

    pub fn add_state(&mut self, eid: i64, xid: i64) -> PyResult<i64> {
        self._eid2xids
            .entry(eid).or_insert(BTreeSet::new())
            .insert(xid);

        self._refs
            .entry(xid).or_insert(BTreeSet::new())
            .insert(eid);

        if !self._idxs.contains_key(&xid) {
            let idx = self._next_free_idx();
            self._idxs.insert(xid, idx);
        }

        let idx = *self._idxs.get(&xid).expect("");
        Ok(idx)
    }

    pub fn load_state(&mut self, xid: i64) -> i64 {
        *self._idxs
            .get(&xid)
            .expect("Tried to load idx for non-existant xid")
    }

    pub fn has_xid(&mut self, xid: i64) -> bool {
        self._idxs.contains_key(&xid)
    }

    pub fn remove_transition(&mut self, eid: i64) {
        if !self._eid2xids.contains_key(&eid) {
            return;
        }

        let xids = self._eid2xids
            .remove(&eid)
            .expect("");

        for xid in xids {
            // get xid->eids mapping
            // and remove this eid from set
            let refs = self._refs
                .get_mut(&xid)
                .expect("");

            refs.remove(&eid);

            // if this xid no longer points to any eids
            // then remove it and return its idx back
            // to the pool
            if refs.len() == 0 {
                let idx = self._idxs
                    .get(&xid)
                    .expect("");

                self._avail_idxs.insert(*idx);
                self._refs.remove(&xid);
                self._idxs.remove(&xid);
            }
        }
    }

    fn _next_free_idx(&mut self) -> i64 {
        let idx: i64;
        if self._avail_idxs.len() == 0 {
            self._i += 1;
            idx = self._i - 1;
        } else {
            idx = self._avail_idxs
                .pop_first()
                .expect("Tried to pop from empty set!");
        }

        idx
    }

    pub fn __setstate__(&mut self, state: &PyBytes) -> PyResult<()> {
        *self = deserialize(state.as_bytes()).unwrap();
        Ok(())
    }
    pub fn __getstate__<'py>(&self, py: Python<'py>) -> PyResult<&'py PyBytes> {
        Ok(PyBytes::new(py, &serialize(&self).unwrap()))
    }
}

/// A Python module implemented in Rust.
#[pymodule]
fn replay_tables_rs(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_class::<RefCount>()?;
    Ok(())
}
