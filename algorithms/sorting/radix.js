// =====================================================================
// Radix Sort (LSD) / Поразрядная сортировка
// ---------------------------------------------------------------------
// Идея: сортируем по разрядам от младшего к старшему (LSD = least
//       significant digit). На каждом шаге применяем стабильную
//       сортировку по текущему разряду (обычно counting sort).
// Time:  O(d · (n + k)), d = количество разрядов, k = база (10 здесь)
// Space: O(n + k)
// Stable: yes
// In-place: no
// Условие: неотрицательные целые. Для отрицательных нужна модификация.
// =====================================================================

function radixSort(arr) {
    if (arr.length === 0) return arr;

    const max = Math.max(...arr);
    // exp — текущий разряд: 1 (единицы), 10 (десятки), 100 ...
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingByDigit(arr, exp);
    }

    return arr;
}

/**
 * Counting sort, который сортирует по конкретному разряду exp.
 * Извлекаем разряд через (num / exp) % 10
 */
function countingByDigit(arr, exp) {
    const n = arr.length;
    const output = new Array(n);
    const count = new Array(10).fill(0); // десятичная база

    // Подсчёт цифр на разряде exp
    for (let i = 0; i < n; i++) {
        const digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
    }

    // Префиксные суммы
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Восстановление с конца (стабильность критична!)
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        count[digit]--;
        output[count[digit]] = arr[i];
    }

    // Копируем обратно в arr
    for (let i = 0; i < n; i++) arr[i] = output[i];
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66])); // [2, 24, 45, 66, 75, 90, 170, 802]

module.exports = radixSort;
