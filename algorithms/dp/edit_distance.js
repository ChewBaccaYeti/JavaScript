// =====================================================================
// Edit Distance / Levenshtein Distance / Расстояние редактирования
// ---------------------------------------------------------------------
// Минимальное число операций (вставка, удаление, замена) чтобы
// превратить одну строку в другую.
//
// dp[i][j] = расст. между A[:i] и B[:j]
//   A[i-1] === B[j-1] → dp[i-1][j-1] (без операции)
//   иначе:             1 + min(dp[i-1][j],    // удалить A[i-1]
//                              dp[i][j-1],    // вставить B[j-1]
//                              dp[i-1][j-1])  // заменить
//
// Time:  O(n * m)
// Space: O(n * m) → O(min(n, m))
//
// Применение: spell-check, fuzzy matching, биоинформатика, diff.
// =====================================================================

function editDistance(a, b) {
    const n = a.length;
    const m = b.length;

    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    // Базовые случаи
    for (let i = 0; i <= n; i++) dp[i][0] = i; // удалить i символов
    for (let j = 0; j <= m; j++) dp[0][j] = j; // вставить j символов

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] =
                    1 +
                    Math.min(
                        dp[i - 1][j], // delete
                        dp[i][j - 1], // insert
                        dp[i - 1][j - 1], // replace
                    );
            }
        }
    }

    return dp[n][m];
}

console.log(editDistance('kitten', 'sitting')); // 3
console.log(editDistance('horse', 'ros')); // 3
console.log(editDistance('', 'abc')); // 3

module.exports = editDistance;
