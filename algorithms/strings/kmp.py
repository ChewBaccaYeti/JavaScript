"""
=====================================================================
KMP / Knuth-Morris-Pratt
---------------------------------------------------------------------
Поиск подстроки за O(n + m). Использует LPS-таблицу.
=====================================================================
"""
from typing import List


def build_lps(pattern: str) -> List[int]:
    m = len(pattern)
    lps = [0] * m
    length = 0
    i = 1

    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length != 0:
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1

    return lps


def kmp_search(text: str, pattern: str) -> List[int]:
    if not pattern:
        return [0]

    lps = build_lps(pattern)
    matches = []
    i = j = 0

    while i < len(text):
        if text[i] == pattern[j]:
            i += 1
            j += 1
            if j == len(pattern):
                matches.append(i - j)
                j = lps[j - 1]
        elif j != 0:
            j = lps[j - 1]
        else:
            i += 1

    return matches


if __name__ == "__main__":
    print(build_lps("ABABAC"))                            # [0,0,1,2,3,0]
    print(kmp_search("ABABDABACDABABCABAB", "ABABC"))     # [10]
    print(kmp_search("AAAAAA", "AA"))                     # [0,1,2,3,4]
