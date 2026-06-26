"""
=====================================================================
Counting Sort / Сортировка подсчётом
---------------------------------------------------------------------
Идея: считаем частоты значений, восстанавливаем массив.
Time:  O(n + k), k = range
Space: O(k)
Stable: yes
In-place: no
Условие: целые в ограниченном диапазоне.
=====================================================================
"""
from typing import List


def counting_sort(arr: List[int]) -> List[int]:
    if not arr:
        return arr

    lo, hi = min(arr), max(arr)
    rng = hi - lo + 1

    # 1. Частоты
    count = [0] * rng
    for num in arr:
        count[num - lo] += 1

    # 2. Префиксные суммы — для стабильности
    for i in range(1, rng):
        count[i] += count[i - 1]

    # 3. Восстановление с конца (стабильность)
    output = [0] * len(arr)
    for num in reversed(arr):
        count[num - lo] -= 1
        output[count[num - lo]] = num

    return output


if __name__ == "__main__":
    print(counting_sort([4, 2, 2, 8, 3, 3, 1]))  # [1, 2, 2, 3, 3, 4, 8]
