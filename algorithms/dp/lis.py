"""
=====================================================================
LIS / Longest Increasing Subsequence
---------------------------------------------------------------------
Версии: O(n²) DP и O(n log n) patience sorting + binary search.
=====================================================================
"""
from bisect import bisect_left
from typing import List


def lis_quadratic(arr: List[int]) -> int:
    n = len(arr)
    if n == 0:
        return 0

    dp = [1] * n
    for i in range(1, n):
        for j in range(i):
            if arr[j] < arr[i]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)


def lis_fast(arr: List[int]) -> int:
    """O(n log n) — bisect_left заменяет ручной binary search."""
    tails = []
    for x in arr:
        idx = bisect_left(tails, x)
        if idx == len(tails):
            tails.append(x)
        else:
            tails[idx] = x
    return len(tails)


if __name__ == "__main__":
    print(lis_quadratic([10, 9, 2, 5, 3, 7, 101, 18]))  # 4
    print(lis_fast([10, 9, 2, 5, 3, 7, 101, 18]))       # 4
