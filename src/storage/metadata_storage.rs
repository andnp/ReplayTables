use numpy::{PyArray1, PyReadonlyArray1, ToPyArray};
use pyo3::{prelude::*, types::{PyBytes, PyTuple}};
use bincode::{deserialize, serialize};
use serde::{Deserialize, Serialize};


#[pyclass(module = "replay_tables_rs")]
#[derive(Serialize, Deserialize, Clone, Copy)]
pub struct Item {
    #[pyo3(get)]
    pub eid: i64,
    #[pyo3(get)]
    pub idx: usize,
    #[pyo3(get)]
    pub xid: i64,
    #[pyo3(get)]
    pub n_xid: Option<i64>,
    #[pyo3(get)]
    pub sidx: i64,
    #[pyo3(get)]
    pub n_sidx: Option<i64>,
}

#[pymethods]
impl Item {
    #[staticmethod]
    pub fn default(null_idx: i64) -> Self {
        Item {
            eid: null_idx,
            idx: 0,
            xid: 0,
            n_xid: None,
            sidx: 0,
            n_sidx: None,
        }
    }
}

#[pyclass(module = "replay_tables_rs")]
pub struct Items {
    #[pyo3(get)]
    pub idxs: Py<PyArray1<i64>>,
    #[pyo3(get)]
    pub eids: Py<PyArray1<i64>>,
    #[pyo3(get)]
    pub xids: Py<PyArray1<i64>>,
    #[pyo3(get)]
    pub n_xids: Py<PyArray1<i64>>,
    #[pyo3(get)]
    pub sidxs: Py<PyArray1<i64>>,
    #[pyo3(get)]
    pub n_sidxs: Py<PyArray1<i64>>,
}


#[pyclass(module = "replay_tables_rs")]
#[derive(Serialize, Deserialize)]
pub struct MetadataStorage {
    _max_size: usize,
    _ref: crate::utils::ref_count::RefCount,
    _null_idx: i64,
    _ids: Vec<Item>,
}


#[pymethods]
impl MetadataStorage {
    #[new]
    #[pyo3(signature = (*args))]
    fn new(args: &PyTuple) -> Self {
        match args.len() {
            // loading from pickle
            0 => MetadataStorage {
                _max_size: 0,
                _ref: crate::utils::ref_count::RefCount::new(),
                _null_idx: 0,
                _ids: vec![],
            },
            2 => {
                let max_size = args
                    .get_item(0).unwrap()
                    .extract::<usize>().unwrap();

                let null_idx = args
                    .get_item(1).unwrap()
                    .extract::<i64>().unwrap();

                MetadataStorage {
                    _max_size: max_size,
                    _ref: crate::utils::ref_count::RefCount::new(),
                    _null_idx: null_idx,
                    _ids: vec![Item::default(null_idx); max_size],
                }
            },
            _ => unreachable!(),
        }

    }

    pub fn get_item_by_idx(&mut self, idx: usize) -> Item {
        *self._ids
            .get(idx)
            .expect("Item not found for index")
    }

    pub fn get_items_by_idx(&mut self, idxs: PyReadonlyArray1<i64>) -> Items {
        let idxs = idxs.as_array();
        let size = idxs.len();

        let mut eids = vec![0; size];
        let mut xids = vec![0; size];
        let mut n_xids = vec![0; size];
        let mut sidxs = vec![0; size];
        let mut n_sidxs = vec![0; size];


        for i in 0..size {
            let idx = *idxs.get(i).expect("");
            let idx = idx as usize;
            let item = self._ids.get(idx).expect("");
            eids[i] = item.eid;
            xids[i] = item.xid;
            sidxs[i] = item.sidx;

            n_xids[i] = item.n_xid.unwrap_or(self._null_idx);
            n_sidxs[i] = item.n_sidx.unwrap_or(-1);
        }

        Python::with_gil(|py| {
            Items {
                idxs: idxs.to_pyarray(py).to_owned(),
                eids: eids.to_pyarray(py).to_owned(),
                xids: xids.to_pyarray(py).to_owned(),
                sidxs: sidxs.to_pyarray(py).to_owned(),
                n_xids: n_xids.to_pyarray(py).to_owned(),
                n_sidxs: n_sidxs.to_pyarray(py).to_owned(),
            }
        })
    }

    pub fn add_item(
        &mut self,
        eid: i64,
        idx: i64,
        xid: i64,
        n_xid: Option<i64>,
    ) -> (Item, Option<Item>) {
        // first check if there was already an item
        let item = self._ids[idx as usize];
        let mut last_item = None;
        if item.eid != self._null_idx {
            self._ref.remove_transition(item.eid);
            last_item = Some(item.clone());
        }

        let sidx = self._ref
            .add_state(eid, xid)
            .expect("");

        let mut n_sidx = None;
        if n_xid.is_some() {
            n_sidx = self._ref
                .add_state(eid, n_xid.expect(""))
                .ok();
        }

        let item = Item {
            idx: idx as usize,
            eid,
            xid,
            sidx,
            n_xid,
            n_sidx,
        };
        self._ids[idx as usize] = item;

        (item, last_item)
    }

    pub fn has_xid(&mut self, xid: i64) -> bool {
        self._ref.has_xid(xid)
    }

    // enable pickling this data type
    pub fn __setstate__(&mut self, state: &PyBytes) -> PyResult<()> {
        *self = deserialize(state.as_bytes()).unwrap();
        Ok(())
    }
    pub fn __getstate__<'py>(&self, py: Python<'py>) -> PyResult<&'py PyBytes> {
        Ok(PyBytes::new(py, &serialize(&self).unwrap()))
    }
}
