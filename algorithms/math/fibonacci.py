"""
=====================================================================
Fibonacci / Числа Фибоначчи
---------------------------------------------------------------------
F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)
4 реализации — классический собес-вопрос про trade-offs.
=====================================================================
"""
from functools import lru_cache
from typing import List


# 1) Наивная — O(2^n)
def fib_naive(n: int) -> int:
    if n < 2:
        return n
    return fib_naive(n - 1) + fib_naive(n - 2)


# 2) Мемоизация через декоратор — O(n)
@lru_cache(maxsize=None)
def fib_memo(n: int) -> int:
    if n < 2:
        return n
    return fib_memo(n - 1) + fib_memo(n - 2)


# 3) Итеративная — O(n) время, O(1) память. Лучший практичный вариант.
def fib_iterative(n: int) -> int:
    if n < 2:
        return n
    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr


# 4) Матричное возведение в степень — O(log n)
Matrix = List[List[int]]


def _mat_mul(a: Matrix, b: Matrix) -> Matrix:
    return [
        [a[0][0] * b[0][0] + a[0][1] * b[1][0],
         a[0][0] * b[0][1] + a[0][1] * b[1][1]],
        [a[1][0] * b[0][0] + a[1][1] * b[1][0],
         a[1][0] * b[0][1] + a[1][1] * b[1][1]],
    ]


def _mat_pow(m: Matrix, p: int) -> Matrix:
    result = [[1, 0], [0, 1]]
    base = m
    while p > 0:
        if p & 1:
            result = _mat_mul(result, base)
        base = _mat_mul(base, base)
        p >>= 1
    return result


def fib_matrix(n: int) -> int:
    if n < 2:
        return n
    return _mat_pow([[1, 1], [1, 0]], n)[0][1]


if __name__ == "__main__":
    print(fib_iterative(10))  # 55
    print(fib_memo(50))       # 12586269025
    print(fib_matrix(10))     # 55
