// =====================================================================
// Merge Sort / Сортировка слиянием
// ---------------------------------------------------------------------
// Идея (divide & conquer):
//   1. Делим массив пополам рекурсивно до массивов длины 1
//   2. Сливаем (merge) два отсортированных массива в один отсортированный
// Time:  O(n log n) во всех случаях
// Space: O(n) (вспомогательный массив)
// Stable: yes
// In-place: no
// Подходит для: больших данных, связанных списков, внешней сортировки.
// =====================================================================

function mergeSort(arr) {
    // Базовый случай: массив из 0 или 1 элемента уже отсортирован
    if (arr.length <= 1) return arr;

    // Делим пополам
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

/**
 * Сливает два отсортированных массива в один отсортированный.
 * Сложность O(n + m) — линейный проход по обоим.
 */
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    // Идём двумя указателями, берём меньший
    while (i < left.length && j < right.length) {
        // <= даёт стабильность: при равенстве берём элемент из левого
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    // Дописываем хвост (один из массивов уже исчерпан)
    // concat вернёт новый массив, spread тоже подойдёт
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]

module.exports = { mergeSort, merge };
