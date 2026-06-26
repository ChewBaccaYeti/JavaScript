"""
=====================================================================
Radix Sort (LSD) / Поразрядная сортировка
---------------------------------------------------------------------
Идея: сортируем по разрядам от младшего к старшему. На каждом разряде —
      стабильная сортировка (counting sort).
Time:  O(d · (n + k)), d = разряды, k = база
Space: O(n + k)
Stable: yes
In-place: no
Условие: неотрицательные целые.
=====================================================================
"""
from typing import List


def radix_sort(arr: List[int]) -> List[int]:
    if not arr:
        return arr

    max_num = max(arr)
    exp = 1
    while max_num // exp > 0:
        _counting_by_digit(arr, exp)
        exp *= 10

    return arr


def _counting_by_digit(arr: List[int], exp: int) -> None:
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for num in arr:
        digit = (num // exp) % 10
        count[digit] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    # С конца для стабильности
    for i in range(n - 1, -1, -1):
        digit = (arr[i] // exp) % 10
        count[digit] -= 1
        output[count[digit]] = arr[i]

    for i in range(n):
        arr[i] = output[i]


if __name__ == "__main__":
    print(radix_sort([170, 45, 75, 90, 802, 24, 2, 66]))
    # [2, 24, 45, 66, 75, 90, 170, 802]
