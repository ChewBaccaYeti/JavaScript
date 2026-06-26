"""
=====================================================================
Bellman-Ford / Беллман-Форд
---------------------------------------------------------------------
Работает с ОТРИЦАТЕЛЬНЫМИ весами. Детектирует отрицательные циклы.
Time:  O(V·E)
Space: O(V)
=====================================================================
"""
from math import inf
from typing import List, Tuple


def bellman_ford(nodes: List, edges: List[Tuple], start) -> dict:
    dist = {n: inf for n in nodes}
    parent = {}
    dist[start] = 0

    for _ in range(len(nodes) - 1):
        updated = False
        for u, v, w in edges:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                parent[v] = u
                updated = True
        if not updated:
            break

    # Проверка на отрицательный цикл
    for u, v, w in edges:
        if dist[u] + w < dist[v]:
            raise ValueError("Negative-weight cycle detected")

    return {"dist": dist, "parent": parent}


if __name__ == "__main__":
    nodes = ["A", "B", "C", "D"]
    edges = [
        ("A", "B", 1),
        ("B", "C", -2),
        ("A", "C", 4),
        ("C", "D", 3),
    ]
    print(bellman_ford(nodes, edges, "A")["dist"])
    # {'A': 0, 'B': 1, 'C': -1, 'D': 2}
