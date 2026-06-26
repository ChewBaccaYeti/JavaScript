"""
=====================================================================
Binary Search / Бинарный поиск
---------------------------------------------------------------------
Time:  O(log n)
Space: O(1) iterative, O(log n) recursive
Условие: отсортированный массив
=====================================================================
Заметка: в реальности используй модуль bisect:
   bisect.bisect_left(arr, target)
   bisect.insort(arr, value)
"""
from typing import List


def binary_search(arr: List[int], target: int) -> int:
    lo, hi = 0, len(arr) - 1

    while lo <= hi:
        mid = lo + (hi - lo) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1

    return -1


def binary_search_recursive(arr: List[int], target: int, lo: int = 0, hi: int = None) -> int:
    if hi is None:
        hi = len(arr) - 1
    if lo > hi:
        return -1

    mid = lo + (hi - lo) // 2
    if arr[mid] == target:
        return mid
    if arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, hi)
    return binary_search_recursive(arr, target, lo, mid - 1)


if __name__ == "__main__":
    print(binary_search([1, 3, 5, 7, 9, 11], 7))  # 3
    print(binary_search([1, 3, 5, 7, 9, 11], 4))  # -1
