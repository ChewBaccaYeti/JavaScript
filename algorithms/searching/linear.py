"""
=====================================================================
Linear Search / Линейный поиск
---------------------------------------------------------------------
Time:  O(n)
Space: O(1)
=====================================================================
"""
from typing import List


def linear_search(arr: List[int], target: int) -> int:
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1


if __name__ == "__main__":
    print(linear_search([10, 20, 30, 40], 30))  # 2
    print(linear_search([10, 20, 30, 40], 99))  # -1
