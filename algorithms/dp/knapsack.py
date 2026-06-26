"""
=====================================================================
0/1 Knapsack / Рюкзак
---------------------------------------------------------------------
dp[i][c] = max value, первые i предметов, вместимость c
Time:  O(n * W)
Space: O(W) (1D rolling)
=====================================================================
"""
from typing import List, Tuple


def knapsack(weights: List[int], values: List[int], capacity: int) -> int:
    dp = [0] * (capacity + 1)

    for i in range(len(weights)):
        # Справа налево — чтобы не использовать предмет дважды
        for c in range(capacity, weights[i] - 1, -1):
            dp[c] = max(dp[c], dp[c - weights[i]] + values[i])

    return dp[capacity]


def knapsack_2d(weights: List[int], values: List[int], capacity: int) -> Tuple[int, List[int]]:
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for c in range(capacity + 1):
            dp[i][c] = dp[i - 1][c]
            if weights[i - 1] <= c:
                dp[i][c] = max(dp[i][c], dp[i - 1][c - weights[i - 1]] + values[i - 1])

    # Восстановление выбора
    picked, c = [], capacity
    for i in range(n, 0, -1):
        if dp[i][c] != dp[i - 1][c]:
            picked.append(i - 1)
            c -= weights[i - 1]

    return dp[n][capacity], list(reversed(picked))


if __name__ == "__main__":
    print(knapsack([1, 3, 4, 5], [1, 4, 5, 7], 7))     # 9
    print(knapsack_2d([1, 3, 4, 5], [1, 4, 5, 7], 7))  # (9, [1, 2])
