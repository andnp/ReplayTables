use pyo3::prelude::*;

mod utils;

/// A Python module implemented in Rust.
#[pymodule]
fn replay_tables_rs(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_class::<utils::ref_count::RefCount>()?;
    Ok(())
}
