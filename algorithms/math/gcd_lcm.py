"""
=====================================================================
GCD / LCM — Euclidean algorithm
---------------------------------------------------------------------
GCD(a,0)=a;  GCD(a,b)=GCD(b, a%b)
LCM(a,b) = |a*b| / GCD(a,b)
Time: O(log min(a,b))
В stdlib: math.gcd, math.lcm
=====================================================================
"""
from typing import Tuple


def gcd(a: int, b: int) -> int:
    a, b = abs(a), abs(b)
    while b:
        a, b = b, a % b
    return a


def lcm(a: int, b: int) -> int:
    if a == 0 or b == 0:
        return 0
    return abs(a // gcd(a, b)) * abs(b)


def gcd_extended(a: int, b: int) -> Tuple[int, int, int]:
    """Возвращает (g, x, y), где a*x + b*y = g = gcd(a, b)."""
    if b == 0:
        return a, 1, 0
    g, x1, y1 = gcd_extended(b, a % b)
    return g, y1, x1 - (a // b) * y1


if __name__ == "__main__":
    print(gcd(48, 18))         # 6
    print(lcm(4, 6))           # 12
    print(gcd_extended(30, 12))  # (6, 1, -2)
