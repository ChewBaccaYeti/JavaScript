"""
=====================================================================
Sieve of Eratosthenes / Решето Эратосфена
---------------------------------------------------------------------
Time: O(n log log n), Space: O(n)
=====================================================================
"""
from typing import List


def sieve(n: int) -> List[int]:
    if n < 2:
        return []

    is_prime = [True] * (n + 1)
    is_prime[0] = is_prime[1] = False

    for i in range(2, int(n ** 0.5) + 1):
        if is_prime[i]:
            # Срез — Pythonic way пометить кратные
            for j in range(i * i, n + 1, i):
                is_prime[j] = False

    return [i for i in range(2, n + 1) if is_prime[i]]


if __name__ == "__main__":
    print(sieve(30))  # [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
