"""
=====================================================================
Rabin-Karp — поиск подстроки через rolling hash
---------------------------------------------------------------------
Time: O(n + m) avg, O(n*m) worst
=====================================================================
"""
from typing import List

BASE = 256
MOD = 1_000_000_007


def rabin_karp(text: str, pattern: str) -> List[int]:
    n, m = len(text), len(pattern)
    if m > n:
        return []
    if m == 0:
        return [0]

    high_pow = pow(BASE, m - 1, MOD)

    pattern_hash = 0
    window_hash = 0
    for i in range(m):
        pattern_hash = (pattern_hash * BASE + ord(pattern[i])) % MOD
        window_hash = (window_hash * BASE + ord(text[i])) % MOD

    matches = []
    for i in range(n - m + 1):
        if window_hash == pattern_hash and text[i:i + m] == pattern:
            matches.append(i)

        if i < n - m:
            window_hash = (
                BASE * (window_hash - ord(text[i]) * high_pow)
                + ord(text[i + m])
            ) % MOD

    return matches


if __name__ == "__main__":
    print(rabin_karp("GEEKS FOR GEEKS", "GEEK"))  # [0, 10]
    print(rabin_karp("AAAAA", "AA"))              # [0, 1, 2, 3]
