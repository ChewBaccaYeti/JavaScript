// =====================================================================
// LIS / Longest Increasing Subsequence / Наибольшая возрастающая подпосл.
// ---------------------------------------------------------------------
// Найти длину самой длинной строго возрастающей подпоследовательности.
//
// Две версии:
//   1. DP O(n²): dp[i] = LIS, заканчивающаяся на i
//   2. Patience sorting + binary search O(n log n) — самый быстрый
//
// Применение: задачи о расписании, обработка временных рядов.
// =====================================================================

// O(n²) — простая, понятная
function lisQuadratic(arr) {
    const n = arr.length;
    if (n === 0) return 0;

    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

// O(n log n) — patience sorting:
// tails[i] = наименьший возможный хвост LIS длины i+1
function lisFast(arr) {
    const tails = [];

    for (const x of arr) {
        // Бинарный поиск: первая позиция, где tails[j] >= x
        let lo = 0;
        let hi = tails.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (tails[mid] < x) lo = mid + 1;
            else hi = mid;
        }

        // Если x больше всех — наращиваем; иначе заменяем
        if (lo === tails.length) tails.push(x);
        else tails[lo] = x;
    }

    return tails.length;
}

console.log(lisQuadratic([10, 9, 2, 5, 3, 7, 101, 18])); // 4 ([2,3,7,101])
console.log(lisFast([10, 9, 2, 5, 3, 7, 101, 18])); // 4

module.exports = { lisQuadratic, lisFast };
