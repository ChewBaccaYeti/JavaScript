"""
=====================================================================
Coin Change / Размен монет
---------------------------------------------------------------------
Min монет для amount (unbounded).
Time: O(amount * len(coins))
ВНИМАНИЕ: greedy не работает для произвольных coins!
=====================================================================
"""
from math import inf
from typing import List


def coin_change(coins: List[int], amount: int) -> int:
    dp = [inf] * (amount + 1)
    dp[0] = 0

    for a in range(1, amount + 1):
        for c in coins:
            if c <= a:
                dp[a] = min(dp[a], dp[a - c] + 1)

    return -1 if dp[amount] == inf else dp[amount]


def coin_change_ways(coins: List[int], amount: int) -> int:
    """Сколько комбинаций (не перестановок) дают amount."""
    dp = [0] * (amount + 1)
    dp[0] = 1

    for c in coins:
        for a in range(c, amount + 1):
            dp[a] += dp[a - c]

    return dp[amount]


if __name__ == "__main__":
    print(coin_change([1, 2, 5], 11))     # 3
    print(coin_change([2], 3))            # -1
    print(coin_change_ways([1, 2, 5], 5)) # 4
