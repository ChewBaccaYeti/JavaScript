// =====================================================================
// 0/1 Knapsack / Задача о рюкзаке
// ---------------------------------------------------------------------
// Дано: n предметов с весами w[i] и ценностями v[i], вместимость W.
// Найти максимальную суммарную ценность, влезающую в рюкзак.
// 0/1 — каждый предмет можно взять 0 или 1 раз (не дробить).
//
// dp[i][c] = макс. ценность, используя первые i предметов с вместимостью c
//   - не берём i: dp[i-1][c]
//   - берём:      dp[i-1][c - w[i]] + v[i]   (если w[i] <= c)
//
// Time:  O(n * W)
// Space: O(n * W) → O(W) (1D rolling)
// =====================================================================

function knapsack(weights, values, capacity) {
    const n = weights.length;
    // 1D версия — экономим память
    // ВАЖНО: внутренний цикл идёт справа налево, чтобы не использовать
    //        текущий предмет дважды
    const dp = new Array(capacity + 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let c = capacity; c >= weights[i]; c--) {
            dp[c] = Math.max(dp[c], dp[c - weights[i]] + values[i]);
        }
    }

    return dp[capacity];
}

// 2D версия — для понимания и восстановления выбора
function knapsack2D(weights, values, capacity) {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () =>
        new Array(capacity + 1).fill(0),
    );

    for (let i = 1; i <= n; i++) {
        for (let c = 0; c <= capacity; c++) {
            dp[i][c] = dp[i - 1][c]; // не берём i
            if (weights[i - 1] <= c) {
                dp[i][c] = Math.max(
                    dp[i][c],
                    dp[i - 1][c - weights[i - 1]] + values[i - 1],
                );
            }
        }
    }

    // Восстановление: какие предметы взяли
    const picked = [];
    let c = capacity;
    for (let i = n; i > 0; i--) {
        if (dp[i][c] !== dp[i - 1][c]) {
            picked.push(i - 1);
            c -= weights[i - 1];
        }
    }

    return { maxValue: dp[n][capacity], picked: picked.reverse() };
}

console.log(knapsack([1, 3, 4, 5], [1, 4, 5, 7], 7)); // 9
console.log(knapsack2D([1, 3, 4, 5], [1, 4, 5, 7], 7)); // { maxValue: 9, picked: [1, 2] }

module.exports = { knapsack, knapsack2D };
