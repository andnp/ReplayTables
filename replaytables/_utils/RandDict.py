from typing import Dict, Generic, Union, TypeVar, MutableMapping

Key = Union[int, str]

T = TypeVar('T')
K = TypeVar('K', bound=Key)
class RandDict(MutableMapping[K, T], Generic[K, T]):
    def __init__(self) -> None:
        super().__init__()

        self._idx2key: Dict[int, K] = {}
        self._key2idx: Dict[K, int] = {}
        self._idx2val: Dict[int, T] = {}

        self._idx = 0

    def __setitem__(self, key: K, val: T):
        if key not in self._key2idx:
            self._key2idx[key] = self._idx
            self._idx2key[self._idx] = key
            self._idx += 1

        idx = self._key2idx[key]
        self._idx2val[idx] = val

    def __delitem__(self, key: K):
        if key not in self._key2idx:
            raise KeyError

        self._idx -= 1
        del_idx = self._key2idx[key]
        last_idx = self._idx

        last_key = self._idx2key[last_idx]
        last_val = self._idx2val[last_idx]

        self._key2idx[last_key] = del_idx
        self._idx2key[del_idx] = last_key
        self._idx2val[del_idx] = last_val

        del self._key2idx[key]
        del self._idx2key[last_idx]
        del self._idx2val[last_idx]

    def __getitem__(self, key: K):
        if key not in self._key2idx:
            raise KeyError

        idx = self._key2idx[key]
        return self._idx2val[idx]

    def __iter__(self):
        return iter(self._key2idx)

    def __len__(self):
        return self._idx

    # for fast random access
    def getIndex(self, idx: int):
        if idx not in self._idx2key:
            raise KeyError

        return self._idx2val[idx]

    def delIndex(self, idx: int):
        if idx not in self._idx2key:
            raise KeyError

        key = self._idx2key[idx]
        return self.__delitem__(key)
