// =====================================================================
// LCS / Longest Common Subsequence / Наибольшая общая подпоследовательность
// ---------------------------------------------------------------------
// Подпоследовательность ≠ подстрока. "abc" — подпоследовательность "axbycz".
//
// dp[i][j] = LCS первых i символов A и первых j символов B
//   - A[i-1] === B[j-1]: dp[i][j] = dp[i-1][j-1] + 1
//   - иначе:             dp[i][j] = max(dp[i-1][j], dp[i][j-1])
//
// Time:  O(n * m)
// Space: O(n * m). Можно O(min(n, m)) с rolling rows.
//
// Применение: diff утилиты, биоинформатика (выравнивание последовательностей).
// =====================================================================

function lcsLength(a, b) {
    const n = a.length;
    const m = b.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[n][m];
}

// Восстановление самой подпоследовательности
function lcs(a, b) {
    const n = a.length;
    const m = b.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            dp[i][j] =
                a[i - 1] === b[j - 1]
                    ? dp[i - 1][j - 1] + 1
                    : Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    // Идём от правого нижнего угла назад
    let i = n;
    let j = m;
    const chars = [];
    while (i > 0 && j > 0) {
        if (a[i - 1] === b[j - 1]) {
            chars.push(a[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return chars.reverse().join('');
}

console.log(lcsLength('ABCBDAB', 'BDCAB')); // 4
console.log(lcs('ABCBDAB', 'BDCAB')); // 'BCAB' (один из вариантов)

module.exports = { lcsLength, lcs };
