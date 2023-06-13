window.BENCHMARK_DATA = {
  "lastUpdate": 1686688730643,
  "repoUrl": "https://github.com/andnp/ReplayTables",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "andnpatterson@gmail.com",
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "274f4a4472e89d545674b9fae28832b60df9d7c5",
          "message": "Merge pull request #6 from andnp/pytest\n\nMigrate to pytest",
          "timestamp": "2023-06-13T14:37:36-06:00",
          "tree_id": "2834606a936d0914be7a6b601c3dc63aaff567d2",
          "url": "https://github.com/andnp/ReplayTables/commit/274f4a4472e89d545674b9fae28832b60df9d7c5"
        },
        "date": 1686688728812,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 55700.994175755564,
            "unit": "iter/sec",
            "range": "stddev: 8.580444520456042e-7",
            "extra": "mean: 17.95300092570449 usec\nrounds: 14045"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 5338.690962870078,
            "unit": "iter/sec",
            "range": "stddev: 0.0000334251854768325",
            "extra": "mean: 187.31183485893337 usec\nrounds: 2731"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_add",
            "value": 126833.32898418847,
            "unit": "iter/sec",
            "range": "stddev: 0.000012249266988772817",
            "extra": "mean: 7.884362951039973 usec\nrounds: 28654"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_sample",
            "value": 2669.4494243846143,
            "unit": "iter/sec",
            "range": "stddev: 0.000060329662162377194",
            "extra": "mean: 374.6090826315352 usec\nrounds: 1900"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 903047.8060776391,
            "unit": "iter/sec",
            "range": "stddev: 0.000006687417130868799",
            "extra": "mean: 1.1073610868326782 usec\nrounds: 178572"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 11356.124374758383,
            "unit": "iter/sec",
            "range": "stddev: 0.000002757412697960516",
            "extra": "mean: 88.05821132275828 usec\nrounds: 3833"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 29546.821515482505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021970986953982267",
            "extra": "mean: 33.84458796950464 usec\nrounds: 24571"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 35190.023355828394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011252221976706263",
            "extra": "mean: 28.417145106394873 usec\nrounds: 13211"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andnpatterson@gmail.com",
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "274f4a4472e89d545674b9fae28832b60df9d7c5",
          "message": "Merge pull request #6 from andnp/pytest\n\nMigrate to pytest",
          "timestamp": "2023-06-13T14:37:36-06:00",
          "tree_id": "2834606a936d0914be7a6b601c3dc63aaff567d2",
          "url": "https://github.com/andnp/ReplayTables/commit/274f4a4472e89d545674b9fae28832b60df9d7c5"
        },
        "date": 1686688728812,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 55700.994175755564,
            "unit": "iter/sec",
            "range": "stddev: 8.580444520456042e-7",
            "extra": "mean: 17.95300092570449 usec\nrounds: 14045"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 5338.690962870078,
            "unit": "iter/sec",
            "range": "stddev: 0.0000334251854768325",
            "extra": "mean: 187.31183485893337 usec\nrounds: 2731"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_add",
            "value": 126833.32898418847,
            "unit": "iter/sec",
            "range": "stddev: 0.000012249266988772817",
            "extra": "mean: 7.884362951039973 usec\nrounds: 28654"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_sample",
            "value": 2669.4494243846143,
            "unit": "iter/sec",
            "range": "stddev: 0.000060329662162377194",
            "extra": "mean: 374.6090826315352 usec\nrounds: 1900"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 903047.8060776391,
            "unit": "iter/sec",
            "range": "stddev: 0.000006687417130868799",
            "extra": "mean: 1.1073610868326782 usec\nrounds: 178572"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 11356.124374758383,
            "unit": "iter/sec",
            "range": "stddev: 0.000002757412697960516",
            "extra": "mean: 88.05821132275828 usec\nrounds: 3833"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 29546.821515482505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021970986953982267",
            "extra": "mean: 33.84458796950464 usec\nrounds: 24571"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 35190.023355828394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011252221976706263",
            "extra": "mean: 28.417145106394873 usec\nrounds: 13211"
          }
        ]
      }
    ]
  }
}