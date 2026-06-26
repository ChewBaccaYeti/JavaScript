// =====================================================================
// Exponential Search / Экспоненциальный поиск
// ---------------------------------------------------------------------
// Идея:
//   1. Удваиваем индекс (1, 2, 4, 8, ...) пока arr[i] < target
//   2. Когда перешагнули — бинарный поиск в окне [i/2, min(i, n-1)]
// Time:  O(log n)
// Space: O(1)
// Условие: отсортированный массив. Особенно полезно для
//          неограниченных/бесконечных списков (потоков).
// =====================================================================

function binarySearch(arr, target, lo, hi) {
    while (lo <= hi) {
        const mid = lo + Math.floor((hi - lo) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}

function exponentialSearch(arr, target) {
    const n = arr.length;
    if (n === 0) return -1;
    if (arr[0] === target) return 0;

    // 1. Удваиваем границу, пока arr[i] < target
    let i = 1;
    while (i < n && arr[i] < target) i *= 2;

    // 2. Бинарный поиск в окне [i/2 .. min(i, n-1)]
    return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, n - 1));
}

console.log(exponentialSearch([2, 3, 4, 10, 40], 10)); // 3

module.exports = exponentialSearch;
