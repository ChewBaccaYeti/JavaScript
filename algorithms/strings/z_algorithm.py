"""
=====================================================================
Z-algorithm
---------------------------------------------------------------------
Z[i] = длина max префикса s, совпадающего с s[i..].
Поиск подстроки через pattern + "$" + text за O(n+m).
=====================================================================
"""
from typing import List


def z_function(s: str) -> List[int]:
    n = len(s)
    z = [0] * n
    l = r = 0

    for i in range(1, n):
        if i < r:
            z[i] = min(r - i, z[i - l])
        while i + z[i] < n and s[z[i]] == s[i + z[i]]:
            z[i] += 1
        if i + z[i] > r:
            l, r = i, i + z[i]

    return z


def z_search(text: str, pattern: str) -> List[int]:
    combined = pattern + "$" + text
    z = z_function(combined)
    m = len(pattern)
    return [i - m - 1 for i in range(m + 1, len(combined)) if z[i] == m]


if __name__ == "__main__":
    print(z_function("aabcaab"))            # [0, 1, 0, 0, 3, 1, 0]
    print(z_search("aabaacaabaa", "aab"))   # [0, 5]
