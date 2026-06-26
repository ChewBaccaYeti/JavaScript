"""
=====================================================================
Jump Search / Прыжковый поиск
---------------------------------------------------------------------
Time:  O(√n)
Space: O(1)
Условие: отсортированный массив
=====================================================================
"""
import math
from typing import List


def jump_search(arr: List[int], target: int) -> int:
    n = len(arr)
    if n == 0:
        return -1

    step = int(math.sqrt(n))
    prev = 0
    curr = step

    while curr < n and arr[curr - 1] < target:
        prev = curr
        curr += step

    for i in range(prev, min(curr, n)):
        if arr[i] == target:
            return i

    return -1


if __name__ == "__main__":
    print(jump_search([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55], 13))  # 7
