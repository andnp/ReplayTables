import logging
import warnings
import numpy as np
import numpy.typing as npt
from typing import Any, Callable, TypeVar, Protocol, cast
from numba.core.errors import NumbaPendingDeprecationWarning

_has_warned = False
T = TypeVar('T', bound=Callable[..., Any])

warnings.simplefilter('ignore', category=NumbaPendingDeprecationWarning)

def try2jit(fastmath: bool = True, inline: Any = 'never'):
    def _inner(f: T) -> T:
        try:
            from numba import njit
            return njit(f, cache=True, nogil=True, fastmath=fastmath, inline=inline)
        except Exception:
            global _has_warned
            if not _has_warned:
                _has_warned = True
                logging.getLogger('replaytables').warn('Could not jit compile --- expect slow performance')

            return f

    return _inner


class Vectorized(Protocol):
    def __call__(self, *args: npt.ArrayLike) -> np.ndarray:
        ...

def try2vectorize(f: Any) -> Vectorized:
    try:
        from numba import vectorize
        return vectorize(f, cache=True)

    except Exception as e:
        logging.getLogger('replaytables').error(e)
        global _has_warned
        if not _has_warned:
            _has_warned = True
            logging.getLogger('replaytables').warn('Could not jit compile --- expect slow performance')

        def _inner(arr, *args, **kwargs):
            out = []
            for v in arr:
                out.append(f(v, *args, **kwargs))

            return out

        return cast(Any, _inner)
