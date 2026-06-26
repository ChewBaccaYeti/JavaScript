// =====================================================================
// Coin Change / Размен монет
// ---------------------------------------------------------------------
// Дано: номиналы монет coins, сумма amount.
// Найти МИНИМАЛЬНОЕ число монет, дающих в сумме amount.
// Считаем, что монет каждого номинала бесконечно много (unbounded).
//
// dp[a] = мин. число монет для суммы a
//   dp[a] = min(dp[a - c] + 1) для каждой монеты c, если a >= c
//   dp[0] = 0, остальное = Infinity (недостижимо)
//
// Time:  O(amount * len(coins))
// Space: O(amount)
//
// Greedy НЕ работает для произвольных номиналов!
// Пример: coins=[1,3,4], amount=6 → greedy даст 3 (4+1+1), оптимум 2 (3+3).
// =====================================================================

function coinChange(coins, amount) {
    // Заполняем недостижимым значением (amount + 1 точно > любого ответа)
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (let a = 1; a <= amount; a++) {
        for (const c of coins) {
            if (c <= a) {
                dp[a] = Math.min(dp[a], dp[a - c] + 1);
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
}

// Вариация: сколько СПОСОБОВ набрать сумму (комбинаций)
function coinChangeWays(coins, amount) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    // Порядок важен! Внешний цикл по монетам — считаем комбинации, не перестановки
    for (const c of coins) {
        for (let a = c; a <= amount; a++) {
            dp[a] += dp[a - c];
        }
    }

    return dp[amount];
}

console.log(coinChange([1, 2, 5], 11)); // 3 (5+5+1)
console.log(coinChange([2], 3)); // -1
console.log(coinChangeWays([1, 2, 5], 5)); // 4

module.exports = { coinChange, coinChangeWays };
