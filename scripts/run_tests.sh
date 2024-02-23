#!/bin/bash
set -e
mypy -p ReplayTables
flake8 ReplayTables tests
pytest
