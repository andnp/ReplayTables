use pyo3::prelude::*;

mod utils;
mod storage;

/// A Python module implemented in Rust.
#[pymodule]
fn replay_tables_rs(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_class::<utils::ref_count::RefCount>()?;
    m.add_class::<storage::metadata_storage::MetadataStorage>()?;
    m.add_class::<storage::metadata_storage::Item>()?;
    Ok(())
}
