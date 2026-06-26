"""
=====================================================================
Merge Sort / Сортировка слиянием
---------------------------------------------------------------------
Идея (divide & conquer):
  1. Делим массив пополам рекурсивно
  2. Сливаем два отсортированных массива в один
Time:  O(n log n) во всех случаях
Space: O(n)
Stable: yes
In-place: no
=====================================================================
"""
from typing import List


def merge_sort(arr: List[int]) -> List[int]:
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)


def merge(left: List[int], right: List[int]) -> List[int]:
    """Сливает два отсортированных списка. O(n + m)."""
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        # <= для стабильности
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # Хвосты
    result.extend(left[i:])
    result.extend(right[j:])
    return result


if __name__ == "__main__":
    print(merge_sort([38, 27, 43, 3, 9, 82, 10]))  # [3, 9, 10, 27, 38, 43, 82]
