"""
=====================================================================
Edit Distance / Levenshtein
---------------------------------------------------------------------
Min операций (insert/delete/replace) превратить A в B.
Time: O(n*m), Space: O(n*m)
=====================================================================
"""


def edit_distance(a: str, b: str) -> int:
    n, m = len(a), len(b)
    dp = [[0] * (m + 1) for _ in range(n + 1)]

    for i in range(n + 1):
        dp[i][0] = i
    for j in range(m + 1):
        dp[0][j] = j

    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if a[i - 1] == b[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],      # delete
                    dp[i][j - 1],      # insert
                    dp[i - 1][j - 1],  # replace
                )

    return dp[n][m]


if __name__ == "__main__":
    print(edit_distance("kitten", "sitting"))  # 3
    print(edit_distance("horse", "ros"))       # 3
    print(edit_distance("", "abc"))            # 3
