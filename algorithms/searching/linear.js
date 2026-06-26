// =====================================================================
// Linear Search / Линейный поиск
// ---------------------------------------------------------------------
// Идея: проходим массив с начала, сравниваем с целью.
// Time:  O(n) worst/avg, O(1) best
// Space: O(1)
// Условие: любой массив (не требует сортировки)
// =====================================================================

/**
 * @returns индекс target или -1
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

console.log(linearSearch([10, 20, 30, 40], 30)); // 2
console.log(linearSearch([10, 20, 30, 40], 99)); // -1

module.exports = linearSearch;
