window.BENCHMARK_DATA = {
  "lastUpdate": 1708841622620,
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
      },
      {
        "commit": {
          "author": {
            "name": "andnp",
            "username": "andnp"
          },
          "committer": {
            "name": "andnp",
            "username": "andnp"
          },
          "id": "d47cea8a9df5acee540b319748eb8aaefdc4a672",
          "message": "WIP - Storage refactor",
          "timestamp": "2021-11-05T21:52:00Z",
          "url": "https://github.com/andnp/ReplayTables/pull/8/commits/d47cea8a9df5acee540b319748eb8aaefdc4a672"
        },
        "date": 1686714236141,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 39804.145080364884,
            "unit": "iter/sec",
            "range": "stddev: 0.000001208758265517631",
            "extra": "mean: 25.12301163562217 usec\nrounds: 7391"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 5405.006863644885,
            "unit": "iter/sec",
            "range": "stddev: 0.00003018596211297433",
            "extra": "mean: 185.013641097515 usec\nrounds: 2842"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_add",
            "value": 125899.96248519863,
            "unit": "iter/sec",
            "range": "stddev: 0.000011568315078156858",
            "extra": "mean: 7.942814122105593 usec\nrounds: 29939"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_sample",
            "value": 2680.0258738336192,
            "unit": "iter/sec",
            "range": "stddev: 0.00006144799990470994",
            "extra": "mean: 373.1307259991333 usec\nrounds: 1927"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 702887.334490659,
            "unit": "iter/sec",
            "range": "stddev: 0.000008510418739200827",
            "extra": "mean: 1.422703114610311 usec\nrounds: 144928"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 11018.163252538303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035126107891352776",
            "extra": "mean: 90.75922883695026 usec\nrounds: 3780"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 29679.184470973625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015994627337800254",
            "extra": "mean: 33.69364818558287 usec\nrounds: 24331"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 34392.420004754735,
            "unit": "iter/sec",
            "range": "stddev: 0.000001174703504806963",
            "extra": "mean: 29.07617433904769 usec\nrounds: 13055"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "andnp",
            "username": "andnp"
          },
          "committer": {
            "name": "andnp",
            "username": "andnp"
          },
          "id": "d47cea8a9df5acee540b319748eb8aaefdc4a672",
          "message": "WIP - Storage refactor",
          "timestamp": "2021-11-05T21:52:00Z",
          "url": "https://github.com/andnp/ReplayTables/pull/8/commits/d47cea8a9df5acee540b319748eb8aaefdc4a672"
        },
        "date": 1686714236141,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 39804.145080364884,
            "unit": "iter/sec",
            "range": "stddev: 0.000001208758265517631",
            "extra": "mean: 25.12301163562217 usec\nrounds: 7391"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 5405.006863644885,
            "unit": "iter/sec",
            "range": "stddev: 0.00003018596211297433",
            "extra": "mean: 185.013641097515 usec\nrounds: 2842"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_add",
            "value": 125899.96248519863,
            "unit": "iter/sec",
            "range": "stddev: 0.000011568315078156858",
            "extra": "mean: 7.942814122105593 usec\nrounds: 29939"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_sample",
            "value": 2680.0258738336192,
            "unit": "iter/sec",
            "range": "stddev: 0.00006144799990470994",
            "extra": "mean: 373.1307259991333 usec\nrounds: 1927"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 702887.334490659,
            "unit": "iter/sec",
            "range": "stddev: 0.000008510418739200827",
            "extra": "mean: 1.422703114610311 usec\nrounds: 144928"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 11018.163252538303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035126107891352776",
            "extra": "mean: 90.75922883695026 usec\nrounds: 3780"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 29679.184470973625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015994627337800254",
            "extra": "mean: 33.69364818558287 usec\nrounds: 24331"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 34392.420004754735,
            "unit": "iter/sec",
            "range": "stddev: 0.000001174703504806963",
            "extra": "mean: 29.07617433904769 usec\nrounds: 13055"
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
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "46f316facd9f5a6376d51d9a887c66decbc67a71",
          "message": "feat: add ability to delete samples from per",
          "timestamp": "2023-06-17T17:41:18-06:00",
          "tree_id": "df130feeb7bab1bc20ac1051ee6cb151df21a2bb",
          "url": "https://github.com/andnp/ReplayTables/commit/46f316facd9f5a6376d51d9a887c66decbc67a71"
        },
        "date": 1687045372579,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 33173.73610693602,
            "unit": "iter/sec",
            "range": "stddev: 0.00003452370979820006",
            "extra": "mean: 30.144328536782393 usec\nrounds: 5351"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 2987.6380315271313,
            "unit": "iter/sec",
            "range": "stddev: 0.00021592949502683255",
            "extra": "mean: 334.7125687407487 usec\nrounds: 2073"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_add",
            "value": 78802.27144835226,
            "unit": "iter/sec",
            "range": "stddev: 0.00004641091430332655",
            "extra": "mean: 12.689989534824631 usec\nrounds: 28571"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_sample",
            "value": 1841.4837027310766,
            "unit": "iter/sec",
            "range": "stddev: 0.00021810136240719264",
            "extra": "mean: 543.0403747352827 usec\nrounds: 1417"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 703957.6141586386,
            "unit": "iter/sec",
            "range": "stddev: 0.000011188723409466836",
            "extra": "mean: 1.4205400721394108 usec\nrounds: 140846"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 7268.3443761516955,
            "unit": "iter/sec",
            "range": "stddev: 0.00010562497092155141",
            "extra": "mean: 137.58291410642556 usec\nrounds: 3027"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 21425.598560483835,
            "unit": "iter/sec",
            "range": "stddev: 0.00008356452269200474",
            "extra": "mean: 46.67314181104576 usec\nrounds: 17890"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 21749.552591776268,
            "unit": "iter/sec",
            "range": "stddev: 0.00011483317345537522",
            "extra": "mean: 45.9779572835034 usec\nrounds: 4565"
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
          "id": "709385b333af532c84f4d9adb952b8397268927f",
          "message": "ci: conditional publish logic fix",
          "timestamp": "2023-06-17T18:15:29-06:00",
          "tree_id": "11ad3bbadc221a7d8fa695661b2ac753172f8915",
          "url": "https://github.com/andnp/ReplayTables/commit/709385b333af532c84f4d9adb952b8397268927f"
        },
        "date": 1687047401463,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 56105.854040212675,
            "unit": "iter/sec",
            "range": "stddev: 5.906101800874917e-7",
            "extra": "mean: 17.823452064080005 usec\nrounds: 14728"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 5827.810812178704,
            "unit": "iter/sec",
            "range": "stddev: 0.000024701000661976533",
            "extra": "mean: 171.59101972051735 usec\nrounds: 3144"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_add",
            "value": 136941.97549991973,
            "unit": "iter/sec",
            "range": "stddev: 0.000010333364181481732",
            "extra": "mean: 7.30236289019057 usec\nrounds: 29852"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_sample",
            "value": 2698.4762126632772,
            "unit": "iter/sec",
            "range": "stddev: 0.00004618045971340109",
            "extra": "mean: 370.57951272916506 usec\nrounds: 1964"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 836880.8255511569,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063524325709303926",
            "extra": "mean: 1.194913265388074 usec\nrounds: 181819"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 12293.455129948543,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017862739176435637",
            "extra": "mean: 81.34409646673399 usec\nrounds: 4613"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 25678.170250210576,
            "unit": "iter/sec",
            "range": "stddev: 0.000010098319705728329",
            "extra": "mean: 38.94358477476795 usec\nrounds: 21740"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 35512.03646006411,
            "unit": "iter/sec",
            "range": "stddev: 6.261673705014444e-7",
            "extra": "mean: 28.159466470602812 usec\nrounds: 16314"
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
          "id": "7ab819521ea4f775975a51203aae5346fb9d760b",
          "message": "ci: try to make performance warnings less aggressive",
          "timestamp": "2023-07-01T22:43:31-06:00",
          "tree_id": "da4b7be3e42e88cc8903bb106f45fd21fb057d3e",
          "url": "https://github.com/andnp/ReplayTables/commit/7ab819521ea4f775975a51203aae5346fb9d760b"
        },
        "date": 1688329639615,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 54642.809996723365,
            "unit": "iter/sec",
            "range": "stddev: 9.050912977494405e-7",
            "extra": "mean: 18.300669384681438 usec\nrounds: 8953"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 5466.183831317131,
            "unit": "iter/sec",
            "range": "stddev: 0.000028024670779500194",
            "extra": "mean: 182.9429874404791 usec\nrounds: 2946"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_add",
            "value": 129043.13963389616,
            "unit": "iter/sec",
            "range": "stddev: 0.000011552646379636492",
            "extra": "mean: 7.749346480851795 usec\nrounds: 32680"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_sample",
            "value": 2620.8003172872886,
            "unit": "iter/sec",
            "range": "stddev: 0.00006203990957128075",
            "extra": "mean: 381.562835368957 usec\nrounds: 1883"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 861640.778001314,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074171895751930616",
            "extra": "mean: 1.160576455445421 usec\nrounds: 192308"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 11212.687092646633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023764060219212453",
            "extra": "mean: 89.18468800006092 usec\nrounds: 3750"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 29701.091249947283,
            "unit": "iter/sec",
            "range": "stddev: 0.00000201802960336895",
            "extra": "mean: 33.66879659688514 usec\nrounds: 24213"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 34472.027053222126,
            "unit": "iter/sec",
            "range": "stddev: 0.000001836695348547916",
            "extra": "mean: 29.009028057911358 usec\nrounds: 14185"
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
          "id": "2524bbaa5cdcd8b1da815a082d5d65132981d83e",
          "message": "ci: track performance of typical rl loop",
          "timestamp": "2023-07-07T14:01:04-06:00",
          "tree_id": "7f7836746d637d1de4747cf78f120703ea707c68",
          "url": "https://github.com/andnp/ReplayTables/commit/2524bbaa5cdcd8b1da815a082d5d65132981d83e"
        },
        "date": 1688760140278,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 55761.0472740176,
            "unit": "iter/sec",
            "range": "stddev: 8.31602745655962e-7",
            "extra": "mean: 17.933666042638333 usec\nrounds: 19763"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 5709.430547648146,
            "unit": "iter/sec",
            "range": "stddev: 0.000057812375912271907",
            "extra": "mean: 175.14881592034158 usec\nrounds: 3216"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_add",
            "value": 131231.17582142865,
            "unit": "iter/sec",
            "range": "stddev: 0.000010254014725427699",
            "extra": "mean: 7.620140517225408 usec\nrounds: 31747"
          },
          {
            "name": "tests/test_PrioritizedHeap.py::TestBenchmarks::test_prioritized_heap_sample",
            "value": 2616.9644562718886,
            "unit": "iter/sec",
            "range": "stddev: 0.00004761574836579829",
            "extra": "mean: 382.122117709078 usec\nrounds: 1903"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 810898.3396274033,
            "unit": "iter/sec",
            "range": "stddev: 0.000007218633542963851",
            "extra": "mean: 1.2332002066491914 usec\nrounds: 158731"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 11853.60246301904,
            "unit": "iter/sec",
            "range": "stddev: 0.000002026812352793641",
            "extra": "mean: 84.36253899350916 usec\nrounds: 4193"
          },
          {
            "name": "tests/test_integration.py::TestBenchmarks::test_1_step_loop",
            "value": 60.392273876609245,
            "unit": "iter/sec",
            "range": "stddev: 0.00004752104631079129",
            "extra": "mean: 16.55840947540996 msec\nrounds: 61"
          },
          {
            "name": "tests/test_integration.py::TestBenchmarks::test_3_step_loop",
            "value": 60.5061806346213,
            "unit": "iter/sec",
            "range": "stddev: 0.000028527382079347066",
            "extra": "mean: 16.52723720967781 msec\nrounds: 62"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 26428.959419442603,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029123018177580566",
            "extra": "mean: 37.83728235869721 usec\nrounds: 18349"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 35071.84181305166,
            "unit": "iter/sec",
            "range": "stddev: 9.284236329072698e-7",
            "extra": "mean: 28.512902325758645 usec\nrounds: 15480"
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
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "afa125c276165d92f4ee3501c84cc914fbddcaef",
          "message": "ci: update integration performance tracking",
          "timestamp": "2023-07-07T14:34:23-06:00",
          "tree_id": "79e94064abf80b1cdbfb2d05c08dbe2fef9e1880",
          "url": "https://github.com/andnp/ReplayTables/commit/afa125c276165d92f4ee3501c84cc914fbddcaef"
        },
        "date": 1688762156377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 26222.635176430053,
            "unit": "iter/sec",
            "range": "stddev: 0.00003147343655725114",
            "extra": "mean: 38.13499266080016 usec\nrounds: 4769"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 2374.138363430091,
            "unit": "iter/sec",
            "range": "stddev: 0.00008694723632086361",
            "extra": "mean: 421.20544253167577 usec\nrounds: 1801"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 299552.33342104073,
            "unit": "iter/sec",
            "range": "stddev: 0.000014547678825205614",
            "extra": "mean: 3.3383148399462925 usec\nrounds: 100000"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 4008.825192071417,
            "unit": "iter/sec",
            "range": "stddev: 0.000058013954389838204",
            "extra": "mean: 249.44963975425577 usec\nrounds: 2279"
          },
          {
            "name": "tests/test_integration.py::TestBenchmarks::test_1_step_loop",
            "value": 42.19923714386593,
            "unit": "iter/sec",
            "range": "stddev: 0.0006141035256528192",
            "extra": "mean: 23.69711084090912 msec\nrounds: 44"
          },
          {
            "name": "tests/test_integration.py::TestBenchmarks::test_3_step_loop",
            "value": 42.129581239122345,
            "unit": "iter/sec",
            "range": "stddev: 0.0010720873534081127",
            "extra": "mean: 23.73629100000122 msec\nrounds: 43"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 24433.50577261128,
            "unit": "iter/sec",
            "range": "stddev: 0.00004989166560473808",
            "extra": "mean: 40.92740555966182 usec\nrounds: 20325"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 22670.975659806903,
            "unit": "iter/sec",
            "range": "stddev: 0.000025234009948660588",
            "extra": "mean: 44.10926177177667 usec\nrounds: 9302"
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
          "id": "94ceebb50f1211d177b5e2840b9322ab1711278f",
          "message": "fix: only sample non-terminal states",
          "timestamp": "2023-07-08T20:18:32-06:00",
          "tree_id": "2a8cda1bf28e33931cca1b2730e4b1b888b32e58",
          "url": "https://github.com/andnp/ReplayTables/commit/94ceebb50f1211d177b5e2840b9322ab1711278f"
        },
        "date": 1688869192646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 50512.955945221416,
            "unit": "iter/sec",
            "range": "stddev: 7.461585165305401e-7",
            "extra": "mean: 19.7969012362778 usec\nrounds: 16261"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 3855.25395960611,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048089649763471455",
            "extra": "mean: 259.38628439984006 usec\nrounds: 2391"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 250036.3548984523,
            "unit": "iter/sec",
            "range": "stddev: 0.000008142913397496655",
            "extra": "mean: 3.9994184061998976 usec\nrounds: 86949"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 3616.88372039925,
            "unit": "iter/sec",
            "range": "stddev: 0.00005902800923502597",
            "extra": "mean: 276.4811028786999 usec\nrounds: 1876"
          },
          {
            "name": "tests/test_integration.py::TestBenchmarks::test_1_step_loop",
            "value": 37.448024580929896,
            "unit": "iter/sec",
            "range": "stddev: 0.00034646681283694676",
            "extra": "mean: 26.703678263158423 msec\nrounds: 38"
          },
          {
            "name": "tests/test_integration.py::TestBenchmarks::test_3_step_loop",
            "value": 37.48009619491463,
            "unit": "iter/sec",
            "range": "stddev: 0.000204883044304888",
            "extra": "mean: 26.68082800000075 msec\nrounds: 39"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 26044.47863478645,
            "unit": "iter/sec",
            "range": "stddev: 7.265134706805907e-7",
            "extra": "mean: 38.395854031969165 usec\nrounds: 22272"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 34384.54714875036,
            "unit": "iter/sec",
            "range": "stddev: 7.768223848950052e-7",
            "extra": "mean: 29.082831763754758 usec\nrounds: 15823"
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
          "id": "a3bd91396ed92a4f971ea7e04ed8f6d88c650ad6",
          "message": "fix: use less specific dependency resolution",
          "timestamp": "2023-08-09T21:52:24-06:00",
          "tree_id": "f283ac6dd5ad4a3cde43d2013cd74d6c31cab768",
          "url": "https://github.com/andnp/ReplayTables/commit/a3bd91396ed92a4f971ea7e04ed8f6d88c650ad6"
        },
        "date": 1691639636870,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 51311.30350056994,
            "unit": "iter/sec",
            "range": "stddev: 6.862073199457388e-7",
            "extra": "mean: 19.48888318514248 usec\nrounds: 14065"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 3414.264463141475,
            "unit": "iter/sec",
            "range": "stddev: 0.000004519111509931095",
            "extra": "mean: 292.8888522829591 usec\nrounds: 2234"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 249605.04653516223,
            "unit": "iter/sec",
            "range": "stddev: 0.000009820639188831742",
            "extra": "mean: 4.006329254481353 usec\nrounds: 84746"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 3800.0507546717195,
            "unit": "iter/sec",
            "range": "stddev: 0.00008937077584011128",
            "extra": "mean: 263.1543799173252 usec\nrounds: 1932"
          },
          {
            "name": "tests/test_integration.py::TestBenchmarks::test_1_step_loop",
            "value": 39.300678731463826,
            "unit": "iter/sec",
            "range": "stddev: 0.0003033968893993402",
            "extra": "mean: 25.44485317500147 msec\nrounds: 40"
          },
          {
            "name": "tests/test_integration.py::TestBenchmarks::test_3_step_loop",
            "value": 39.128849309022485,
            "unit": "iter/sec",
            "range": "stddev: 0.0001828919078742759",
            "extra": "mean: 25.55659104877935 msec\nrounds: 41"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 24331.384738760848,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015168271695538617",
            "extra": "mean: 41.099181601734365 usec\nrounds: 18904"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 35034.522588988635,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025159759795594415",
            "extra": "mean: 28.54327463603858 usec\nrounds: 16287"
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
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "a33d33a9b1a46f5d87a346fb7f103383fe4b236d",
          "message": "fix: rework high-level api\n\nBREAKING CHANGE: this change moves around some public-facing components\nsuch as the LagBuffer, which is now more appropriately marked as an\ningress utility. This change also incorporates the LagBuffer as an\noptional component of the replay buffer, allowing implementation of\nreplay directly from the standard RlGlue interface without needing to\nexplicitly maintain multiple experience buffers.\n\nThis change reverts the prior set of changes which attempted to define\nthe replay buffer over raw experience tuples (S, A, R) instead of\nlagged experience tuples (S, A, R, S')---however this change still keeps\nthe primary motivation of the prior work which is ensuring that states\nare stored only once in memory in order to reduce memory overhead.\nManipulating raw experience tuples turned out to be too challenging and\ntoo expensive---for instance requiring computing n-step returns at\nsample time instead of at add time.",
          "timestamp": "2023-08-15T19:57:32-06:00",
          "tree_id": "eac91ad3ecec2e37a0e0afec3733b5a92b2d76e7",
          "url": "https://github.com/andnp/ReplayTables/commit/a33d33a9b1a46f5d87a346fb7f103383fe4b236d"
        },
        "date": 1692151139536,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 33094.89215198964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024165568767220343",
            "extra": "mean: 30.216143186309818 usec\nrounds: 6076"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 14928.92350025782,
            "unit": "iter/sec",
            "range": "stddev: 0.000005169230978672167",
            "extra": "mean: 66.98406619758819 usec\nrounds: 6964"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 114816.68467292089,
            "unit": "iter/sec",
            "range": "stddev: 0.000004646573316623687",
            "extra": "mean: 8.709535577069717 usec\nrounds: 16921"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 46370.69970437628,
            "unit": "iter/sec",
            "range": "stddev: 0.000001715176988504781",
            "extra": "mean: 21.565342045197216 usec\nrounds: 9183"
          },
          {
            "name": "tests/test_integration.py::TestBenchmarks::test_1_step_loop",
            "value": 327.3975228517933,
            "unit": "iter/sec",
            "range": "stddev: 0.000015431923963599307",
            "extra": "mean: 3.0543908557691846 msec\nrounds: 312"
          },
          {
            "name": "tests/test_integration.py::TestBenchmarks::test_3_step_loop",
            "value": 325.54329626819356,
            "unit": "iter/sec",
            "range": "stddev: 0.000018762775482069897",
            "extra": "mean: 3.071788027777928 msec\nrounds: 324"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 18440.17247086293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012467356749222208",
            "extra": "mean: 54.22942771170317 usec\nrounds: 16448"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 35027.94393469999,
            "unit": "iter/sec",
            "range": "stddev: 8.096600073315956e-7",
            "extra": "mean: 28.54863539419345 usec\nrounds: 14347"
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
          "id": "d4daf620b9a5b595d8e028eab494ad5bdeda1ae4",
          "message": "ci: fix some nonsense tests",
          "timestamp": "2023-08-16T17:10:41-06:00",
          "tree_id": "09a9350ec201a721c2866bfb0ef66f4566accc52",
          "url": "https://github.com/andnp/ReplayTables/commit/d4daf620b9a5b595d8e028eab494ad5bdeda1ae4"
        },
        "date": 1692244880686,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 27784.946255963026,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023331113312745546",
            "extra": "mean: 35.99071204916894 usec\nrounds: 6515"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 12628.707023561512,
            "unit": "iter/sec",
            "range": "stddev: 0.000003996195872606025",
            "extra": "mean: 79.18467014353008 usec\nrounds: 5848"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 94455.48284497761,
            "unit": "iter/sec",
            "range": "stddev: 0.000009382197065962213",
            "extra": "mean: 10.5869979156342 usec\nrounds: 185186"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 39804.932568343895,
            "unit": "iter/sec",
            "range": "stddev: 0.000002536193877275285",
            "extra": "mean: 25.1225146100431 usec\nrounds: 8111"
          },
          {
            "name": "tests/test_integration.py::TestBenchmarks::test_1_step_loop",
            "value": 275.23078416620945,
            "unit": "iter/sec",
            "range": "stddev: 0.00007656137881575665",
            "extra": "mean: 3.6333145037878785 msec\nrounds: 264"
          },
          {
            "name": "tests/test_integration.py::TestBenchmarks::test_3_step_loop",
            "value": 276.34853486336164,
            "unit": "iter/sec",
            "range": "stddev: 0.000079924326772554",
            "extra": "mean: 3.6186187869403477 msec\nrounds: 291"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 15483.972283938434,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030956783804320455",
            "extra": "mean: 64.58291074553928 usec\nrounds: 13624"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 29197.566658217223,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022377150793527765",
            "extra": "mean: 34.24942947149895 usec\nrounds: 10953"
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
          "id": "0f0fc9799fddaa361fe774b2951fe29515ff36be",
          "message": "feat: add prioritized sequence replay",
          "timestamp": "2023-08-18T16:39:06-06:00",
          "tree_id": "09629683630b9c7fe0934fe5a062271c7c835e0a",
          "url": "https://github.com/andnp/ReplayTables/commit/0f0fc9799fddaa361fe774b2951fe29515ff36be"
        },
        "date": 1692403813019,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 25219.32071737281,
            "unit": "iter/sec",
            "range": "stddev: 0.00001467290573823297",
            "extra": "mean: 39.652138580843335 usec\nrounds: 3875"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 11395.045458089953,
            "unit": "iter/sec",
            "range": "stddev: 0.000051199065270252747",
            "extra": "mean: 87.75743841285392 usec\nrounds: 6024"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 86939.36381197261,
            "unit": "iter/sec",
            "range": "stddev: 0.00001598291537383035",
            "extra": "mean: 11.502269583692167 usec\nrounds: 172414"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 34432.65558308427,
            "unit": "iter/sec",
            "range": "stddev: 0.000018397876936264927",
            "extra": "mean: 29.042197967770743 usec\nrounds: 8562"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 250.9551186141028,
            "unit": "iter/sec",
            "range": "stddev: 0.00034410348206250093",
            "extra": "mean: 3.9847762640686124 msec\nrounds: 231"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 98.2917064410645,
            "unit": "iter/sec",
            "range": "stddev: 0.0005661807315529347",
            "extra": "mean: 10.17379834177157 msec\nrounds: 79"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 94.30761471198315,
            "unit": "iter/sec",
            "range": "stddev: 0.0005936873277537376",
            "extra": "mean: 10.603597631580598 msec\nrounds: 95"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 243.58792407995983,
            "unit": "iter/sec",
            "range": "stddev: 0.0005650097317070276",
            "extra": "mean: 4.105293822659868 msec\nrounds: 203"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 245.89008482503493,
            "unit": "iter/sec",
            "range": "stddev: 0.0006729468715458873",
            "extra": "mean: 4.066857761717224 msec\nrounds: 256"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 255.67067804161587,
            "unit": "iter/sec",
            "range": "stddev: 0.00022521080525126868",
            "extra": "mean: 3.911281526922804 msec\nrounds: 260"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 870.6579608457022,
            "unit": "iter/sec",
            "range": "stddev: 0.00017475137923463405",
            "extra": "mean: 1.1485566605612416 msec\nrounds: 819"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 24.08234954982517,
            "unit": "iter/sec",
            "range": "stddev: 0.018238094440659772",
            "extra": "mean: 41.52418757692435 msec\nrounds: 26"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 136.0425490569936,
            "unit": "iter/sec",
            "range": "stddev: 0.0006954821170350365",
            "extra": "mean: 7.350641449544292 msec\nrounds: 109"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 18.613990145675142,
            "unit": "iter/sec",
            "range": "stddev: 0.0020569193679911926",
            "extra": "mean: 53.72303263157924 msec\nrounds: 19"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 14237.302674897452,
            "unit": "iter/sec",
            "range": "stddev: 0.000036919041416383876",
            "extra": "mean: 70.23802351011005 usec\nrounds: 13441"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 26250.728249973356,
            "unit": "iter/sec",
            "range": "stddev: 0.000018816749553266088",
            "extra": "mean: 38.09418125384826 usec\nrounds: 8375"
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
          "id": "30f40aa09a1fa542286e58da4abf0c5d0ccdb20c",
          "message": "feat: add backwards replay",
          "timestamp": "2023-08-18T18:33:04-06:00",
          "tree_id": "bc3229b2b51f2d443345f1f67bc46fed3f5a4df5",
          "url": "https://github.com/andnp/ReplayTables/commit/30f40aa09a1fa542286e58da4abf0c5d0ccdb20c"
        },
        "date": 1692411192128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 32664.137592659194,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011896851107750131",
            "extra": "mean: 30.614615100835724 usec\nrounds: 5695"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 14985.991313915481,
            "unit": "iter/sec",
            "range": "stddev: 0.000002674635277543717",
            "extra": "mean: 66.7289856942219 usec\nrounds: 6431"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 112015.56932793476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046325695445119086",
            "extra": "mean: 8.92733042379509 usec\nrounds: 16612"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 45562.82857723989,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015027018174897163",
            "extra": "mean: 21.947715522199438 usec\nrounds: 8897"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 321.40928775432434,
            "unit": "iter/sec",
            "range": "stddev: 0.000013380124998454938",
            "extra": "mean: 3.111297769230521 msec\nrounds: 312"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 206.93716278556587,
            "unit": "iter/sec",
            "range": "stddev: 0.00007884913905888586",
            "extra": "mean: 4.832384799999545 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 126.22990438178742,
            "unit": "iter/sec",
            "range": "stddev: 0.000019009576763295923",
            "extra": "mean: 7.922053057851172 msec\nrounds: 121"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 122.27175570920085,
            "unit": "iter/sec",
            "range": "stddev: 0.00001640759270989496",
            "extra": "mean: 8.178503647058948 msec\nrounds: 119"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 321.381971298609,
            "unit": "iter/sec",
            "range": "stddev: 0.000013448429555648773",
            "extra": "mean: 3.1115622197452373 msec\nrounds: 314"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 322.0411566471105,
            "unit": "iter/sec",
            "range": "stddev: 0.000012845282966209468",
            "extra": "mean: 3.1051931697531137 msec\nrounds: 324"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 321.92532105179396,
            "unit": "iter/sec",
            "range": "stddev: 0.00001799568004387696",
            "extra": "mean: 3.106310484471372 msec\nrounds: 322"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 323.3365653510095,
            "unit": "iter/sec",
            "range": "stddev: 0.000013291205088187786",
            "extra": "mean: 3.09275259021328 msec\nrounds: 327"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 1113.729084117586,
            "unit": "iter/sec",
            "range": "stddev: 0.000012509969100802825",
            "extra": "mean: 897.8844265275751 usec\nrounds: 1048"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 33.60684173965119,
            "unit": "iter/sec",
            "range": "stddev: 0.0007596673216796645",
            "extra": "mean: 29.7558457812519 msec\nrounds: 32"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 188.74021595026363,
            "unit": "iter/sec",
            "range": "stddev: 0.00003846715597198139",
            "extra": "mean: 5.298287887216986 msec\nrounds: 133"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 22.04724060222702,
            "unit": "iter/sec",
            "range": "stddev: 0.017522491019468074",
            "extra": "mean: 45.35715004166955 msec\nrounds: 24"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 16771.78936027193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037275961344449873",
            "extra": "mean: 59.623930310545376 usec\nrounds: 13718"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 34083.616087664486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014300448613564082",
            "extra": "mean: 29.339609900192464 usec\nrounds: 12020"
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
          "id": "6affd22c7da431dc6424f16decd3484f3806e9ee",
          "message": "feat: add storage option for alternative data structs",
          "timestamp": "2023-08-18T19:36:46-06:00",
          "tree_id": "6513d84aac7417582a8336cb8f4def184a0d021f",
          "url": "https://github.com/andnp/ReplayTables/commit/6affd22c7da431dc6424f16decd3484f3806e9ee"
        },
        "date": 1692414741444,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 19058.150521543943,
            "unit": "iter/sec",
            "range": "stddev: 0.000022496265380660165",
            "extra": "mean: 52.47098866543047 usec\nrounds: 3529"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 8301.59535240769,
            "unit": "iter/sec",
            "range": "stddev: 0.000020974648688612303",
            "extra": "mean: 120.45877419332088 usec\nrounds: 3999"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 82196.76959630397,
            "unit": "iter/sec",
            "range": "stddev: 0.00008348282017429133",
            "extra": "mean: 12.165928234300898 usec\nrounds: 185186"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 34676.930123430684,
            "unit": "iter/sec",
            "range": "stddev: 0.000012160299997646381",
            "extra": "mean: 28.83761614538984 usec\nrounds: 8696"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 182.66348876204864,
            "unit": "iter/sec",
            "range": "stddev: 0.002885993965788283",
            "extra": "mean: 5.47454779702952 msec\nrounds: 202"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 116.69189312003458,
            "unit": "iter/sec",
            "range": "stddev: 0.0002770908715689044",
            "extra": "mean: 8.569575600006374 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 68.18078651161481,
            "unit": "iter/sec",
            "range": "stddev: 0.0005882527284684528",
            "extra": "mean: 14.666888593748428 msec\nrounds: 64"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 61.95829146611255,
            "unit": "iter/sec",
            "range": "stddev: 0.005482761367338479",
            "extra": "mean: 16.13988985714591 msec\nrounds: 63"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 194.9701904178118,
            "unit": "iter/sec",
            "range": "stddev: 0.0003624257593247735",
            "extra": "mean: 5.128989194999747 msec\nrounds: 200"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 184.15064565556102,
            "unit": "iter/sec",
            "range": "stddev: 0.0023218609703468287",
            "extra": "mean: 5.4303366487805835 msec\nrounds: 205"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 191.61510345824297,
            "unit": "iter/sec",
            "range": "stddev: 0.0006268794491684864",
            "extra": "mean: 5.2187952930230335 msec\nrounds: 215"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 192.86269583541002,
            "unit": "iter/sec",
            "range": "stddev: 0.0004305273889297462",
            "extra": "mean: 5.185035891302718 msec\nrounds: 184"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 954.5095978587831,
            "unit": "iter/sec",
            "range": "stddev: 0.0007351779063068923",
            "extra": "mean: 1.0476584020142532 msec\nrounds: 1092"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 27.214818737980035,
            "unit": "iter/sec",
            "range": "stddev: 0.0033135239036408822",
            "extra": "mean: 36.744687136366466 msec\nrounds: 22"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 124.9006074906079,
            "unit": "iter/sec",
            "range": "stddev: 0.0005687500050884059",
            "extra": "mean: 8.00636618260801 msec\nrounds: 115"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 120.52327383188224,
            "unit": "iter/sec",
            "range": "stddev: 0.0003613048151638889",
            "extra": "mean: 8.297152642857169 msec\nrounds: 98"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 17.670961605664655,
            "unit": "iter/sec",
            "range": "stddev: 0.0019494678659026602",
            "extra": "mean: 56.59001600000291 msec\nrounds: 17"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 117.71532060635622,
            "unit": "iter/sec",
            "range": "stddev: 0.0022162427968927885",
            "extra": "mean: 8.495070946151793 msec\nrounds: 130"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 16364.437770326127,
            "unit": "iter/sec",
            "range": "stddev: 0.00009732704670389406",
            "extra": "mean: 61.10811834998172 usec\nrounds: 17575"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 24787.25793106691,
            "unit": "iter/sec",
            "range": "stddev: 0.00007924473485042418",
            "extra": "mean: 40.34330875891915 usec\nrounds: 12547"
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
          "id": "a8b2aedea7fc60b0a3ea257cf4ddd9cb1411561f",
          "message": "feat: add ability to use additive sequence replay",
          "timestamp": "2023-08-19T15:53:12-06:00",
          "tree_id": "c8a9b32ec209d849d7fa8979b142b39b11682d16",
          "url": "https://github.com/andnp/ReplayTables/commit/a8b2aedea7fc60b0a3ea257cf4ddd9cb1411561f"
        },
        "date": 1692489772840,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 28426.95394744291,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014583651153401255",
            "extra": "mean: 35.17788088899173 usec\nrounds: 7153"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 12252.175529139295,
            "unit": "iter/sec",
            "range": "stddev: 0.000007457296847453624",
            "extra": "mean: 81.61815814846142 usec\nrounds: 5811"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 95048.54879513614,
            "unit": "iter/sec",
            "range": "stddev: 0.000009204405695577994",
            "extra": "mean: 10.52093916925928 usec\nrounds: 185186"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 39193.29354780691,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019207482555992325",
            "extra": "mean: 25.514569189757612 usec\nrounds: 8231"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 274.7534939890331,
            "unit": "iter/sec",
            "range": "stddev: 0.000021294719143603638",
            "extra": "mean: 3.6396261444446476 msec\nrounds: 270"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 178.65032182915377,
            "unit": "iter/sec",
            "range": "stddev: 0.0000831854468427925",
            "extra": "mean: 5.597527000014679 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 108.10812513826251,
            "unit": "iter/sec",
            "range": "stddev: 0.00002152630740246781",
            "extra": "mean: 9.249998542857643 msec\nrounds: 105"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 104.57783891875607,
            "unit": "iter/sec",
            "range": "stddev: 0.00004570290159642843",
            "extra": "mean: 9.562255352942177 msec\nrounds: 102"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 274.43016875079144,
            "unit": "iter/sec",
            "range": "stddev: 0.000014379524599065452",
            "extra": "mean: 3.643914240741129 msec\nrounds: 270"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 274.27543151726707,
            "unit": "iter/sec",
            "range": "stddev: 0.00001606467709241006",
            "extra": "mean: 3.6459700180511603 msec\nrounds: 277"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 275.5967827204842,
            "unit": "iter/sec",
            "range": "stddev: 0.000012989612155454798",
            "extra": "mean: 3.628489382672584 msec\nrounds: 277"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 275.9350260076834,
            "unit": "iter/sec",
            "range": "stddev: 0.000017430983564782433",
            "extra": "mean: 3.624041552347743 msec\nrounds: 277"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 884.2980234600539,
            "unit": "iter/sec",
            "range": "stddev: 0.0003205737902481293",
            "extra": "mean: 1.1308404785156378 msec\nrounds: 512"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 26.966415940377235,
            "unit": "iter/sec",
            "range": "stddev: 0.0015915643115072078",
            "extra": "mean: 37.08316307999553 msec\nrounds: 25"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 111.26035749010634,
            "unit": "iter/sec",
            "range": "stddev: 0.0006656810984642256",
            "extra": "mean: 8.987927259616466 msec\nrounds: 104"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 146.07031646598534,
            "unit": "iter/sec",
            "range": "stddev: 0.00005472212261303041",
            "extra": "mean: 6.846017891888835 msec\nrounds: 111"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 18.062007910431213,
            "unit": "iter/sec",
            "range": "stddev: 0.022797427125345486",
            "extra": "mean: 55.36483014285901 msec\nrounds: 21"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 106.1141102033252,
            "unit": "iter/sec",
            "range": "stddev: 0.0007827163872380733",
            "extra": "mean: 9.423817417720418 msec\nrounds: 79"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 15234.495281836425,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023036550243237233",
            "extra": "mean: 65.64050738144678 usec\nrounds: 12870"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 28582.105972931186,
            "unit": "iter/sec",
            "range": "stddev: 0.000001390364938333865",
            "extra": "mean: 34.98692506937923 usec\nrounds: 11891"
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
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "5ca790264bb30c57e6b65cd94303d83c4c104ef7",
          "message": "feat: change storage interface to use eids",
          "timestamp": "2023-08-23T15:52:24-06:00",
          "tree_id": "ca6d42afb8c839e6fbcd4689d95a9ca07f890480",
          "url": "https://github.com/andnp/ReplayTables/commit/5ca790264bb30c57e6b65cd94303d83c4c104ef7"
        },
        "date": 1692827669627,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 17912.27080157144,
            "unit": "iter/sec",
            "range": "stddev: 0.00005393646722808335",
            "extra": "mean: 55.827650836557815 usec\nrounds: 3285"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 7226.700876597464,
            "unit": "iter/sec",
            "range": "stddev: 0.00006060854357721349",
            "extra": "mean: 138.37572871437683 usec\nrounds: 4416"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 74282.7376508908,
            "unit": "iter/sec",
            "range": "stddev: 0.00002287637116327344",
            "extra": "mean: 13.462077888132438 usec\nrounds: 172414"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 20775.25308630188,
            "unit": "iter/sec",
            "range": "stddev: 0.000041348863470908216",
            "extra": "mean: 48.13419099377171 usec\nrounds: 6262"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 150.3350400870685,
            "unit": "iter/sec",
            "range": "stddev: 0.000631160184742468",
            "extra": "mean: 6.651809181817073 msec\nrounds: 154"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 102.15194513444735,
            "unit": "iter/sec",
            "range": "stddev: 0.00037779082465515067",
            "extra": "mean: 9.789338799998859 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 61.62685846145398,
            "unit": "iter/sec",
            "range": "stddev: 0.0004951168746629936",
            "extra": "mean: 16.22669116949186 msec\nrounds: 59"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 60.03802821127709,
            "unit": "iter/sec",
            "range": "stddev: 0.0007672984679633231",
            "extra": "mean: 16.656109965519615 msec\nrounds: 58"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 163.21641632105076,
            "unit": "iter/sec",
            "range": "stddev: 0.0004033677044255141",
            "extra": "mean: 6.126834680850823 msec\nrounds: 141"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 164.2336531097188,
            "unit": "iter/sec",
            "range": "stddev: 0.0004119464463475615",
            "extra": "mean: 6.088886053895025 msec\nrounds: 167"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 161.0398076994524,
            "unit": "iter/sec",
            "range": "stddev: 0.0006047750525374489",
            "extra": "mean: 6.209644772218642 msec\nrounds: 180"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 159.9550810773299,
            "unit": "iter/sec",
            "range": "stddev: 0.00043725279754352857",
            "extra": "mean: 6.2517551381600205 msec\nrounds: 152"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 630.3371763227526,
            "unit": "iter/sec",
            "range": "stddev: 0.00032411491935433503",
            "extra": "mean: 1.5864525171016857 msec\nrounds: 497"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 27.950413235076482,
            "unit": "iter/sec",
            "range": "stddev: 0.0012787532859225273",
            "extra": "mean: 35.77764634782022 msec\nrounds: 23"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 107.49537521554358,
            "unit": "iter/sec",
            "range": "stddev: 0.0006448521774158239",
            "extra": "mean: 9.302725796294558 msec\nrounds: 108"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 125.7686932161244,
            "unit": "iter/sec",
            "range": "stddev: 0.0007052099643174628",
            "extra": "mean: 7.951104320385776 msec\nrounds: 103"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 18.1076541109299,
            "unit": "iter/sec",
            "range": "stddev: 0.002650284460423644",
            "extra": "mean: 55.22526517647547 msec\nrounds: 17"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 109.44542207322385,
            "unit": "iter/sec",
            "range": "stddev: 0.0006255467035286372",
            "extra": "mean: 9.136974220182143 msec\nrounds: 109"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 15940.195193974068,
            "unit": "iter/sec",
            "range": "stddev: 0.00004181789744698124",
            "extra": "mean: 62.7344889965986 usec\nrounds: 14859"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 23328.432305176386,
            "unit": "iter/sec",
            "range": "stddev: 0.00001618725626586606",
            "extra": "mean: 42.86614663678486 usec\nrounds: 6274"
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
          "id": "f1c58e64e9478a2f4a2cdc115f4141238a0abf5f",
          "message": "feat: allow backwards replay to be configured to jump",
          "timestamp": "2023-08-23T16:40:01-06:00",
          "tree_id": "c179aed1c8045c18749a180a26f3d00fccdfc551",
          "url": "https://github.com/andnp/ReplayTables/commit/f1c58e64e9478a2f4a2cdc115f4141238a0abf5f"
        },
        "date": 1692830507004,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 33142.722477189294,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012285890105406784",
            "extra": "mean: 30.1725363897989 usec\nrounds: 4864"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 12988.724986281293,
            "unit": "iter/sec",
            "range": "stddev: 0.000003089929819859508",
            "extra": "mean: 76.98985089423336 usec\nrounds: 5761"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 113871.46302871691,
            "unit": "iter/sec",
            "range": "stddev: 0.000004726392245905267",
            "extra": "mean: 8.781831491423034 usec\nrounds: 16287"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 31883.100220126456,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016695768279611363",
            "extra": "mean: 31.364578510114338 usec\nrounds: 7343"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 250.434302308759,
            "unit": "iter/sec",
            "range": "stddev: 0.00001989405021872319",
            "extra": "mean: 3.9930632137090623 msec\nrounds: 248"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 187.0095114534083,
            "unit": "iter/sec",
            "range": "stddev: 0.00006974490706385185",
            "extra": "mean: 5.347321599998622 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 112.37895675454098,
            "unit": "iter/sec",
            "range": "stddev: 0.000021020351631182537",
            "extra": "mean: 8.898463100918512 msec\nrounds: 109"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 109.99168672356603,
            "unit": "iter/sec",
            "range": "stddev: 0.00001980742918131159",
            "extra": "mean: 9.091596190475975 msec\nrounds: 105"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 248.44603917748088,
            "unit": "iter/sec",
            "range": "stddev: 0.000018953090680937612",
            "extra": "mean: 4.025018886638946 msec\nrounds: 247"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 248.7485327528032,
            "unit": "iter/sec",
            "range": "stddev: 0.000023389179551144144",
            "extra": "mean: 4.02012421513964 msec\nrounds: 251"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 248.8036939370574,
            "unit": "iter/sec",
            "range": "stddev: 0.000014057509652506859",
            "extra": "mean: 4.019232930894431 msec\nrounds: 246"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 248.27935360180837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000195199213442572",
            "extra": "mean: 4.027721135458589 msec\nrounds: 251"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 771.9165166475227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061929291562909235",
            "extra": "mean: 1.2954768792136446 msec\nrounds: 712"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 36.74935745241868,
            "unit": "iter/sec",
            "range": "stddev: 0.00026303953785301106",
            "extra": "mean: 27.21136012499681 msec\nrounds: 32"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 126.96122959435839,
            "unit": "iter/sec",
            "range": "stddev: 0.00003706391940582658",
            "extra": "mean: 7.876420252032874 msec\nrounds: 123"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 195.18699975375395,
            "unit": "iter/sec",
            "range": "stddev: 0.0000996318034078433",
            "extra": "mean: 5.123292028985487 msec\nrounds: 138"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 24.483661325206874,
            "unit": "iter/sec",
            "range": "stddev: 0.0003795160784061124",
            "extra": "mean: 40.84356447826133 msec\nrounds: 23"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 126.50266967530784,
            "unit": "iter/sec",
            "range": "stddev: 0.00008785745240405147",
            "extra": "mean: 7.904971512195611 msec\nrounds: 123"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 18302.7318168625,
            "unit": "iter/sec",
            "range": "stddev: 9.519249490099695e-7",
            "extra": "mean: 54.636652604978316 usec\nrounds: 15432"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 33136.39426859276,
            "unit": "iter/sec",
            "range": "stddev: 0.000001160731157583309",
            "extra": "mean: 30.17829857691599 usec\nrounds: 13072"
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
          "id": "e2f02943bd453956285fc1c905a42c00b31aed2d",
          "message": "refactor: rework way we count experiences",
          "timestamp": "2023-09-13T21:11:28-06:00",
          "tree_id": "bdacb05a8f01b93d8bb6148055755e67a5050ce0",
          "url": "https://github.com/andnp/ReplayTables/commit/e2f02943bd453956285fc1c905a42c00b31aed2d"
        },
        "date": 1694661297207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 22776.353424905486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018031613671039058",
            "extra": "mean: 43.905184528201076 usec\nrounds: 7950"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 4228.705780930785,
            "unit": "iter/sec",
            "range": "stddev: 0.000004904294791354684",
            "extra": "mean: 236.47897295419995 usec\nrounds: 2884"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 61352.88279082917,
            "unit": "iter/sec",
            "range": "stddev: 0.0003083468366596235",
            "extra": "mean: 16.29915261535969 usec\nrounds: 163935"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 5223.533046829259,
            "unit": "iter/sec",
            "range": "stddev: 0.000004319775849016102",
            "extra": "mean: 191.4413082170526 usec\nrounds: 3225"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 49.0405397256446,
            "unit": "iter/sec",
            "range": "stddev: 0.00020409368922794498",
            "extra": "mean: 20.391292705880915 msec\nrounds: 51"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 43.66222157889298,
            "unit": "iter/sec",
            "range": "stddev: 0.0009034325127978512",
            "extra": "mean: 22.90309480000019 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 39.52006917171431,
            "unit": "iter/sec",
            "range": "stddev: 0.0001903030814573391",
            "extra": "mean: 25.303599435896984 msec\nrounds: 39"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 38.15758664136339,
            "unit": "iter/sec",
            "range": "stddev: 0.00007082902952842472",
            "extra": "mean: 26.207108153847056 msec\nrounds: 39"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 49.22834237252932,
            "unit": "iter/sec",
            "range": "stddev: 0.00007555303995799104",
            "extra": "mean: 20.313501365384703 msec\nrounds: 52"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 49.229106650231294,
            "unit": "iter/sec",
            "range": "stddev: 0.00005086161420749257",
            "extra": "mean: 20.3131860000003 msec\nrounds: 52"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 49.239888901062244,
            "unit": "iter/sec",
            "range": "stddev: 0.00005932401984115529",
            "extra": "mean: 20.308737942307324 msec\nrounds: 52"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 49.1261610415488,
            "unit": "iter/sec",
            "range": "stddev: 0.00025067065808988026",
            "extra": "mean: 20.355753000000202 msec\nrounds: 52"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 58.927504981601125,
            "unit": "iter/sec",
            "range": "stddev: 0.00007504792987344661",
            "extra": "mean: 16.970004080645005 msec\nrounds: 62"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 26.19029723499288,
            "unit": "iter/sec",
            "range": "stddev: 0.0004545000741929709",
            "extra": "mean: 38.18207907407401 msec\nrounds: 27"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 57.05899677451289,
            "unit": "iter/sec",
            "range": "stddev: 0.000058618115752144435",
            "extra": "mean: 17.525719983332756 msec\nrounds: 60"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 48.45000334032236,
            "unit": "iter/sec",
            "range": "stddev: 0.00006155219727949733",
            "extra": "mean: 20.639833458334422 msec\nrounds: 48"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 19.942836442410123,
            "unit": "iter/sec",
            "range": "stddev: 0.000316006471702601",
            "extra": "mean: 50.14331852380917 msec\nrounds: 21"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 57.22705072442291,
            "unit": "iter/sec",
            "range": "stddev: 0.00010839801347378987",
            "extra": "mean: 17.474253650000314 msec\nrounds: 60"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 17814.392969974222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010666694382858855",
            "extra": "mean: 56.13438536387283 usec\nrounds: 15824"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 34992.37353044358,
            "unit": "iter/sec",
            "range": "stddev: 7.614820754611413e-7",
            "extra": "mean: 28.577655617730354 usec\nrounds: 15175"
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
          "id": "aeb1d79d3356838dab691fbb02a2401b4b82652c",
          "message": "fix: off-by-one error in pser",
          "timestamp": "2023-09-13T21:24:33-06:00",
          "tree_id": "6ea87dfbf61ef361cb8513ebe5ae216533644436",
          "url": "https://github.com/andnp/ReplayTables/commit/aeb1d79d3356838dab691fbb02a2401b4b82652c"
        },
        "date": 1694661980869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 21973.475399361505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016296970594300378",
            "extra": "mean: 45.50941450204356 usec\nrounds: 5351"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 4432.291565645378,
            "unit": "iter/sec",
            "range": "stddev: 0.000005418016815274074",
            "extra": "mean: 225.61692641138146 usec\nrounds: 2976"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 59524.11721535376,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852835064838599",
            "extra": "mean: 16.79991315758746 usec\nrounds: 185186"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 5611.1590053209975,
            "unit": "iter/sec",
            "range": "stddev: 0.000004108155265562854",
            "extra": "mean: 178.2163005988088 usec\nrounds: 3340"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 53.5374290708634,
            "unit": "iter/sec",
            "range": "stddev: 0.00003191904671805708",
            "extra": "mean: 18.678521127272965 msec\nrounds: 55"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 48.754847987069255,
            "unit": "iter/sec",
            "range": "stddev: 0.0006950375098110207",
            "extra": "mean: 20.510780799997974 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 42.318565801996684,
            "unit": "iter/sec",
            "range": "stddev: 0.00010153473499003646",
            "extra": "mean: 23.63029041860435 msec\nrounds: 43"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 40.79649257150263,
            "unit": "iter/sec",
            "range": "stddev: 0.00006073482676206898",
            "extra": "mean: 24.51191112195083 msec\nrounds: 41"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 53.21496348720287,
            "unit": "iter/sec",
            "range": "stddev: 0.00020451922777493456",
            "extra": "mean: 18.79170696491185 msec\nrounds: 57"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 53.57035635873249,
            "unit": "iter/sec",
            "range": "stddev: 0.000035445108314428075",
            "extra": "mean: 18.667040280701627 msec\nrounds: 57"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 53.349369092935014,
            "unit": "iter/sec",
            "range": "stddev: 0.0004057009500339347",
            "extra": "mean: 18.744364122807006 msec\nrounds: 57"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 53.35141136235661,
            "unit": "iter/sec",
            "range": "stddev: 0.000044869271455619566",
            "extra": "mean: 18.7436465964905 msec\nrounds: 57"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 64.94795116844966,
            "unit": "iter/sec",
            "range": "stddev: 0.00003804287808545757",
            "extra": "mean: 15.396944507246884 msec\nrounds: 69"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 27.76132459360973,
            "unit": "iter/sec",
            "range": "stddev: 0.0004794435913451545",
            "extra": "mean: 36.02133596428558 msec\nrounds: 28"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 61.8168129929953,
            "unit": "iter/sec",
            "range": "stddev: 0.00008386523530057015",
            "extra": "mean: 16.17682878787869 msec\nrounds: 66"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 51.505417204707854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000685650223542288",
            "extra": "mean: 19.415433448980878 msec\nrounds: 49"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 20.690806682056667,
            "unit": "iter/sec",
            "range": "stddev: 0.0006946703777834318",
            "extra": "mean: 48.3306434285722 msec\nrounds: 21"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 61.853715015561775,
            "unit": "iter/sec",
            "range": "stddev: 0.00015977685478954913",
            "extra": "mean: 16.167177666667392 msec\nrounds: 66"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 18222.818222478156,
            "unit": "iter/sec",
            "range": "stddev: 8.560251076084966e-7",
            "extra": "mean: 54.87625392468016 usec\nrounds: 16052"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 34243.27813554925,
            "unit": "iter/sec",
            "range": "stddev: 8.354081276948023e-7",
            "extra": "mean: 29.202811601201876 usec\nrounds: 12516"
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
          "id": "204b5421c5b72c4aea077f55a2032d847c7c7b03",
          "message": "ci: ramp up testing coverage around storage",
          "timestamp": "2023-09-14T14:15:31-06:00",
          "tree_id": "9a8866b040218ade4ddd4395377681f99ee994b0",
          "url": "https://github.com/andnp/ReplayTables/commit/204b5421c5b72c4aea077f55a2032d847c7c7b03"
        },
        "date": 1694722644534,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 21312.390794594587,
            "unit": "iter/sec",
            "range": "stddev: 0.000004538389177234992",
            "extra": "mean: 46.92106153823097 usec\nrounds: 195"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 4322.6582498946145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054802994410900166",
            "extra": "mean: 231.3391302734561 usec\nrounds: 2963"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 58923.55693850598,
            "unit": "iter/sec",
            "range": "stddev: 0.00031711192926408584",
            "extra": "mean: 16.971141118375183 usec\nrounds: 181819"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 5457.749499218119,
            "unit": "iter/sec",
            "range": "stddev: 0.000004451365344811301",
            "extra": "mean: 183.22570505356845 usec\nrounds: 3265"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 51.65176831191625,
            "unit": "iter/sec",
            "range": "stddev: 0.00005623603484487167",
            "extra": "mean: 19.36042138888973 msec\nrounds: 54"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 48.140582053335585,
            "unit": "iter/sec",
            "range": "stddev: 0.00012755056057201351",
            "extra": "mean: 20.772494999999935 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 41.359157840495875,
            "unit": "iter/sec",
            "range": "stddev: 0.00023155807172655607",
            "extra": "mean: 24.178442023809122 msec\nrounds: 42"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 39.50232104133401,
            "unit": "iter/sec",
            "range": "stddev: 0.000060279921536105146",
            "extra": "mean: 25.31496817499992 msec\nrounds: 40"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 51.00888036835808,
            "unit": "iter/sec",
            "range": "stddev: 0.00006613387510506443",
            "extra": "mean: 19.60442951851815 msec\nrounds: 54"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 51.364778844091106,
            "unit": "iter/sec",
            "range": "stddev: 0.00005990272846750247",
            "extra": "mean: 19.468593509091647 msec\nrounds: 55"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 51.332088701291404,
            "unit": "iter/sec",
            "range": "stddev: 0.00005663420227036146",
            "extra": "mean: 19.480991818181014 msec\nrounds: 55"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 51.45110294457373,
            "unit": "iter/sec",
            "range": "stddev: 0.00005487481464953356",
            "extra": "mean: 19.435929314814903 msec\nrounds: 54"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 63.00034759873814,
            "unit": "iter/sec",
            "range": "stddev: 0.0000616290093393656",
            "extra": "mean: 15.872928295081811 msec\nrounds: 61"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 27.064057077711833,
            "unit": "iter/sec",
            "range": "stddev: 0.0010022454586033787",
            "extra": "mean: 36.94937522222172 msec\nrounds: 27"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 60.51399818505017,
            "unit": "iter/sec",
            "range": "stddev: 0.00006256480107230157",
            "extra": "mean: 16.52510212499969 msec\nrounds: 64"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 51.03410585756044,
            "unit": "iter/sec",
            "range": "stddev: 0.00006886545486836225",
            "extra": "mean: 19.594739306123362 msec\nrounds: 49"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 20.315767930148862,
            "unit": "iter/sec",
            "range": "stddev: 0.0004269206947274081",
            "extra": "mean: 49.22285012500005 msec\nrounds: 8"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 60.442975955481174,
            "unit": "iter/sec",
            "range": "stddev: 0.00007653297245186246",
            "extra": "mean: 16.544519593749698 msec\nrounds: 64"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 18362.848656517155,
            "unit": "iter/sec",
            "range": "stddev: 8.066013150655748e-7",
            "extra": "mean: 54.45778150794104 usec\nrounds: 16234"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 34593.38897871469,
            "unit": "iter/sec",
            "range": "stddev: 9.204351789071853e-7",
            "extra": "mean: 28.907257413123062 usec\nrounds: 12579"
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
          "id": "a9f7bafaeb4af70ae079afe19337f788c561ab07",
          "message": "fix: it's invalid to multiply empty arrays",
          "timestamp": "2023-09-14T15:27:06-06:00",
          "tree_id": "5915c6b4879d806a38d019f6820161180eee68bf",
          "url": "https://github.com/andnp/ReplayTables/commit/a9f7bafaeb4af70ae079afe19337f788c561ab07"
        },
        "date": 1694726938121,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 21794.110005068564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037805204667073237",
            "extra": "mean: 45.883956709745625 usec\nrounds: 231"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 4174.414442370037,
            "unit": "iter/sec",
            "range": "stddev: 0.000004565032078183753",
            "extra": "mean: 239.55455640677758 usec\nrounds: 2872"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 57485.45348636178,
            "unit": "iter/sec",
            "range": "stddev: 0.00027413156776681934",
            "extra": "mean: 17.395705162824303 usec\nrounds: 181819"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 5071.647279207992,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035683191415890768",
            "extra": "mean: 197.17459534294818 usec\nrounds: 3178"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 47.138389781310565,
            "unit": "iter/sec",
            "range": "stddev: 0.00015229764282338572",
            "extra": "mean: 21.214131510204453 msec\nrounds: 49"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 44.6433055689185,
            "unit": "iter/sec",
            "range": "stddev: 0.000045845101161996524",
            "extra": "mean: 22.399774999999522 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 38.8138769907553,
            "unit": "iter/sec",
            "range": "stddev: 0.00004779132603942267",
            "extra": "mean: 25.763981275000702 msec\nrounds: 40"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 37.02495531777276,
            "unit": "iter/sec",
            "range": "stddev: 0.00018539561160297796",
            "extra": "mean: 27.008810447368155 msec\nrounds: 38"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 47.3064157815432,
            "unit": "iter/sec",
            "range": "stddev: 0.00012994868003992773",
            "extra": "mean: 21.138781780000215 msec\nrounds: 50"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 47.90262109921894,
            "unit": "iter/sec",
            "range": "stddev: 0.00008321232349453822",
            "extra": "mean: 20.87568439999842 msec\nrounds: 50"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 47.612839902327124,
            "unit": "iter/sec",
            "range": "stddev: 0.00007984307769886683",
            "extra": "mean: 21.00273795999982 msec\nrounds: 50"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 47.865057613238534,
            "unit": "iter/sec",
            "range": "stddev: 0.00007999217292820557",
            "extra": "mean: 20.892067196079584 msec\nrounds: 51"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 55.95195788989959,
            "unit": "iter/sec",
            "range": "stddev: 0.0005332219555934882",
            "extra": "mean: 17.87247556140514 msec\nrounds: 57"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 26.01636936952329,
            "unit": "iter/sec",
            "range": "stddev: 0.0003641404093775443",
            "extra": "mean: 38.43733865384936 msec\nrounds: 26"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 53.575243138814045,
            "unit": "iter/sec",
            "range": "stddev: 0.00011760368048513094",
            "extra": "mean: 18.665337596490026 msec\nrounds: 57"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 47.50896784836578,
            "unit": "iter/sec",
            "range": "stddev: 0.00006110099693861507",
            "extra": "mean: 21.048657659574857 msec\nrounds: 47"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 19.407442310773405,
            "unit": "iter/sec",
            "range": "stddev: 0.0004435225538061101",
            "extra": "mean: 51.526624888890325 msec\nrounds: 9"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 54.10624641175965,
            "unit": "iter/sec",
            "range": "stddev: 0.00009985868303927185",
            "extra": "mean: 18.482154396551454 msec\nrounds: 58"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 17676.306209375813,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011110160216224913",
            "extra": "mean: 56.57290545632113 usec\nrounds: 11656"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 34914.309409192385,
            "unit": "iter/sec",
            "range": "stddev: 7.660377243283218e-7",
            "extra": "mean: 28.641551756905603 usec\nrounds: 15824"
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
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "bdfa2764db95aec52d5113200ff279e7895d0f83",
          "message": "feat: migrate to metadata storage pattern",
          "timestamp": "2023-09-18T23:04:23-06:00",
          "tree_id": "003cbe3d330dd2db309f3ae8bf127d61ea0c6f90",
          "url": "https://github.com/andnp/ReplayTables/commit/bdfa2764db95aec52d5113200ff279e7895d0f83"
        },
        "date": 1695099962221,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 24067.1204121126,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047339096711069715",
            "extra": "mean: 41.55046315789054 usec\nrounds: 190"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 15359.372191962662,
            "unit": "iter/sec",
            "range": "stddev: 0.000002671311345478241",
            "extra": "mean: 65.10682777277093 usec\nrounds: 6654"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 72049.2027654381,
            "unit": "iter/sec",
            "range": "stddev: 0.00033225342673287947",
            "extra": "mean: 13.879404096330939 usec\nrounds: 192271"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 37202.15601679001,
            "unit": "iter/sec",
            "range": "stddev: 0.00000160927555232634",
            "extra": "mean: 26.880162524684906 usec\nrounds: 7605"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 221.41409924778122,
            "unit": "iter/sec",
            "range": "stddev: 0.000046172780968211546",
            "extra": "mean: 4.5164242177771845 msec\nrounds: 225"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 109.60078069078325,
            "unit": "iter/sec",
            "range": "stddev: 0.00001820055686823941",
            "extra": "mean: 9.124022599996806 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 108.7682843945887,
            "unit": "iter/sec",
            "range": "stddev: 0.00003175313207094754",
            "extra": "mean: 9.193856514020283 msec\nrounds: 107"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 98.68120845976203,
            "unit": "iter/sec",
            "range": "stddev: 0.00003404291775202404",
            "extra": "mean: 10.133641608247604 msec\nrounds: 97"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 220.93164144153343,
            "unit": "iter/sec",
            "range": "stddev: 0.00002234176810730884",
            "extra": "mean: 4.526286925110437 msec\nrounds: 227"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 220.15756064096703,
            "unit": "iter/sec",
            "range": "stddev: 0.0000792315832813275",
            "extra": "mean: 4.542201490099175 msec\nrounds: 202"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 220.26799818532965,
            "unit": "iter/sec",
            "range": "stddev: 0.00010459140046469414",
            "extra": "mean: 4.539924129871183 msec\nrounds: 231"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 221.335698335814,
            "unit": "iter/sec",
            "range": "stddev: 0.000010546669791886776",
            "extra": "mean: 4.518024012930731 msec\nrounds: 232"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 448.9438270621897,
            "unit": "iter/sec",
            "range": "stddev: 0.000010525568271063003",
            "extra": "mean: 2.227450161290391 msec\nrounds: 403"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 39.9845026160746,
            "unit": "iter/sec",
            "range": "stddev: 0.010600749508619393",
            "extra": "mean: 25.009689619047037 msec\nrounds: 42"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 318.8720938371588,
            "unit": "iter/sec",
            "range": "stddev: 0.000012747347674233279",
            "extra": "mean: 3.1360536695653236 msec\nrounds: 345"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 161.2994986409607,
            "unit": "iter/sec",
            "range": "stddev: 0.000031007880017159854",
            "extra": "mean: 6.199647292307567 msec\nrounds: 130"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 28.38516816814366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006754887487657257",
            "extra": "mean: 35.229666214283284 msec\nrounds: 28"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 318.614843751214,
            "unit": "iter/sec",
            "range": "stddev: 0.000015121568149170725",
            "extra": "mean: 3.138585723836634 msec\nrounds: 344"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 29530.74627015739,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012510289708281573",
            "extra": "mean: 33.863011481377995 usec\nrounds: 24039"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 45105.16159371161,
            "unit": "iter/sec",
            "range": "stddev: 6.13488186376522e-7",
            "extra": "mean: 22.170411648395827 usec\nrounds: 14663"
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
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "ce46a1ef83bb0d5e77cb8b890cf697b967d940cb",
          "message": "test: add basic infra for testing index distributions\n\nchore: fake commit [WIP]",
          "timestamp": "2023-09-19T22:20:27-06:00",
          "tree_id": "42fba1679f5329e49a61000ac9b3d74c3e31e02e",
          "url": "https://github.com/andnp/ReplayTables/commit/ce46a1ef83bb0d5e77cb8b890cf697b967d940cb"
        },
        "date": 1695183734361,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 27275.40138534444,
            "unit": "iter/sec",
            "range": "stddev: 0.00000739895450354854",
            "extra": "mean: 36.66307182329195 usec\nrounds: 181"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 16825.170463964863,
            "unit": "iter/sec",
            "range": "stddev: 0.00001025669610644897",
            "extra": "mean: 59.43476187309601 usec\nrounds: 7496"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 76696.69770189312,
            "unit": "iter/sec",
            "range": "stddev: 0.0003368087164613937",
            "extra": "mean: 13.038371011576379 usec\nrounds: 166639"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 37032.28078927498,
            "unit": "iter/sec",
            "range": "stddev: 0.000004257286748508552",
            "extra": "mean: 27.003467749942445 usec\nrounds: 8000"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 238.49995823766238,
            "unit": "iter/sec",
            "range": "stddev: 0.0004038907297676332",
            "extra": "mean: 4.192872851589818 msec\nrounds: 283"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 107.1945739307933,
            "unit": "iter/sec",
            "range": "stddev: 0.0005308623194127763",
            "extra": "mean: 9.328830399994104 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 114.02686337190298,
            "unit": "iter/sec",
            "range": "stddev: 0.0005983082039706576",
            "extra": "mean: 8.769863262295146 msec\nrounds: 122"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 105.24306211349669,
            "unit": "iter/sec",
            "range": "stddev: 0.0006776555646742353",
            "extra": "mean: 9.50181399056572 msec\nrounds: 106"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 228.36106753069834,
            "unit": "iter/sec",
            "range": "stddev: 0.00046684060081326757",
            "extra": "mean: 4.37903015086217 msec\nrounds: 232"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 237.19780027273916,
            "unit": "iter/sec",
            "range": "stddev: 0.0004179754327064452",
            "extra": "mean: 4.215890699029087 msec\nrounds: 206"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 238.66544794422137,
            "unit": "iter/sec",
            "range": "stddev: 0.0003938291740730277",
            "extra": "mean: 4.189965529630039 msec\nrounds: 270"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 239.12920738597558,
            "unit": "iter/sec",
            "range": "stddev: 0.00042171049677812276",
            "extra": "mean: 4.1818396461537715 msec\nrounds: 260"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 462.0742660341677,
            "unit": "iter/sec",
            "range": "stddev: 0.0002510257248962581",
            "extra": "mean: 2.16415427888394 msec\nrounds: 502"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 39.22303038104573,
            "unit": "iter/sec",
            "range": "stddev: 0.002458057926698815",
            "extra": "mean: 25.495225388888954 msec\nrounds: 36"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 308.5688373729922,
            "unit": "iter/sec",
            "range": "stddev: 0.0003311215418114397",
            "extra": "mean: 3.240767954773148 msec\nrounds: 398"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 135.87753770491733,
            "unit": "iter/sec",
            "range": "stddev: 0.0003567625032857926",
            "extra": "mean: 7.359568158879071 msec\nrounds: 107"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 26.41338736775618,
            "unit": "iter/sec",
            "range": "stddev: 0.0030142100759765274",
            "extra": "mean: 37.85958938461402 msec\nrounds: 26"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 318.33970513664514,
            "unit": "iter/sec",
            "range": "stddev: 0.00041997765844107405",
            "extra": "mean: 3.141298379888732 msec\nrounds: 358"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 29721.812124209024,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061841096759447215",
            "extra": "mean: 33.645324040840684 usec\nrounds: 21738"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 45363.10755455639,
            "unit": "iter/sec",
            "range": "stddev: 0.000014479617928620495",
            "extra": "mean: 22.044345149796897 usec\nrounds: 10917"
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
          "id": "78a4c870976acb543ae7712df9efdabe03cc0c8f",
          "message": "ci: fixup minmax tests",
          "timestamp": "2023-10-06T16:26:08-06:00",
          "tree_id": "e1673acfcc96d7f687afcc1b25389e9820817614",
          "url": "https://github.com/andnp/ReplayTables/commit/78a4c870976acb543ae7712df9efdabe03cc0c8f"
        },
        "date": 1696631275634,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 24322.049884015792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052341444702152465",
            "extra": "mean: 41.11495555550151 usec\nrounds: 180"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 15708.7282297785,
            "unit": "iter/sec",
            "range": "stddev: 0.000002752804070532133",
            "extra": "mean: 63.65887711421056 usec\nrounds: 6681"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 73892.3978768199,
            "unit": "iter/sec",
            "range": "stddev: 0.0003929597684219277",
            "extra": "mean: 13.53319189434101 usec\nrounds: 149254"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 36042.92036865394,
            "unit": "iter/sec",
            "range": "stddev: 0.000001672541733807438",
            "extra": "mean: 27.744699646194235 usec\nrounds: 7348"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 227.46452348067635,
            "unit": "iter/sec",
            "range": "stddev: 0.00001264622416054521",
            "extra": "mean: 4.3962899563322555 msec\nrounds: 229"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 110.2140908715507,
            "unit": "iter/sec",
            "range": "stddev: 0.00001590339586307429",
            "extra": "mean: 9.073249999997302 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 110.48794613643675,
            "unit": "iter/sec",
            "range": "stddev: 0.00002919798798537227",
            "extra": "mean: 9.050761055555723 msec\nrounds: 108"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 111.9494147898328,
            "unit": "iter/sec",
            "range": "stddev: 0.000017123753856749464",
            "extra": "mean: 8.9326058727269 msec\nrounds: 110"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 225.05593933431612,
            "unit": "iter/sec",
            "range": "stddev: 0.000015522107801446885",
            "extra": "mean: 4.4433397445891 msec\nrounds: 231"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 225.0388463013921,
            "unit": "iter/sec",
            "range": "stddev: 0.000011194626673076894",
            "extra": "mean: 4.44367724255354 msec\nrounds: 235"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 226.8037511410926,
            "unit": "iter/sec",
            "range": "stddev: 0.000012268390741135005",
            "extra": "mean: 4.409098151899212 msec\nrounds: 237"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 227.39005578791182,
            "unit": "iter/sec",
            "range": "stddev: 0.000011242813292704233",
            "extra": "mean: 4.397729691982249 msec\nrounds: 237"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 467.67923098051943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000681472789417953",
            "extra": "mean: 2.1382176794625583 msec\nrounds: 521"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 37.53793551718697,
            "unit": "iter/sec",
            "range": "stddev: 0.014394442365364912",
            "extra": "mean: 26.63971756097625 msec\nrounds: 41"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 321.05964885309226,
            "unit": "iter/sec",
            "range": "stddev: 0.000019336752922261036",
            "extra": "mean: 3.114686020408536 msec\nrounds: 343"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 153.1260759914716,
            "unit": "iter/sec",
            "range": "stddev: 0.00008372669700884195",
            "extra": "mean: 6.530566355371735 msec\nrounds: 121"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 27.083200159638608,
            "unit": "iter/sec",
            "range": "stddev: 0.0006118240346352967",
            "extra": "mean: 36.92325848148012 msec\nrounds: 27"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 320.2677752086584,
            "unit": "iter/sec",
            "range": "stddev: 0.000021869322997054467",
            "extra": "mean: 3.1223871941174464 msec\nrounds: 340"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 29565.082083972047,
            "unit": "iter/sec",
            "range": "stddev: 8.091065982530037e-7",
            "extra": "mean: 33.823684208275026 usec\nrounds: 23981"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 45827.228942730355,
            "unit": "iter/sec",
            "range": "stddev: 7.722265086458299e-7",
            "extra": "mean: 21.821088096984564 usec\nrounds: 16584"
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
          "id": "85fe8ada91a7138b069af92056e7cf6bf09473c7",
          "message": "perf: consistently use int64 instead of uint64",
          "timestamp": "2023-10-07T21:29:20-06:00",
          "tree_id": "f0b7faeb608162dd9676efc8318d2db0065d2baa",
          "url": "https://github.com/andnp/ReplayTables/commit/85fe8ada91a7138b069af92056e7cf6bf09473c7"
        },
        "date": 1696735884204,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 20625.273285253134,
            "unit": "iter/sec",
            "range": "stddev: 0.000008254973347182241",
            "extra": "mean: 48.48420605970784 usec\nrounds: 165"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 13263.264220620476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036995565058913143",
            "extra": "mean: 75.39622097291058 usec\nrounds: 5960"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 62906.877287226824,
            "unit": "iter/sec",
            "range": "stddev: 0.000432691834117466",
            "extra": "mean: 15.896513117859833 usec\nrounds: 142858"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 31392.88145829235,
            "unit": "iter/sec",
            "range": "stddev: 0.000003086777557514009",
            "extra": "mean: 31.85435530435683 usec\nrounds: 6448"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 192.381973271206,
            "unit": "iter/sec",
            "range": "stddev: 0.00023083387234450948",
            "extra": "mean: 5.197992218274387 msec\nrounds: 197"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 94.44985810039303,
            "unit": "iter/sec",
            "range": "stddev: 0.0001661403116276957",
            "extra": "mean: 10.587628400003268 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 94.28794294816659,
            "unit": "iter/sec",
            "range": "stddev: 0.00019202772394172674",
            "extra": "mean: 10.605809913041961 msec\nrounds: 92"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 94.99183041759984,
            "unit": "iter/sec",
            "range": "stddev: 0.00017110558778828209",
            "extra": "mean: 10.527221084211497 msec\nrounds: 95"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 196.54472853833147,
            "unit": "iter/sec",
            "range": "stddev: 0.00010259515227103843",
            "extra": "mean: 5.087900385000523 msec\nrounds: 200"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 187.08719588521555,
            "unit": "iter/sec",
            "range": "stddev: 0.0018053890418257199",
            "extra": "mean: 5.345101225492387 msec\nrounds: 204"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 193.7481512620023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000721957244360433",
            "extra": "mean: 5.161339571430115 msec\nrounds: 203"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 195.2845275457747,
            "unit": "iter/sec",
            "range": "stddev: 0.00008906074640918968",
            "extra": "mean: 5.120733386138848 msec\nrounds: 202"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 397.5677489223411,
            "unit": "iter/sec",
            "range": "stddev: 0.00007760573212391557",
            "extra": "mean: 2.5152945698201865 msec\nrounds: 444"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 32.50741354553021,
            "unit": "iter/sec",
            "range": "stddev: 0.016390754683663664",
            "extra": "mean: 30.76221362857398 msec\nrounds: 35"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 267.5401558948857,
            "unit": "iter/sec",
            "range": "stddev: 0.00005703031492406166",
            "extra": "mean: 3.737756661818242 msec\nrounds: 275"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 129.73417697241607,
            "unit": "iter/sec",
            "range": "stddev: 0.00009000758697531118",
            "extra": "mean: 7.708069094334478 msec\nrounds: 106"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 22.403771585722005,
            "unit": "iter/sec",
            "range": "stddev: 0.002070964785267649",
            "extra": "mean: 44.63534169565017 msec\nrounds: 23"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 273.1198249016603,
            "unit": "iter/sec",
            "range": "stddev: 0.00010253043075932622",
            "extra": "mean: 3.6613966062700154 msec\nrounds: 287"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 25144.873971583747,
            "unit": "iter/sec",
            "range": "stddev: 0.000002967350212640674",
            "extra": "mean: 39.76953716809641 usec\nrounds: 21645"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 39144.70393398799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021020778396704595",
            "extra": "mean: 25.5462399635557 usec\nrounds: 15244"
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
          "id": "a2f6a7869f9150f7c4ce0fd028eb0c9d866ff938",
          "message": "ci: fuzz testing",
          "timestamp": "2023-10-17T18:02:43-06:00",
          "tree_id": "51aaf63345a5f758bf877ab62d94731908887c8f",
          "url": "https://github.com/andnp/ReplayTables/commit/a2f6a7869f9150f7c4ce0fd028eb0c9d866ff938"
        },
        "date": 1697587613994,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 20446.64727312181,
            "unit": "iter/sec",
            "range": "stddev: 0.00000872223168095599",
            "extra": "mean: 48.90777380967257 usec\nrounds: 168"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 13174.650643448906,
            "unit": "iter/sec",
            "range": "stddev: 0.000003903585006097242",
            "extra": "mean: 75.90334097376996 usec\nrounds: 5628"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 62877.26378308746,
            "unit": "iter/sec",
            "range": "stddev: 0.0004755054998419045",
            "extra": "mean: 15.903999949008229 usec\nrounds: 117648"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 30809.536551046487,
            "unit": "iter/sec",
            "range": "stddev: 0.000002086846795783895",
            "extra": "mean: 32.45748271296323 usec\nrounds: 6826"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 194.97674671865187,
            "unit": "iter/sec",
            "range": "stddev: 0.000023450862118711402",
            "extra": "mean: 5.12881672727355 msec\nrounds: 198"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 93.2264113406551,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070787004435062535",
            "extra": "mean: 10.726574000000255 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 87.20442876415144,
            "unit": "iter/sec",
            "range": "stddev: 0.00033103760426465937",
            "extra": "mean: 11.467307499995764 msec\nrounds: 84"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 89.03064586182333,
            "unit": "iter/sec",
            "range": "stddev: 0.0002705257202839479",
            "extra": "mean: 11.232087449438618 msec\nrounds: 89"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 194.01223433936204,
            "unit": "iter/sec",
            "range": "stddev: 0.000019083102773936863",
            "extra": "mean: 5.154314125627879 msec\nrounds: 199"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 193.3050327301343,
            "unit": "iter/sec",
            "range": "stddev: 0.000021728290485033237",
            "extra": "mean: 5.173171054454963 msec\nrounds: 202"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 194.1982131883175,
            "unit": "iter/sec",
            "range": "stddev: 0.00002698284933685889",
            "extra": "mean: 5.1493779658532794 msec\nrounds: 205"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 193.64768963199876,
            "unit": "iter/sec",
            "range": "stddev: 0.00010601359627785831",
            "extra": "mean: 5.1640172000005 msec\nrounds: 185"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 394.1685072744584,
            "unit": "iter/sec",
            "range": "stddev: 0.000013855979221192674",
            "extra": "mean: 2.536986039079228 msec\nrounds: 435"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 30.00998136393849,
            "unit": "iter/sec",
            "range": "stddev: 0.019714009427636004",
            "extra": "mean: 33.322246617642044 msec\nrounds: 34"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 251.583041838236,
            "unit": "iter/sec",
            "range": "stddev: 0.0004896583990962977",
            "extra": "mean: 3.9748307067651423 msec\nrounds: 266"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 135.47760137422662,
            "unit": "iter/sec",
            "range": "stddev: 0.00009945869449747043",
            "extra": "mean: 7.381293954546209 msec\nrounds: 110"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 23.125230221090742,
            "unit": "iter/sec",
            "range": "stddev: 0.000671206651325912",
            "extra": "mean: 43.24281273913446 msec\nrounds: 23"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 269.5513257371341,
            "unit": "iter/sec",
            "range": "stddev: 0.000018268063453106598",
            "extra": "mean: 3.7098686020754283 msec\nrounds: 289"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 24714.38855378928,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010806955662285194",
            "extra": "mean: 40.462259376701326 usec\nrounds: 19570"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 38948.058472469034,
            "unit": "iter/sec",
            "range": "stddev: 8.943065942880338e-7",
            "extra": "mean: 25.67522077401788 usec\nrounds: 15038"
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
          "id": "97faf841214fb3427571556518176fed5a3a28de",
          "message": "feat: maintain a simple registry of buffer methods",
          "timestamp": "2023-10-31T10:50:22-06:00",
          "tree_id": "962d91cd3e48d5c37406f3d05771f965e7110fe9",
          "url": "https://github.com/andnp/ReplayTables/commit/97faf841214fb3427571556518176fed5a3a28de"
        },
        "date": 1698771337253,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 15158.256939286552,
            "unit": "iter/sec",
            "range": "stddev: 0.000017826339310580526",
            "extra": "mean: 65.97064583383865 usec\nrounds: 144"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 8086.502114569266,
            "unit": "iter/sec",
            "range": "stddev: 0.00009146437050555938",
            "extra": "mean: 123.66286261130419 usec\nrounds: 4258"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 50085.09428321326,
            "unit": "iter/sec",
            "range": "stddev: 0.0005718965604952174",
            "extra": "mean: 19.966020116591142 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 22678.899940871648,
            "unit": "iter/sec",
            "range": "stddev: 0.00003563927282417962",
            "extra": "mean: 44.09384946391565 usec\nrounds: 6065"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 135.25757724356276,
            "unit": "iter/sec",
            "range": "stddev: 0.0008124524357098889",
            "extra": "mean: 7.393301139789508 msec\nrounds: 93"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 54.438831837214984,
            "unit": "iter/sec",
            "range": "stddev: 0.0041085545828768956",
            "extra": "mean: 18.36924059998637 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 60.30048449286112,
            "unit": "iter/sec",
            "range": "stddev: 0.0010665088651464919",
            "extra": "mean: 16.583614682538553 msec\nrounds: 63"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 60.69132954223699,
            "unit": "iter/sec",
            "range": "stddev: 0.0009337948075910447",
            "extra": "mean: 16.476818147542293 msec\nrounds: 61"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 137.30197414276512,
            "unit": "iter/sec",
            "range": "stddev: 0.0005908404893762005",
            "extra": "mean: 7.283216474077866 msec\nrounds: 135"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 138.20147655102244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005943949953000435",
            "extra": "mean: 7.235812705885317 msec\nrounds: 153"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 134.48909771910408,
            "unit": "iter/sec",
            "range": "stddev: 0.0009610168429852465",
            "extra": "mean: 7.435546947371264 msec\nrounds: 152"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 133.4291454429065,
            "unit": "iter/sec",
            "range": "stddev: 0.000984203391490541",
            "extra": "mean: 7.49461443885132 msec\nrounds: 139"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 314.49674799893023,
            "unit": "iter/sec",
            "range": "stddev: 0.0006566030187975993",
            "extra": "mean: 3.1796831171157343 msec\nrounds: 333"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 30.647767978941605,
            "unit": "iter/sec",
            "range": "stddev: 0.0016925603003975606",
            "extra": "mean: 32.62880352941559 msec\nrounds: 34"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 224.83724182876014,
            "unit": "iter/sec",
            "range": "stddev: 0.0005176724873735186",
            "extra": "mean: 4.447661747966189 msec\nrounds: 246"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 89.94943198697847,
            "unit": "iter/sec",
            "range": "stddev: 0.0007719251637415723",
            "extra": "mean: 11.117357585368243 msec\nrounds: 82"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 17.54043519542289,
            "unit": "iter/sec",
            "range": "stddev: 0.0027804848295014577",
            "extra": "mean: 57.01112822223169 msec\nrounds: 18"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 227.29594597103514,
            "unit": "iter/sec",
            "range": "stddev: 0.0005967105087418368",
            "extra": "mean: 4.399550531919441 msec\nrounds: 235"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 21809.791451397763,
            "unit": "iter/sec",
            "range": "stddev: 0.000041262535967246244",
            "extra": "mean: 45.85096571090373 usec\nrounds: 21552"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 29475.966207233592,
            "unit": "iter/sec",
            "range": "stddev: 0.00005665086732903456",
            "extra": "mean: 33.9259447160919 usec\nrounds: 11468"
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
          "id": "9488b8b2e302e1a462bd80e47970ec8304b2bf87",
          "message": "fix: allow arbitrary capitalization in registry",
          "timestamp": "2023-10-31T10:54:56-06:00",
          "tree_id": "d21b19801c352b78aa79e0a6d4a1df2280c9c53a",
          "url": "https://github.com/andnp/ReplayTables/commit/9488b8b2e302e1a462bd80e47970ec8304b2bf87"
        },
        "date": 1698771541608,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 20681.120805783827,
            "unit": "iter/sec",
            "range": "stddev: 0.000006796673928003428",
            "extra": "mean: 48.353278789432586 usec\nrounds: 165"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 13654.156582753792,
            "unit": "iter/sec",
            "range": "stddev: 0.000003938442300105629",
            "extra": "mean: 73.23777151223489 usec\nrounds: 5834"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 62639.04022061386,
            "unit": "iter/sec",
            "range": "stddev: 0.00041781192166309407",
            "extra": "mean: 15.964484712377669 usec\nrounds: 138870"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 32555.336693828125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020679547093288185",
            "extra": "mean: 30.7169300506599 usec\nrounds: 7148"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 199.9073202225759,
            "unit": "iter/sec",
            "range": "stddev: 0.00002538484643158477",
            "extra": "mean: 5.002318068626025 msec\nrounds: 204"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 98.08408242261142,
            "unit": "iter/sec",
            "range": "stddev: 0.0000296319499058062",
            "extra": "mean: 10.19533420001153 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 94.64518574699788,
            "unit": "iter/sec",
            "range": "stddev: 0.000059644258255903804",
            "extra": "mean: 10.565777774193018 msec\nrounds: 93"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 96.05663569404616,
            "unit": "iter/sec",
            "range": "stddev: 0.00008572919636023214",
            "extra": "mean: 10.410524923911971 msec\nrounds: 92"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 201.24741721548182,
            "unit": "iter/sec",
            "range": "stddev: 0.00003066658676416243",
            "extra": "mean: 4.969007870194275 msec\nrounds: 208"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 201.09857681880945,
            "unit": "iter/sec",
            "range": "stddev: 0.00002251320335574168",
            "extra": "mean: 4.9726856142845985 msec\nrounds: 210"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 201.1079651609211,
            "unit": "iter/sec",
            "range": "stddev: 0.000026441503636844194",
            "extra": "mean: 4.972453473932906 msec\nrounds: 211"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 201.1050986897886,
            "unit": "iter/sec",
            "range": "stddev: 0.000028038209131221175",
            "extra": "mean: 4.972524349283325 msec\nrounds: 209"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 383.0898113940764,
            "unit": "iter/sec",
            "range": "stddev: 0.00002222364062438871",
            "extra": "mean: 2.610353943794452 msec\nrounds: 427"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 33.60032331416794,
            "unit": "iter/sec",
            "range": "stddev: 0.0018074050840342828",
            "extra": "mean: 29.761618382354648 msec\nrounds: 34"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 266.58330385394567,
            "unit": "iter/sec",
            "range": "stddev: 0.000026315264346307313",
            "extra": "mean: 3.7511726561385665 msec\nrounds: 285"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 129.60049463841682,
            "unit": "iter/sec",
            "range": "stddev: 0.00005777202432534825",
            "extra": "mean: 7.716019933334229 msec\nrounds: 105"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 22.364145739311144,
            "unit": "iter/sec",
            "range": "stddev: 0.0018831765945958355",
            "extra": "mean: 44.714428695669994 msec\nrounds: 23"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 250.3252415519779,
            "unit": "iter/sec",
            "range": "stddev: 0.0006634572612290518",
            "extra": "mean: 3.9948028964244844 msec\nrounds: 280"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 24564.523146636388,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012290318644256573",
            "extra": "mean: 40.70911509377009 usec\nrounds: 20201"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 38963.12485199208,
            "unit": "iter/sec",
            "range": "stddev: 8.826417239001497e-7",
            "extra": "mean: 25.6652926016244 usec\nrounds: 14084"
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
          "id": "1a89d16eee1e426e3ff8788fb48e1ca0223a7544",
          "message": "fix: help mypy's derpy type inference",
          "timestamp": "2023-10-31T10:59:13-06:00",
          "tree_id": "39850a632b779971be57216d69ba270805c06cd9",
          "url": "https://github.com/andnp/ReplayTables/commit/1a89d16eee1e426e3ff8788fb48e1ca0223a7544"
        },
        "date": 1698771768792,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 24146.887634458504,
            "unit": "iter/sec",
            "range": "stddev: 0.000006959583251859075",
            "extra": "mean: 41.41320468038137 usec\nrounds: 171"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 14813.19776294561,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037755010551254352",
            "extra": "mean: 67.50736849685786 usec\nrounds: 5593"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 69164.43882773911,
            "unit": "iter/sec",
            "range": "stddev: 0.0004320659497924583",
            "extra": "mean: 14.458297022991816 usec\nrounds: 178572"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 34051.8233950356,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022402842273002207",
            "extra": "mean: 29.36700300594739 usec\nrounds: 6654"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 236.14381471993178,
            "unit": "iter/sec",
            "range": "stddev: 0.000013879914959218904",
            "extra": "mean: 4.234707570833507 msec\nrounds: 240"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 114.46108174430864,
            "unit": "iter/sec",
            "range": "stddev: 0.00002351856714545334",
            "extra": "mean: 8.736593999992692 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 111.25620236205111,
            "unit": "iter/sec",
            "range": "stddev: 0.000019017749371937774",
            "extra": "mean: 8.988262935182611 msec\nrounds: 108"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 112.23925101684678,
            "unit": "iter/sec",
            "range": "stddev: 0.00003170182369151014",
            "extra": "mean: 8.909539140188159 msec\nrounds: 107"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 236.19670290485925,
            "unit": "iter/sec",
            "range": "stddev: 0.000012862789799910127",
            "extra": "mean: 4.233759352698514 msec\nrounds: 241"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 235.65420380713857,
            "unit": "iter/sec",
            "range": "stddev: 0.000048468913525301714",
            "extra": "mean: 4.243505882111947 msec\nrounds: 246"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 234.90253956912682,
            "unit": "iter/sec",
            "range": "stddev: 0.00004954924509255447",
            "extra": "mean: 4.257084669387839 msec\nrounds: 245"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 235.1455249394141,
            "unit": "iter/sec",
            "range": "stddev: 0.00001880104049669926",
            "extra": "mean: 4.252685651822006 msec\nrounds: 247"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 458.79904540461314,
            "unit": "iter/sec",
            "range": "stddev: 0.000011667802395894988",
            "extra": "mean: 2.1796034887520395 msec\nrounds: 489"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 41.920681157341974,
            "unit": "iter/sec",
            "range": "stddev: 0.0006226874734607413",
            "extra": "mean: 23.85457421950455 msec\nrounds: 41"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 315.8791766611624,
            "unit": "iter/sec",
            "range": "stddev: 0.000013727416660672021",
            "extra": "mean: 3.1657674005927943 msec\nrounds: 337"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 154.89039336200582,
            "unit": "iter/sec",
            "range": "stddev: 0.0003366086760217401",
            "extra": "mean: 6.456178322582123 msec\nrounds: 124"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 27.53726457709023,
            "unit": "iter/sec",
            "range": "stddev: 0.0012790942345298549",
            "extra": "mean: 36.314427571428254 msec\nrounds: 28"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 317.45055879496795,
            "unit": "iter/sec",
            "range": "stddev: 0.000013598993092642503",
            "extra": "mean: 3.150096833333568 msec\nrounds: 342"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 29419.51643203292,
            "unit": "iter/sec",
            "range": "stddev: 9.07444771707383e-7",
            "extra": "mean: 33.99104136569586 usec\nrounds: 23256"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 46379.1300721225,
            "unit": "iter/sec",
            "range": "stddev: 8.369329530796392e-7",
            "extra": "mean: 21.561422097502398 usec\nrounds: 15314"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "panahiparham@gmail.com",
            "name": "Parham",
            "username": "panahiparham"
          },
          "committer": {
            "email": "andnpatterson@gmail.com",
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "978b1b2ff6e32c0843b77aa221e64c9dd819fc31",
          "message": "fix: custom getter/setter for checkpointer",
          "timestamp": "2024-02-20T21:17:43-07:00",
          "tree_id": "4dedba988c3453ecf55bc0d44c13c06770e5f6d1",
          "url": "https://github.com/andnp/ReplayTables/commit/978b1b2ff6e32c0843b77aa221e64c9dd819fc31"
        },
        "date": 1708489239017,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 28696.520171374563,
            "unit": "iter/sec",
            "range": "stddev: 0.000005279075682733581",
            "extra": "mean: 34.84743076958589 usec\nrounds: 325"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 19297.458165671367,
            "unit": "iter/sec",
            "range": "stddev: 0.00000402385404708338",
            "extra": "mean: 51.82029630093563 usec\nrounds: 7867"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 98708.72040529094,
            "unit": "iter/sec",
            "range": "stddev: 0.00020380309918477496",
            "extra": "mean: 10.130817174957507 usec\nrounds: 16658"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 44560.82697006828,
            "unit": "iter/sec",
            "range": "stddev: 0.000002018663873294285",
            "extra": "mean: 22.44123522823544 usec\nrounds: 8919"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 282.81929663519895,
            "unit": "iter/sec",
            "range": "stddev: 0.00004265474822696154",
            "extra": "mean: 3.5358266281592283 msec\nrounds: 277"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 125.35655478273739,
            "unit": "iter/sec",
            "range": "stddev: 0.00004083220582366561",
            "extra": "mean: 7.977245399996492 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 128.0820551597233,
            "unit": "iter/sec",
            "range": "stddev: 0.00005909850457343378",
            "extra": "mean: 7.807494959016398 msec\nrounds: 122"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 126.52757545824934,
            "unit": "iter/sec",
            "range": "stddev: 0.00005562025065533542",
            "extra": "mean: 7.903415491668635 msec\nrounds: 120"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 280.8089586603301,
            "unit": "iter/sec",
            "range": "stddev: 0.000031356823734821343",
            "extra": "mean: 3.561139946427464 msec\nrounds: 280"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 279.69972719821914,
            "unit": "iter/sec",
            "range": "stddev: 0.0002680960373837793",
            "extra": "mean: 3.575262693378727 msec\nrounds: 287"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 281.0179908246192,
            "unit": "iter/sec",
            "range": "stddev: 0.000039213116985099625",
            "extra": "mean: 3.558491031359238 msec\nrounds: 287"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 282.7187683897914,
            "unit": "iter/sec",
            "range": "stddev: 0.000042150172608216526",
            "extra": "mean: 3.537083886207636 msec\nrounds: 290"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 578.9101452790838,
            "unit": "iter/sec",
            "range": "stddev: 0.00006923642721118956",
            "extra": "mean: 1.7273837885807222 msec\nrounds: 648"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 48.28669177101406,
            "unit": "iter/sec",
            "range": "stddev: 0.0003617576983919532",
            "extra": "mean: 20.70963993023619 msec\nrounds: 43"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 425.04085864765676,
            "unit": "iter/sec",
            "range": "stddev: 0.00022163579641341886",
            "extra": "mean: 2.352714991169739 msec\nrounds: 453"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 204.52485768922926,
            "unit": "iter/sec",
            "range": "stddev: 0.00007069810483632198",
            "extra": "mean: 4.889381228757419 msec\nrounds: 153"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 28.31948307654523,
            "unit": "iter/sec",
            "range": "stddev: 0.01250865999970391",
            "extra": "mean: 35.3113790000009 msec\nrounds: 30"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 420.3566380610989,
            "unit": "iter/sec",
            "range": "stddev: 0.00002670101656248557",
            "extra": "mean: 2.378932338531668 msec\nrounds: 449"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 84838.12906477276,
            "unit": "iter/sec",
            "range": "stddev: 6.383471642999239e-7",
            "extra": "mean: 11.787152911357978 usec\nrounds: 51932"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 62584.64494738794,
            "unit": "iter/sec",
            "range": "stddev: 0.000001060541240496223",
            "extra": "mean: 15.978360200663507 usec\nrounds: 22940"
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
            "email": "andnpatterson@gmail.com",
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "5733c03ff8738f3d632fcb53c44e9a3f59468bba",
          "message": "feat: add without replacmement sampling for all buffers",
          "timestamp": "2024-02-21T08:57:13-07:00",
          "tree_id": "0abcd2848e755157f55e163f1140d400a1ee65e4",
          "url": "https://github.com/andnp/ReplayTables/commit/5733c03ff8738f3d632fcb53c44e9a3f59468bba"
        },
        "date": 1708531212096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 28615.85934948549,
            "unit": "iter/sec",
            "range": "stddev: 0.000004224310895612351",
            "extra": "mean: 34.94565680474593 usec\nrounds: 338"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 19590.404337284846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035699779789586724",
            "extra": "mean: 51.045398695359246 usec\nrounds: 7818"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 106373.98107844178,
            "unit": "iter/sec",
            "range": "stddev: 0.0001452612258969967",
            "extra": "mean: 9.40079509915667 usec\nrounds: 18099"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 48299.0374616293,
            "unit": "iter/sec",
            "range": "stddev: 0.000002157717017729326",
            "extra": "mean: 20.704346350472107 usec\nrounds: 8809"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 277.60067844703445,
            "unit": "iter/sec",
            "range": "stddev: 0.000040955075230774474",
            "extra": "mean: 3.602296671586837 msec\nrounds: 271"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 124.78068546727708,
            "unit": "iter/sec",
            "range": "stddev: 0.000030240017556157034",
            "extra": "mean: 8.014060799996514 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 126.5299582557539,
            "unit": "iter/sec",
            "range": "stddev: 0.000060515605663240487",
            "extra": "mean: 7.903266655464384 msec\nrounds: 119"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 125.25182087339465,
            "unit": "iter/sec",
            "range": "stddev: 0.00005676544614420047",
            "extra": "mean: 7.983915866666773 msec\nrounds: 120"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 279.3190050820801,
            "unit": "iter/sec",
            "range": "stddev: 0.000056281282907757895",
            "extra": "mean: 3.5801359084253583 msec\nrounds: 273"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 279.4428636246482,
            "unit": "iter/sec",
            "range": "stddev: 0.0003927666745174522",
            "extra": "mean: 3.57854907092283 msec\nrounds: 282"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 279.4861522486524,
            "unit": "iter/sec",
            "range": "stddev: 0.00004166377259927957",
            "extra": "mean: 3.5779948020835146 msec\nrounds: 288"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 277.9548808111791,
            "unit": "iter/sec",
            "range": "stddev: 0.00004118944211720823",
            "extra": "mean: 3.5977062071427417 msec\nrounds: 280"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 579.615817109015,
            "unit": "iter/sec",
            "range": "stddev: 0.000014558456393095459",
            "extra": "mean: 1.7252807298940889 msec\nrounds: 659"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 44.33796042810353,
            "unit": "iter/sec",
            "range": "stddev: 0.009877670692711985",
            "extra": "mean: 22.55403700000039 msec\nrounds: 47"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 423.16295845616725,
            "unit": "iter/sec",
            "range": "stddev: 0.000022535739018518405",
            "extra": "mean: 2.363155800895989 msec\nrounds: 447"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 227.56841546770838,
            "unit": "iter/sec",
            "range": "stddev: 0.00011057236882848468",
            "extra": "mean: 4.394282914633637 msec\nrounds: 164"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 30.784639033611885,
            "unit": "iter/sec",
            "range": "stddev: 0.0006648370127122435",
            "extra": "mean: 32.483733166666674 msec\nrounds: 30"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 427.0775237604585,
            "unit": "iter/sec",
            "range": "stddev: 0.0001224871935072054",
            "extra": "mean: 2.341495265765578 msec\nrounds: 444"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 84372.72867672466,
            "unit": "iter/sec",
            "range": "stddev: 6.511086438855215e-7",
            "extra": "mean: 11.852170905026844 usec\nrounds: 55054"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 62624.649495583595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011270323737957089",
            "extra": "mean: 15.968153244043656 usec\nrounds: 19805"
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
            "email": "andnpatterson@gmail.com",
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "f780363be67885cb9fea868cc5ecac11b1dda5e4",
          "message": "feat: add stratified sampling to most buffers",
          "timestamp": "2024-02-21T22:04:40-07:00",
          "tree_id": "1728818c3cb4321a3298384d7f0c0a2cc2c413fc",
          "url": "https://github.com/andnp/ReplayTables/commit/f780363be67885cb9fea868cc5ecac11b1dda5e4"
        },
        "date": 1708578453268,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 28538.461358989967,
            "unit": "iter/sec",
            "range": "stddev: 0.000004743332740362364",
            "extra": "mean: 35.04043148720727 usec\nrounds: 343"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 19889.50398913413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029331723046896344",
            "extra": "mean: 50.27777467685026 usec\nrounds: 8277"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 103633.50719855608,
            "unit": "iter/sec",
            "range": "stddev: 0.0001723825358627966",
            "extra": "mean: 9.649388764620841 usec\nrounds: 18780"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 50107.992977533926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016760689625368558",
            "extra": "mean: 19.956895907771703 usec\nrounds: 9799"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 283.445093272669,
            "unit": "iter/sec",
            "range": "stddev: 0.0001212275237779275",
            "extra": "mean: 3.528020148290301 msec\nrounds: 263"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 124.7319043630258,
            "unit": "iter/sec",
            "range": "stddev: 0.00010216899842812227",
            "extra": "mean: 8.017195000002175 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 127.34354288405281,
            "unit": "iter/sec",
            "range": "stddev: 0.00010557180449976147",
            "extra": "mean: 7.852773508198268 msec\nrounds: 122"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 128.66924258024713,
            "unit": "iter/sec",
            "range": "stddev: 0.00005622056044896222",
            "extra": "mean: 7.771865132231038 msec\nrounds: 121"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 284.4683130255616,
            "unit": "iter/sec",
            "range": "stddev: 0.00004906368222178068",
            "extra": "mean: 3.5153300181807685 msec\nrounds: 275"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 285.4160192968356,
            "unit": "iter/sec",
            "range": "stddev: 0.0001281622709028491",
            "extra": "mean: 3.5036575818822198 msec\nrounds: 287"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 285.4723560630154,
            "unit": "iter/sec",
            "range": "stddev: 0.00004337835329873241",
            "extra": "mean: 3.502966149826637 msec\nrounds: 287"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 284.0061487331546,
            "unit": "iter/sec",
            "range": "stddev: 0.00011777439950163486",
            "extra": "mean: 3.521050528168586 msec\nrounds: 284"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 575.5434317554091,
            "unit": "iter/sec",
            "range": "stddev: 0.00006127125403956256",
            "extra": "mean: 1.7374883368054386 msec\nrounds: 576"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 44.9382927305632,
            "unit": "iter/sec",
            "range": "stddev: 0.00858972331075332",
            "extra": "mean: 22.252736791664656 msec\nrounds: 48"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 421.68335230644817,
            "unit": "iter/sec",
            "range": "stddev: 0.00009232792311673527",
            "extra": "mean: 2.3714476621625655 msec\nrounds: 444"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 229.94941670654302,
            "unit": "iter/sec",
            "range": "stddev: 0.00008590664613557813",
            "extra": "mean: 4.3487825032240925 msec\nrounds: 155"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 31.063693878067394,
            "unit": "iter/sec",
            "range": "stddev: 0.0005106538953715505",
            "extra": "mean: 32.19192166666478 msec\nrounds: 30"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 424.05892420431906,
            "unit": "iter/sec",
            "range": "stddev: 0.00001782405570769057",
            "extra": "mean: 2.358162847006098 msec\nrounds: 451"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 83805.65629684793,
            "unit": "iter/sec",
            "range": "stddev: 6.467803369205803e-7",
            "extra": "mean: 11.932368818375469 usec\nrounds: 50209"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 61188.983184721925,
            "unit": "iter/sec",
            "range": "stddev: 0.000001174879030320744",
            "extra": "mean: 16.342811204773977 usec\nrounds: 22919"
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
            "email": "andnpatterson@gmail.com",
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "83841cfc5bd21e73cf379d54282c78736926d1ad",
          "message": "ci: run flake8 during pr tests",
          "timestamp": "2024-02-23T16:59:53-07:00",
          "tree_id": "3d05ceab25322323c6c34cbf175c4e0e41048b92",
          "url": "https://github.com/andnp/ReplayTables/commit/83841cfc5bd21e73cf379d54282c78736926d1ad"
        },
        "date": 1708732967749,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 28004.151355165566,
            "unit": "iter/sec",
            "range": "stddev: 0.000004708443841027103",
            "extra": "mean: 35.70899140336002 usec\nrounds: 349"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 19654.751088386165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037702073056751675",
            "extra": "mean: 50.8782836019171 usec\nrounds: 8251"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 100647.5614657303,
            "unit": "iter/sec",
            "range": "stddev: 0.0001807044849435467",
            "extra": "mean: 9.9356604912926 usec\nrounds: 17057"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 48392.633697152276,
            "unit": "iter/sec",
            "range": "stddev: 0.000001839630917603401",
            "extra": "mean: 20.664302055931422 usec\nrounds: 9144"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 281.8035013077688,
            "unit": "iter/sec",
            "range": "stddev: 0.00004163828211047644",
            "extra": "mean: 3.548571949458713 msec\nrounds: 277"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 127.230658802099,
            "unit": "iter/sec",
            "range": "stddev: 0.0000371732074462576",
            "extra": "mean: 7.859740800017788 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 128.09385771458562,
            "unit": "iter/sec",
            "range": "stddev: 0.00010934671928460974",
            "extra": "mean: 7.806775577234672 msec\nrounds: 123"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 128.42011762996242,
            "unit": "iter/sec",
            "range": "stddev: 0.00026867079761668623",
            "extra": "mean: 7.786941940681453 msec\nrounds: 118"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 283.82596233554614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000448290339289755",
            "extra": "mean: 3.523285860712682 msec\nrounds: 280"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 282.861560371581,
            "unit": "iter/sec",
            "range": "stddev: 0.00004427613078822346",
            "extra": "mean: 3.5352983229193473 msec\nrounds: 288"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 281.1408920372955,
            "unit": "iter/sec",
            "range": "stddev: 0.00011413042619545562",
            "extra": "mean: 3.556935431034139 msec\nrounds: 290"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 284.7259343913539,
            "unit": "iter/sec",
            "range": "stddev: 0.00007012200319166445",
            "extra": "mean: 3.5121493310318077 msec\nrounds: 290"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 577.5742337161893,
            "unit": "iter/sec",
            "range": "stddev: 0.00009545217998845735",
            "extra": "mean: 1.7313791745276916 msec\nrounds: 636"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 47.09328586900728,
            "unit": "iter/sec",
            "range": "stddev: 0.00021144461121782505",
            "extra": "mean: 21.234449487800838 msec\nrounds: 41"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 425.68524994543344,
            "unit": "iter/sec",
            "range": "stddev: 0.000019644537717397752",
            "extra": "mean: 2.3491535121975335 msec\nrounds: 451"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 203.80723481342568,
            "unit": "iter/sec",
            "range": "stddev: 0.00007991406743364025",
            "extra": "mean: 4.90659716234041 msec\nrounds: 154"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 29.3186734623524,
            "unit": "iter/sec",
            "range": "stddev: 0.0037021177673657005",
            "extra": "mean: 34.10795516666477 msec\nrounds: 30"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 429.40338790702526,
            "unit": "iter/sec",
            "range": "stddev: 0.00009726006850297287",
            "extra": "mean: 2.328812552863511 msec\nrounds: 454"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 84305.05820576253,
            "unit": "iter/sec",
            "range": "stddev: 9.622842490528773e-7",
            "extra": "mean: 11.861684474012339 usec\nrounds: 55146"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 64002.292735170144,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011875248165045905",
            "extra": "mean: 15.624440270254354 usec\nrounds: 23079"
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
            "email": "andnpatterson@gmail.com",
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "5c2981955df6da6720b2952b0d53ec74b0317097",
          "message": "perf: migrate refcount to rust",
          "timestamp": "2024-02-24T12:58:42-07:00",
          "tree_id": "c7949a9dc3cb2ab2a6e99689452a1d9f703a83d9",
          "url": "https://github.com/andnp/ReplayTables/commit/5c2981955df6da6720b2952b0d53ec74b0317097"
        },
        "date": 1708804918432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 29841.608608764614,
            "unit": "iter/sec",
            "range": "stddev: 0.000004005128275291245",
            "extra": "mean: 33.51025787886969 usec\nrounds: 349"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 19531.863444663173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034838008620744927",
            "extra": "mean: 51.19839194212865 usec\nrounds: 6751"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 126431.03703902163,
            "unit": "iter/sec",
            "range": "stddev: 0.000002344745593059419",
            "extra": "mean: 7.909450269646689 usec\nrounds: 12608"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 44633.75277004735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018446484605485634",
            "extra": "mean: 22.404569141922483 usec\nrounds: 9372"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 293.1484350232159,
            "unit": "iter/sec",
            "range": "stddev: 0.00015670550734425082",
            "extra": "mean: 3.4112411342765827 msec\nrounds: 283"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 128.46989477572131,
            "unit": "iter/sec",
            "range": "stddev: 0.00007267087172008156",
            "extra": "mean: 7.783924800014574 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 129.26360486384857,
            "unit": "iter/sec",
            "range": "stddev: 0.00025645703368779076",
            "extra": "mean: 7.7361296016251835 msec\nrounds: 123"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 128.96376678661858,
            "unit": "iter/sec",
            "range": "stddev: 0.00009599476334001507",
            "extra": "mean: 7.754115942151288 msec\nrounds: 121"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 296.9756957966432,
            "unit": "iter/sec",
            "range": "stddev: 0.00009810953543603513",
            "extra": "mean: 3.367278919298362 msec\nrounds: 285"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 295.1862282926375,
            "unit": "iter/sec",
            "range": "stddev: 0.0001649707214228887",
            "extra": "mean: 3.3876919183663077 msec\nrounds: 294"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 294.3975836514237,
            "unit": "iter/sec",
            "range": "stddev: 0.00011379836588386815",
            "extra": "mean: 3.396767010098943 msec\nrounds: 297"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 294.83625336059265,
            "unit": "iter/sec",
            "range": "stddev: 0.00011241839234567833",
            "extra": "mean: 3.3917131580727733 msec\nrounds: 291"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 621.9135550353608,
            "unit": "iter/sec",
            "range": "stddev: 0.000021525573386630322",
            "extra": "mean: 1.6079405118339027 msec\nrounds: 676"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 43.247405280022484,
            "unit": "iter/sec",
            "range": "stddev: 0.012974076785654",
            "extra": "mean: 23.1227744999984 msec\nrounds: 40"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 442.0854376027278,
            "unit": "iter/sec",
            "range": "stddev: 0.00005989052121833557",
            "extra": "mean: 2.2620061982196127 msec\nrounds: 449"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 206.98321137731992,
            "unit": "iter/sec",
            "range": "stddev: 0.00009022524402650797",
            "extra": "mean: 4.831309715149073 msec\nrounds: 165"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 30.049566604686476,
            "unit": "iter/sec",
            "range": "stddev: 0.0003160843218004652",
            "extra": "mean: 33.27835017241286 msec\nrounds: 29"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 445.8463633087364,
            "unit": "iter/sec",
            "range": "stddev: 0.00009049533925100677",
            "extra": "mean: 2.2429251022229995 msec\nrounds: 450"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 84629.44447328405,
            "unit": "iter/sec",
            "range": "stddev: 7.686267115178609e-7",
            "extra": "mean: 11.816218412206187 usec\nrounds: 53747"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 60844.5015250728,
            "unit": "iter/sec",
            "range": "stddev: 0.000001258924452258588",
            "extra": "mean: 16.43533885453758 usec\nrounds: 21071"
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
            "email": "andnpatterson@gmail.com",
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "82577da89c7e00375865a868a91729d4bef59efd",
          "message": "perf: convert metadatastorage to rust",
          "timestamp": "2024-02-24T22:45:54-07:00",
          "tree_id": "c551466c0209464917cd5236ce9636b3aec67089",
          "url": "https://github.com/andnp/ReplayTables/commit/82577da89c7e00375865a868a91729d4bef59efd"
        },
        "date": 1708840147842,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 33631.83971413296,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031409756403853397",
            "extra": "mean: 29.733728767141283 usec\nrounds: 365"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 19593.854715372207,
            "unit": "iter/sec",
            "range": "stddev: 0.000010279841720148928",
            "extra": "mean: 51.036409860457816 usec\nrounds: 8559"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 151274.33941282282,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027422549256165454",
            "extra": "mean: 6.6105064737452395 usec\nrounds: 19695"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 52536.68536625838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018356028310583613",
            "extra": "mean: 19.034318458207277 usec\nrounds: 8560"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 328.64842587270834,
            "unit": "iter/sec",
            "range": "stddev: 0.00003629992701912547",
            "extra": "mean: 3.0427652204466016 msec\nrounds: 313"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 137.66122986487215,
            "unit": "iter/sec",
            "range": "stddev: 0.000025843151329356926",
            "extra": "mean: 7.264209400000254 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 134.94757884183656,
            "unit": "iter/sec",
            "range": "stddev: 0.00006399928217179626",
            "extra": "mean: 7.410284857144685 msec\nrounds: 126"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 131.22358843994155,
            "unit": "iter/sec",
            "range": "stddev: 0.0001763151644470783",
            "extra": "mean: 7.620581115701468 msec\nrounds: 121"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 325.66738013185346,
            "unit": "iter/sec",
            "range": "stddev: 0.0001333697337094874",
            "extra": "mean: 3.070617633227892 msec\nrounds: 319"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 330.1485225272183,
            "unit": "iter/sec",
            "range": "stddev: 0.0001152629718582968",
            "extra": "mean: 3.028939800624301 msec\nrounds: 321"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 329.1633648356732,
            "unit": "iter/sec",
            "range": "stddev: 0.00004128525670290088",
            "extra": "mean: 3.0380051574063405 msec\nrounds: 324"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 318.1837615551691,
            "unit": "iter/sec",
            "range": "stddev: 0.0006313861722724619",
            "extra": "mean: 3.14283794720496 msec\nrounds: 322"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 792.5174962146758,
            "unit": "iter/sec",
            "range": "stddev: 0.000057273185587207486",
            "extra": "mean: 1.261801795892619 msec\nrounds: 779"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 46.48100375712573,
            "unit": "iter/sec",
            "range": "stddev: 0.008910237874575847",
            "extra": "mean: 21.514165340000773 msec\nrounds: 50"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 540.2761209233649,
            "unit": "iter/sec",
            "range": "stddev: 0.00008237419470630561",
            "extra": "mean: 1.8509054190493164 msec\nrounds: 525"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 228.90257610419104,
            "unit": "iter/sec",
            "range": "stddev: 0.00006166008412063845",
            "extra": "mean: 4.368670798815404 msec\nrounds: 169"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 31.414096985683397,
            "unit": "iter/sec",
            "range": "stddev: 0.0005084219016637561",
            "extra": "mean: 31.832842448272128 msec\nrounds: 29"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 546.2995913680232,
            "unit": "iter/sec",
            "range": "stddev: 0.00002327109058932435",
            "extra": "mean: 1.8304974336441238 msec\nrounds: 535"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 85184.0122271661,
            "unit": "iter/sec",
            "range": "stddev: 6.178833537684327e-7",
            "extra": "mean: 11.739292079049186 usec\nrounds: 55146"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 62952.50387806402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011291392247620509",
            "extra": "mean: 15.884991674627464 usec\nrounds: 23062"
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
            "email": "andnpatterson@gmail.com",
            "name": "Andy Patterson",
            "username": "andnp"
          },
          "distinct": true,
          "id": "db985d24d1b69ddce761034a8ba958953f4cac4e",
          "message": "ci: fix publishing workflow",
          "timestamp": "2024-02-24T23:10:16-07:00",
          "tree_id": "68d3a7c1d984741c94ad4bfd622a06f71c235125",
          "url": "https://github.com/andnp/ReplayTables/commit/db985d24d1b69ddce761034a8ba958953f4cac4e"
        },
        "date": 1708841621655,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_add",
            "value": 31933.826791827018,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058820941435349864",
            "extra": "mean: 31.314756183744784 usec\nrounds: 283"
          },
          {
            "name": "tests/test_PER.py::TestBenchmarks::test_per_sample",
            "value": 20130.05497201036,
            "unit": "iter/sec",
            "range": "stddev: 0.000004159304692099792",
            "extra": "mean: 49.67696319709212 usec\nrounds: 8070"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_add",
            "value": 148080.55305814728,
            "unit": "iter/sec",
            "range": "stddev: 0.000002690691790032367",
            "extra": "mean: 6.7530812071408635 usec\nrounds: 19832"
          },
          {
            "name": "tests/test_ReplayBuffer.py::TestBenchmarks::test_replay_buffer_sample",
            "value": 51953.173120325264,
            "unit": "iter/sec",
            "range": "stddev: 0.000001949578052720154",
            "extra": "mean: 19.248102472662584 usec\nrounds: 8695"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[ReplayBuffer]",
            "value": 328.8754430378666,
            "unit": "iter/sec",
            "range": "stddev: 0.00004339624971508035",
            "extra": "mean: 3.040664850993026 msec\nrounds: 302"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[BackwardsReplay]",
            "value": 136.43899410097285,
            "unit": "iter/sec",
            "range": "stddev: 0.000027807961887011986",
            "extra": "mean: 7.329282999990028 msec\nrounds: 5"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedReplay]",
            "value": 134.1860027560725,
            "unit": "iter/sec",
            "range": "stddev: 0.0002068670566733386",
            "extra": "mean: 7.452342118110718 msec\nrounds: 127"
          },
          {
            "name": "tests/test_integration.py::test_1_step_loop[PrioritizedSequenceReplay]",
            "value": 131.37645462398962,
            "unit": "iter/sec",
            "range": "stddev: 0.00021176279574411074",
            "extra": "mean: 7.611714008130936 msec\nrounds: 123"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[ReplayBuffer]",
            "value": 325.60824387304746,
            "unit": "iter/sec",
            "range": "stddev: 0.00003712951789149969",
            "extra": "mean: 3.071175312102643 msec\nrounds: 314"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[BackwardsReplay]",
            "value": 322.81394059998973,
            "unit": "iter/sec",
            "range": "stddev: 0.00011041400274941816",
            "extra": "mean: 3.0977596510899623 msec\nrounds: 321"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedReplay]",
            "value": 325.04602586724434,
            "unit": "iter/sec",
            "range": "stddev: 0.0000343854192588413",
            "extra": "mean: 3.076487390768534 msec\nrounds: 325"
          },
          {
            "name": "tests/test_integration.py::test_3_step_loop[PrioritizedSequenceReplay]",
            "value": 323.3486629441633,
            "unit": "iter/sec",
            "range": "stddev: 0.00011385875123528824",
            "extra": "mean: 3.0926368796294743 msec\nrounds: 324"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[BasicStorage]",
            "value": 782.6373325726656,
            "unit": "iter/sec",
            "range": "stddev: 0.00002727421947403883",
            "extra": "mean: 1.2777310235289 msec\nrounds: 765"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[CompressedStorage]",
            "value": 47.31254211117552,
            "unit": "iter/sec",
            "range": "stddev: 0.008282210929093441",
            "extra": "mean: 21.136044595747766 msec\nrounds: 47"
          },
          {
            "name": "tests/storage/test_Storage.py::test_small_data[NonArrayStorage]",
            "value": 542.953794260062,
            "unit": "iter/sec",
            "range": "stddev: 0.00008534869717916891",
            "extra": "mean: 1.8417773493282263 msec\nrounds: 521"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[BasicStorage]",
            "value": 222.78535690220582,
            "unit": "iter/sec",
            "range": "stddev: 0.00007038069407301586",
            "extra": "mean: 4.488625347306652 msec\nrounds: 167"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[CompressedStorage]",
            "value": 32.246966861736844,
            "unit": "iter/sec",
            "range": "stddev: 0.0005442052110305117",
            "extra": "mean: 31.010668516131545 msec\nrounds: 31"
          },
          {
            "name": "tests/storage/test_Storage.py::test_big_data[NonArrayStorage]",
            "value": 542.7248992761571,
            "unit": "iter/sec",
            "range": "stddev: 0.000020842002709264458",
            "extra": "mean: 1.8425541214963967 msec\nrounds: 535"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_update",
            "value": 83135.63778619352,
            "unit": "iter/sec",
            "range": "stddev: 7.11080735281572e-7",
            "extra": "mean: 12.028535855727467 usec\nrounds: 55054"
          },
          {
            "name": "tests/utils/test_SumTree.py::TestBenchmarks::test_sumtree_sample",
            "value": 62547.465663135496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013257049558527434",
            "extra": "mean: 15.987858011477904 usec\nrounds: 24340"
          }
        ]
      }
    ]
  }
}