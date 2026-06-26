"""
=====================================================================
Prime Check / Проверка на простоту
---------------------------------------------------------------------
Trial division до √n — O(√n)
Для больших n: Miller-Rabin.
=====================================================================
"""
import random


def is_prime(n: int) -> bool:
    if n < 2:
        return False
    if n < 4:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False

    # Все простые > 3 имеют вид 6k ± 1
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True


def miller_rabin(n: int, k: int = 10) -> bool:
    """Вероятностный тест. k раундов → ошибка ≤ (1/4)^k."""
    if n < 2:
        return False
    for p in (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37):
        if n == p:
            return True
        if n % p == 0:
            return False

    # n - 1 = 2^r * d
    d, r = n - 1, 0
    while d % 2 == 0:
        d //= 2
        r += 1

    for _ in range(k):
        a = random.randrange(2, n - 1)
        x = pow(a, d, n)
        if x in (1, n - 1):
            continue
        for _ in range(r - 1):
            x = pow(x, 2, n)
            if x == n - 1:
                break
        else:
            return False
    return True


if __name__ == "__main__":
    print(is_prime(2))     # True
    print(is_prime(17))    # True
    print(is_prime(100))   # False
    print(miller_rabin(982451653))  # True
