# replaytables

[Benchmarks](https://andnp.github.io/replaytables/dev/bench/)

## Getting started

Installation:
```bash
pip install replaytables
```

Basic usage:
```python
from typing import NamedTuple
from replaytables.ReplayBuffer import ReplayBuffer

class Data(NamedTuple):
    x: np.ndarray
    a: np.ndarray
    r: np.ndarray

buffer = ReplayBuffer(
    max_size=100_000,
    structure=Data,
    rng=np.random.default_rng(0),
)

buffer.add(Data(x, a, r))

batch = buffer.sample(32)
print(batch.x.shape) # -> (32, d)
print(batch.a.shape) # -> (32, )
print(batch.r.shape) # -> (32, )
```

## Prioritized Replay
An implementation of prioritized experience replay from
> Schaul, Tom, et al. "Prioritized experience replay." ICLR (2016).

The defaults for this implementation strictly adhere to the defaults from the original work, though several configuration options are available.

```python
from typing import NamedTuple
from replaytables.PER import PERConfig, PrioritizedReplay

class Data(NamedTuple):
    a: float
    b: float

# all configurables are optional.
config = PERConfig(
    # can also use "mean" mode to place new samples in the middle of the distribution
    # or "given" mode, which requires giving the priority when the sample is added
    new_priority_mode='max',
    # the sampling distribution is a mixture between uniform sampling and the priority
    # distribution. This specifies the weight given to the uniform sampler.
    # Setting to 1 reverts this back to an inefficient form of standard uniform replay.
    uniform_probability=1e-3,
    # this implementation assume priorities are positive. Can scale priorities by raising to
    # some power. Default is `priority**(1/2)`
    priority_exponent=0.5,
    # if `new_priority_mode` is 'max', then the buffer tracks the highest seen priority.
    # this can cause accidental saturation if outlier priorities are observed. This provides
    # an exponential decay of the max in order to prevent permanent saturation.
    max_decay=1,
)

# if no config is given, defaults to original PER parameters
buffer = PrioritizedReplay(
    max_size=100_000,
    structure=Data,
    rng=np.random.default_rng(0),
    config=config,
)

buffer.add(Data(a=1, b=2))

# if `new_priority_mode` is 'given':
buffer.add(Data(a=1, b=2), priority=1.3)

batch = buffer.sample(32)
```
