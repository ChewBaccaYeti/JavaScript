"""
=====================================================================
Fast Power / Быстрое возведение в степень
---------------------------------------------------------------------
Time: O(log b)
Заметка: в Python есть встроенный pow(base, exp, mod) — оптимизирован.
=====================================================================
"""


def fast_pow(base: float, exp: int) -> float:
    if exp < 0:
        return 1 / fast_pow(base, -exp)

    result = 1
    while exp > 0:
        if exp & 1:
            result *= base
        base *= base
        exp >>= 1
    return result


def fast_pow_mod(base: int, exp: int, mod: int) -> int:
    if mod == 1:
        return 0
    result = 1
    base %= mod
    while exp > 0:
        if exp & 1:
            result = (result * base) % mod
        exp >>= 1
        base = (base * base) % mod
    return result


if __name__ == "__main__":
    print(fast_pow(2, 10))            # 1024
    print(fast_pow_mod(2, 10, 1000))  # 24
    print(pow(2, 10, 1000))           # 24 (stdlib)
