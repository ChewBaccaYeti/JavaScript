"""
=====================================================================
Bubble Sort / Сортировка пузырьком
---------------------------------------------------------------------
Идея: на каждом проходе сравниваем соседние элементы и меняем местами,
      если они в неправильном порядке. Самый большой "всплывает" в конец.
Time:  O(n²) worst/avg, O(n) best (с флагом swapped)
Space: O(1)
Stable: yes
In-place: yes
=====================================================================
"""
from typing import List


def bubble_sort(arr: List[int]) -> List[int]:
    n = len(arr)

    # Внешний цикл: n-1 проходов
    for i in range(n - 1):
        # Флаг: если обменов не было — массив уже отсортирован
        swapped = False

        # До n-1-i: последние i элементов уже на местах
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                # Pythonic swap через tuple unpacking
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        # Ранний выход для почти отсортированных данных
        if not swapped:
            break

    return arr


# --- Пример ---
if __name__ == "__main__":
    print(bubble_sort([5, 2, 9, 1, 5, 6]))  # [1, 2, 5, 5, 6, 9]
    print(bubble_sort([]))                   # []
    print(bubble_sort([1]))                  # [1]
    print(bubble_sort([3, 3, 3]))            # [3, 3, 3]
