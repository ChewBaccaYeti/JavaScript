"""
=====================================================================
LCS / Longest Common Subsequence
---------------------------------------------------------------------
dp[i][j] = LCS A[:i], B[:j]
Time:  O(n*m), Space: O(n*m)
=====================================================================
"""


def lcs_length(a: str, b: str) -> int:
    n, m = len(a), len(b)
    dp = [[0] * (m + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if a[i - 1] == b[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    return dp[n][m]


def lcs(a: str, b: str) -> str:
    n, m = len(a), len(b)
    dp = [[0] * (m + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for j in range(1, m + 1):
            dp[i][j] = (dp[i - 1][j - 1] + 1
                       if a[i - 1] == b[j - 1]
                       else max(dp[i - 1][j], dp[i][j - 1]))

    # Восстановление
    i, j = n, m
    chars = []
    while i > 0 and j > 0:
        if a[i - 1] == b[j - 1]:
            chars.append(a[i - 1])
            i -= 1
            j -= 1
        elif dp[i - 1][j] > dp[i][j - 1]:
            i -= 1
        else:
            j -= 1

    return "".join(reversed(chars))


if __name__ == "__main__":
    print(lcs_length("ABCBDAB", "BDCAB"))  # 4
    print(lcs("ABCBDAB", "BDCAB"))         # 'BCAB'
