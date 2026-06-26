"""
=====================================================================
Heap Sort / Пирамидальная сортировка
---------------------------------------------------------------------
Идея:
  1. Строим max-heap (O(n))
  2. Меняем корень с концом, уменьшаем размер, sift down (O(log n))
Time:  O(n log n)
Space: O(1)
Stable: no
In-place: yes

Куча в массиве. Для i:
  parent = (i - 1) // 2
  left   = 2*i + 1
  right  = 2*i + 2

Замечание: в реальности на Python используй heapq из stdlib.
=====================================================================
"""
from typing import List


def heap_sort(arr: List[int]) -> List[int]:
    n = len(arr)

    # 1. Build max-heap
    for i in range(n // 2 - 1, -1, -1):
        sift_down(arr, n, i)

    # 2. Извлечение
    for end in range(n - 1, 0, -1):
        arr[0], arr[end] = arr[end], arr[0]
        sift_down(arr, end, 0)

    return arr


def sift_down(arr: List[int], heap_size: int, i: int) -> None:
    while True:
        left = 2 * i + 1
        right = 2 * i + 2
        largest = i

        if left < heap_size and arr[left] > arr[largest]:
            largest = left
        if right < heap_size and arr[right] > arr[largest]:
            largest = right

        if largest == i:
            break

        arr[i], arr[largest] = arr[largest], arr[i]
        i = largest


if __name__ == "__main__":
    print(heap_sort([12, 11, 13, 5, 6, 7]))  # [5, 6, 7, 11, 12, 13]
