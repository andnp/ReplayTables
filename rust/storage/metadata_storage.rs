use numpy::{PyArray1, PyReadonlyArray1, ToPyArray};
use pyo3::{prelude::*, types::{PyBytes, PyTuple}};
use bincode::{deserialize, serialize};
use serde::{Deserialize, Serialize};


#[pyclass(module = "rust", frozen)]
#[derive(Serialize, Deserialize, Clone, Copy)]
pub struct Item {
    #[pyo3(get)]
    pub trans_id: i64,
    #[pyo3(get)]
    pub storage_idx: usize,
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
            trans_id: null_idx,
            storage_idx: 0,
            xid: 0,
            n_xid: None,
            sidx: 0,
            n_sidx: None,
        }
    }
}

#[pyclass(module = "rust")]
pub struct Items {
    #[pyo3(get)]
    pub storage_idxs: Py<PyArray1<i64>>,
    #[pyo3(get)]
    pub trans_ids: Py<PyArray1<i64>>,
    #[pyo3(get)]
    pub xids: Py<PyArray1<i64>>,
    #[pyo3(get)]
    pub n_xids: Py<PyArray1<i64>>,
    #[pyo3(get)]
    pub sidxs: Py<PyArray1<i64>>,
    #[pyo3(get)]
    pub n_sidxs: Py<PyArray1<i64>>,
}


#[pyclass(module = "rust")]
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
    fn new<'py>(args: Bound<'py, PyTuple>) -> Self {
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

        let mut trans_ids = vec![0; size];
        let mut xids = vec![0; size];
        let mut n_xids = vec![0; size];
        let mut sidxs = vec![0; size];
        let mut n_sidxs = vec![0; size];


        for i in 0..size {
            let idx = *idxs.get(i).expect("");
            let item = self._ids.get(idx as usize).expect("");
            trans_ids[i] = item.trans_id;
            xids[i] = item.xid;
            sidxs[i] = item.sidx;

            n_xids[i] = item.n_xid.unwrap_or(self._null_idx);
            n_sidxs[i] = item.n_sidx.unwrap_or(-1);
        }

        Python::with_gil(|py| {
            Items {
                storage_idxs: idxs.to_pyarray_bound(py).into(),
                trans_ids: trans_ids.to_pyarray_bound(py).into(),
                xids: xids.to_pyarray_bound(py).into(),
                sidxs: sidxs.to_pyarray_bound(py).into(),
                n_xids: n_xids.to_pyarray_bound(py).into(),
                n_sidxs: n_sidxs.to_pyarray_bound(py).into(),
            }
        })
    }

    pub fn add_item(
        &mut self,
        trans_id: i64,
        idx: i64,
        xid: i64,
        n_xid: Option<i64>,
    ) -> (Item, Option<Item>) {
        // first check if there was already an item
        let item = &self._ids[idx as usize];
        let mut last_item = None;
        if item.trans_id != self._null_idx {
            self._ref.remove_transition(item.trans_id);
            last_item = Some(item.clone());
        }

        let sidx = self._ref
            .add_state(trans_id, xid)
            .expect("");

        let mut n_sidx = None;
        if n_xid.is_some() {
            n_sidx = self._ref
                .add_state(trans_id, n_xid.expect(""))
                .ok();
        }

        let item = Item {
            storage_idx: idx as usize,
            trans_id,
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
    pub fn __setstate__<'py>(&mut self, state: Bound<'py, PyBytes>) -> PyResult<()> {
        *self = deserialize(state.as_bytes()).unwrap();
        Ok(())
    }
    pub fn __getstate__<'py>(&self, py: Python<'py>) -> PyResult<Bound<'py, PyBytes>> {
        Ok(PyBytes::new_bound(py, &serialize(&self).unwrap()))
    }
}
