"""
=====================================================================
Selection Sort / Сортировка выбором
---------------------------------------------------------------------
Идея: ищем минимум в "хвосте" и ставим в начало. Граница отсортированной
      части растёт слева направо.
Time:  O(n²) во всех случаях
Space: O(1)
Stable: no
In-place: yes
=====================================================================
"""
from typing import List


def selection_sort(arr: List[int]) -> List[int]:
    n = len(arr)

    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j

        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]

    return arr


if __name__ == "__main__":
    print(selection_sort([64, 25, 12, 22, 11]))  # [11, 12, 22, 25, 64]
