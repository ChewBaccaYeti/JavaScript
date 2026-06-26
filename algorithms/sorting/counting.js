// =====================================================================
// Counting Sort / Сортировка подсчётом
// ---------------------------------------------------------------------
// Идея: считаем количество вхождений каждого значения, потом
//       восстанавливаем отсортированный массив по этой статистике.
// Time:  O(n + k), где k — диапазон значений (max - min + 1)
// Space: O(k)
// Stable: yes (при правильной реализации с префиксными суммами)
// In-place: no
// Условие: целые числа в ограниченном диапазоне. На вещественных не работает.
// =====================================================================

function countingSort(arr) {
    if (arr.length === 0) return arr;

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const range = max - min + 1;

    // 1. Считаем частоты
    const count = new Array(range).fill(0);
    for (const num of arr) {
        count[num - min]++;
    }

    // 2. Префиксные суммы — это даёт стабильность.
    //    count[i] = индекс конца блока значения (i + min)
    for (let i = 1; i < range; i++) {
        count[i] += count[i - 1];
    }

    // 3. Восстановление. Идём с конца, чтобы сохранить порядок равных
    const output = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i];
        count[num - min]--;
        output[count[num - min]] = num;
    }

    return output;
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1])); // [1, 2, 2, 3, 3, 4, 8]

module.exports = countingSort;
