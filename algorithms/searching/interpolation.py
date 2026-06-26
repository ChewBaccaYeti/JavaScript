"""
=====================================================================
Interpolation Search / Интерполяционный поиск
---------------------------------------------------------------------
Time:  O(log log n) на равномерных данных, O(n) worst
Space: O(1)
=====================================================================
"""
from typing import List


def interpolation_search(arr: List[int], target: int) -> int:
    lo, hi = 0, len(arr) - 1

    while lo <= hi and arr[lo] <= target <= arr[hi]:
        if arr[lo] == arr[hi]:
            return lo if arr[lo] == target else -1

        pos = lo + ((target - arr[lo]) * (hi - lo)) // (arr[hi] - arr[lo])

        if arr[pos] == target:
            return pos
        if arr[pos] < target:
            lo = pos + 1
        else:
            hi = pos - 1

    return -1


if __name__ == "__main__":
    print(interpolation_search([10, 20, 30, 40, 50, 60, 70, 80, 90], 70))  # 6
