"""
=====================================================================
Kruskal MST / Минимальное остовное дерево
---------------------------------------------------------------------
1. Сортируем рёбра
2. Добавляем по порядку, проверяя цикл через Union-Find
Time:  O(E log E)
=====================================================================
"""
from typing import List, Tuple


class UnionFind:
    def __init__(self, elements):
        self.parent = {e: e for e in elements}
        self.rank = {e: 0 for e in elements}

    def find(self, x):
        # Path compression
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y) -> bool:
        rx, ry = self.find(x), self.find(y)
        if rx == ry:
            return False  # уже в одной компоненте → цикл

        # Union by rank
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
        else:
            self.parent[ry] = rx
            self.rank[rx] += 1
        return True


def kruskal(nodes: List, edges: List[Tuple]) -> dict:
    edges_sorted = sorted(edges, key=lambda e: e[2])
    uf = UnionFind(nodes)
    mst = []
    total = 0

    for u, v, w in edges_sorted:
        if uf.union(u, v):
            mst.append((u, v, w))
            total += w
            if len(mst) == len(nodes) - 1:
                break

    return {"mst": mst, "total_weight": total}


if __name__ == "__main__":
    nodes = ["A", "B", "C", "D", "E"]
    edges = [
        ("A", "B", 1), ("A", "C", 7), ("B", "C", 5),
        ("B", "D", 4), ("C", "D", 6), ("C", "E", 2),
        ("D", "E", 3),
    ]
    print(kruskal(nodes, edges))
