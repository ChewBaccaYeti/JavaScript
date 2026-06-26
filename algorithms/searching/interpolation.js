// =====================================================================
// Interpolation Search / Интерполяционный поиск
// ---------------------------------------------------------------------
// Идея: как бинарный, но "угадываем" позицию по формуле линейной
//       интерполяции между arr[lo] и arr[hi].
//   pos = lo + ((target - arr[lo]) * (hi - lo)) / (arr[hi] - arr[lo])
// Time:  O(log log n) на равномерно распределённых данных
//        O(n) worst (плохое распределение)
// Space: O(1)
// Условие: отсортированный массив РАВНОМЕРНО распределённых значений
// =====================================================================

function interpolationSearch(arr, target) {
    let lo = 0;
    let hi = arr.length - 1;

    while (lo <= hi && target >= arr[lo] && target <= arr[hi]) {
        // Защита от деления на 0 (все элементы одинаковы)
        if (arr[lo] === arr[hi]) {
            return arr[lo] === target ? lo : -1;
        }

        // Формула интерполяции — предсказание позиции
        const pos =
            lo +
            Math.floor(((target - arr[lo]) * (hi - lo)) / (arr[hi] - arr[lo]));

        if (arr[pos] === target) return pos;
        if (arr[pos] < target) {
            lo = pos + 1;
        } else {
            hi = pos - 1;
        }
    }

    return -1;
}

console.log(interpolationSearch([10, 20, 30, 40, 50, 60, 70, 80, 90], 70)); // 6

module.exports = interpolationSearch;
