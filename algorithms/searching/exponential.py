"""
=====================================================================
Exponential Search / Экспоненциальный поиск
---------------------------------------------------------------------
Идея: удваиваем границу пока не перешагнули target, потом binary search
      в найденном окне.
Time:  O(log n)
Space: O(1)
Применение: неограниченные списки.
=====================================================================
"""
from typing import List


def _binary_search(arr: List[int], target: int, lo: int, hi: int) -> int:
    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1


def exponential_search(arr: List[int], target: int) -> int:
    n = len(arr)
    if n == 0:
        return -1
    if arr[0] == target:
        return 0

    i = 1
    while i < n and arr[i] < target:
        i *= 2

    return _binary_search(arr, target, i // 2, min(i, n - 1))


if __name__ == "__main__":
    print(exponential_search([2, 3, 4, 10, 40], 10))  # 3
