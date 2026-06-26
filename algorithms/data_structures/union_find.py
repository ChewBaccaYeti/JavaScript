"""
=====================================================================
Union-Find / DSU
---------------------------------------------------------------------
С path compression + union by rank: амортизированно O(α(n)) ≈ O(1).
Применение: Kruskal MST, connectivity, cycles detection.
=====================================================================
"""


class UnionFind:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.size = [1] * n
        self.count = n

    def find(self, x: int) -> int:
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # path compression
        return self.parent[x]

    def union(self, x: int, y: int) -> bool:
        rx, ry = self.find(x), self.find(y)
        if rx == ry:
            return False

        # Union by rank
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
            self.size[ry] += self.size[rx]
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
            self.size[rx] += self.size[ry]
        else:
            self.parent[ry] = rx
            self.size[rx] += self.size[ry]
            self.rank[rx] += 1

        self.count -= 1
        return True

    def connected(self, x: int, y: int) -> bool:
        return self.find(x) == self.find(y)

    def component_size(self, x: int) -> int:
        return self.size[self.find(x)]


if __name__ == "__main__":
    uf = UnionFind(5)
    uf.union(0, 1)
    uf.union(2, 3)
    print(uf.connected(0, 1))   # True
    print(uf.connected(0, 2))   # False
    uf.union(1, 2)
    print(uf.connected(0, 3))   # True
    print(uf.count)             # 2
    print(uf.component_size(0)) # 4
