// =====================================================================
// Quick Sort / Быстрая сортировка
// ---------------------------------------------------------------------
// Идея (divide & conquer):
//   1. Выбираем опорный (pivot)
//   2. Partition: элементы < pivot влево, >= вправо
//   3. Рекурсивно сортируем обе части
// Time:  O(n log n) avg, O(n²) worst (плохой pivot)
// Space: O(log n) avg на стек рекурсии
// Stable: no
// In-place: yes (Lomuto partition ниже)
// Совет: выбирай pivot случайно или медиану из трёх, чтобы избежать O(n²)
//        на отсортированных данных.
// =====================================================================

function quickSort(arr, lo = 0, hi = arr.length - 1) {
    if (lo < hi) {
        // p — финальная позиция pivot после partition
        const p = partition(arr, lo, hi);

        // Рекурсивно сортируем левую и правую части (без pivot)
        quickSort(arr, lo, p - 1);
        quickSort(arr, p + 1, hi);
    }
    return arr;
}

/**
 * Lomuto partition scheme.
 * Кладёт arr[hi] (pivot) на правильное место, возвращает его индекс.
 */
function partition(arr, lo, hi) {
    const pivot = arr[hi];
    let i = lo - 1; // граница "меньше pivot"

    for (let j = lo; j < hi; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Ставим pivot на свою позицию
    [arr[i + 1], arr[hi]] = [arr[hi], arr[i + 1]];
    return i + 1;
}

console.log(quickSort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]

module.exports = { quickSort, partition };
