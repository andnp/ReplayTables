#!/bin/bash
set -e
mypy -p ReplayTables
pytest
