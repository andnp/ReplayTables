import numpy as np
from ReplayTables._utils.SumTree import SumTree

w = np.ones(2) / 2
s = SumTree(10, 2)
s.st.update_single(0, 0, 3.0)
s.st.update_single(0, 1, 2.0)
s.st.update_single(0, 5, 1.0)
s.st.update_single(1, 8, 1.0)
print(s.st.total(w))
