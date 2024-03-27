#!/bin/bash
set -e
mypy -p replaytables
pytest
