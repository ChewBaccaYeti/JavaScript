"""
=====================================================================
Factorial / Факториал
---------------------------------------------------------------------
n! = 1*2*...*n, 0! = 1
Time: O(n), Space: O(1) или O(n) рекурсивно
Заметка: Python int — произвольной точности, переполнения нет.
В stdlib: math.factorial(n) — самый быстрый.
=====================================================================
"""


def factorial_iterative(n: int) -> int:
    if n < 0:
        raise ValueError("Factorial undefined for negative")
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result


def factorial_recursive(n: int) -> int:
    if n < 0:
        raise ValueError("Factorial undefined for negative")
    if n <= 1:
        return 1
    return n * factorial_recursive(n - 1)


if __name__ == "__main__":
    print(factorial_iterative(5))   # 120
    print(factorial_recursive(10))  # 3628800
