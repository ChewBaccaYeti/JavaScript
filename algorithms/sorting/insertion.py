"""
=====================================================================
Insertion Sort / Сортировка вставками
---------------------------------------------------------------------
Идея: как карты в руке — берём элемент и вставляем в правильное место
      отсортированной левой части.
Time:  O(n²) worst/avg, O(n) best
Space: O(1)
Stable: yes
In-place: yes
=====================================================================
"""
from typing import List


def insertion_sort(arr: List[int]) -> List[int]:
    for i in range(1, len(arr)):
        current = arr[i]
        j = i - 1

        # Сдвигаем большие элементы вправо
        while j >= 0 and arr[j] > current:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = current

    return arr


if __name__ == "__main__":
    print(insertion_sort([5, 2, 4, 6, 1, 3]))  # [1, 2, 3, 4, 5, 6]
