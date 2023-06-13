window.BENCHMARK_DATA = {
  "lastUpdate": 1686692143816,
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
      },
      {
        "commit": {
          "author": {
            "email": "andnpatterson@gmail.com",
            "name": "andy",
            "username": "andnp"
          },
          "committer": {
            "email": "andnpatterson@gmail.com",
            "name": "andy",
            "username": "andnp"
          },
          "distinct": true,
          "id": "f1f233146432433620581c0aa2d017cd0ca2f4e4",
          "message": "ci: run benchmarking ci during pull requests",
          "timestamp": "2023-06-13T15:18:14-06:00",
          "tree_id": "1b3e3759990c29d55c0c34fbee7b8c538c27e6f2",
          "url": "https://github.com/andnp/ReplayTables/commit/f1f233146432433620581c0aa2d017cd0ca2f4e4"
        },
        "date": 1686691170551,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 56301.607488830065,
            "unit": "iter/sec",
            "range": "stddev: 8.952759193889454e-7",
            "extra": "mean: 17.76148221342338 usec\nrounds: 6831"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 4869.18340402361,
            "unit": "iter/sec",
            "range": "stddev: 0.000043078324204348335",
            "extra": "mean: 205.3732457836068 usec\nrounds: 2372"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_add",
            "value": 129064.74323708414,
            "unit": "iter/sec",
            "range": "stddev: 0.000012410280379800735",
            "extra": "mean: 7.748049350418343 usec\nrounds: 28328"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_sample",
            "value": 2738.401099477378,
            "unit": "iter/sec",
            "range": "stddev: 0.00007620932405302823",
            "extra": "mean: 365.17659892513535 usec\nrounds: 1860"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 869628.3885277646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062252301957021264",
            "extra": "mean: 1.1499164622407827 usec\nrounds: 196079"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 11303.015308594491,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030872842959478823",
            "extra": "mean: 88.47196723157832 usec\nrounds: 3601"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 29128.23678117864,
            "unit": "iter/sec",
            "range": "stddev: 0.00000411245478007811",
            "extra": "mean: 34.33094860881367 usec\nrounds: 20704"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 34514.564145227596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016539605989246745",
            "extra": "mean: 28.9732762028308 usec\nrounds: 12136"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andnpatterson@gmail.com",
            "name": "andy",
            "username": "andnp"
          },
          "committer": {
            "email": "andnpatterson@gmail.com",
            "name": "andy",
            "username": "andnp"
          },
          "distinct": true,
          "id": "f1f233146432433620581c0aa2d017cd0ca2f4e4",
          "message": "ci: run benchmarking ci during pull requests",
          "timestamp": "2023-06-13T15:18:14-06:00",
          "tree_id": "1b3e3759990c29d55c0c34fbee7b8c538c27e6f2",
          "url": "https://github.com/andnp/ReplayTables/commit/f1f233146432433620581c0aa2d017cd0ca2f4e4"
        },
        "date": 1686691170551,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 56301.607488830065,
            "unit": "iter/sec",
            "range": "stddev: 8.952759193889454e-7",
            "extra": "mean: 17.76148221342338 usec\nrounds: 6831"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 4869.18340402361,
            "unit": "iter/sec",
            "range": "stddev: 0.000043078324204348335",
            "extra": "mean: 205.3732457836068 usec\nrounds: 2372"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_add",
            "value": 129064.74323708414,
            "unit": "iter/sec",
            "range": "stddev: 0.000012410280379800735",
            "extra": "mean: 7.748049350418343 usec\nrounds: 28328"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_sample",
            "value": 2738.401099477378,
            "unit": "iter/sec",
            "range": "stddev: 0.00007620932405302823",
            "extra": "mean: 365.17659892513535 usec\nrounds: 1860"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 869628.3885277646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062252301957021264",
            "extra": "mean: 1.1499164622407827 usec\nrounds: 196079"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 11303.015308594491,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030872842959478823",
            "extra": "mean: 88.47196723157832 usec\nrounds: 3601"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 29128.23678117864,
            "unit": "iter/sec",
            "range": "stddev: 0.00000411245478007811",
            "extra": "mean: 34.33094860881367 usec\nrounds: 20704"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 34514.564145227596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016539605989246745",
            "extra": "mean: 28.9732762028308 usec\nrounds: 12136"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andnpatterson@gmail.com",
            "name": "andy",
            "username": "andnp"
          },
          "committer": {
            "email": "andnpatterson@gmail.com",
            "name": "andy",
            "username": "andnp"
          },
          "distinct": true,
          "id": "1f8da7c0e5601bd0c92880e26e550a8d5d9b71cf",
          "message": "docs: fix dimensions",
          "timestamp": "2023-06-13T15:33:11-06:00",
          "tree_id": "477b19f33755e26ff6e0d6d0f970e97e5af2c758",
          "url": "https://github.com/andnp/ReplayTables/commit/1f8da7c0e5601bd0c92880e26e550a8d5d9b71cf"
        },
        "date": 1686692142396,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 57202.4858649289,
            "unit": "iter/sec",
            "range": "stddev: 6.010512579639004e-7",
            "extra": "mean: 17.481757739712226 usec\nrounds: 9981"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 5871.210977789376,
            "unit": "iter/sec",
            "range": "stddev: 0.00002168966299575651",
            "extra": "mean: 170.32261381561173 usec\nrounds: 3040"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_add",
            "value": 136977.19576142688,
            "unit": "iter/sec",
            "range": "stddev: 0.000010771069191863523",
            "extra": "mean: 7.300485270129925 usec\nrounds: 28819"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_sample",
            "value": 2742.8933116122357,
            "unit": "iter/sec",
            "range": "stddev: 0.000041433581089115886",
            "extra": "mean: 364.57852580938095 usec\nrounds: 1976"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 840969.4437684446,
            "unit": "iter/sec",
            "range": "stddev: 0.000006583721616519314",
            "extra": "mean: 1.1891038460552479 usec\nrounds: 178572"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 12495.636984199622,
            "unit": "iter/sec",
            "range": "stddev: 0.000001968018288720431",
            "extra": "mean: 80.02793305090982 usec\nrounds: 4720"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 26361.17752628198,
            "unit": "iter/sec",
            "range": "stddev: 0.000006712270098789145",
            "extra": "mean: 37.93457249787133 usec\nrounds: 22173"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 34976.78980199315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015458824607570213",
            "extra": "mean: 28.590388244921634 usec\nrounds: 15874"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andnpatterson@gmail.com",
            "name": "andy",
            "username": "andnp"
          },
          "committer": {
            "email": "andnpatterson@gmail.com",
            "name": "andy",
            "username": "andnp"
          },
          "distinct": true,
          "id": "1f8da7c0e5601bd0c92880e26e550a8d5d9b71cf",
          "message": "docs: fix dimensions",
          "timestamp": "2023-06-13T15:33:11-06:00",
          "tree_id": "477b19f33755e26ff6e0d6d0f970e97e5af2c758",
          "url": "https://github.com/andnp/ReplayTables/commit/1f8da7c0e5601bd0c92880e26e550a8d5d9b71cf"
        },
        "date": 1686692142396,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 57202.4858649289,
            "unit": "iter/sec",
            "range": "stddev: 6.010512579639004e-7",
            "extra": "mean: 17.481757739712226 usec\nrounds: 9981"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 5871.210977789376,
            "unit": "iter/sec",
            "range": "stddev: 0.00002168966299575651",
            "extra": "mean: 170.32261381561173 usec\nrounds: 3040"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_add",
            "value": 136977.19576142688,
            "unit": "iter/sec",
            "range": "stddev: 0.000010771069191863523",
            "extra": "mean: 7.300485270129925 usec\nrounds: 28819"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_sample",
            "value": 2742.8933116122357,
            "unit": "iter/sec",
            "range": "stddev: 0.000041433581089115886",
            "extra": "mean: 364.57852580938095 usec\nrounds: 1976"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 840969.4437684446,
            "unit": "iter/sec",
            "range": "stddev: 0.000006583721616519314",
            "extra": "mean: 1.1891038460552479 usec\nrounds: 178572"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 12495.636984199622,
            "unit": "iter/sec",
            "range": "stddev: 0.000001968018288720431",
            "extra": "mean: 80.02793305090982 usec\nrounds: 4720"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 26361.17752628198,
            "unit": "iter/sec",
            "range": "stddev: 0.000006712270098789145",
            "extra": "mean: 37.93457249787133 usec\nrounds: 22173"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 34976.78980199315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015458824607570213",
            "extra": "mean: 28.590388244921634 usec\nrounds: 15874"
          }
        ]
      }
    ]
  }
}