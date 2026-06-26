// =====================================================================
// Binary Search / Бинарный (двоичный) поиск
// ---------------------------------------------------------------------
// Идея: на каждом шаге делим оставшийся диапазон пополам.
//       Сравниваем target со средним элементом.
// Time:  O(log n)
// Space: O(1) итеративно, O(log n) рекурсивно
// Условие: ОТСОРТИРОВАННЫЙ массив!
// Подводный камень: используй mid = lo + ((hi - lo) >> 1) для защиты от
//   переполнения в языках с фиксированным int. В JS числа float64, но
//   привычка полезная.
// =====================================================================

function binarySearch(arr, target) {
    let lo = 0;
    let hi = arr.length - 1;

    // <= потому что lo и hi — обе включены в диапазон поиска
    while (lo <= hi) {
        // Защита от переполнения в "правильных" языках
        const mid = lo + Math.floor((hi - lo) / 2);

        if (arr[mid] === target) return mid;
        if (arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return -1;
}

// Рекурсивная версия — для образования
function binarySearchRecursive(arr, target, lo = 0, hi = arr.length - 1) {
    if (lo > hi) return -1;

    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === target) return mid;

    return arr[mid] < target
        ? binarySearchRecursive(arr, target, mid + 1, hi)
        : binarySearchRecursive(arr, target, lo, mid - 1);
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // 3
console.log(binarySearch([1, 3, 5, 7, 9, 11], 4)); // -1

module.exports = { binarySearch, binarySearchRecursive };
