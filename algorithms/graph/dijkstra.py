"""
=====================================================================
Dijkstra / Алгоритм Дейкстры
---------------------------------------------------------------------
Кратчайшие пути в графе с НЕОТРИЦАТЕЛЬНЫМИ весами.
Time:  O((V+E) log V) с heap
Space: O(V)
Граф: { node: [(neighbor, weight), ...] }
=====================================================================
"""
import heapq
from math import inf
from typing import Dict, Tuple


def dijkstra(graph: Dict, start) -> Tuple[Dict, Dict]:
    dist = {node: inf for node in graph}
    parent = {start: None}
    dist[start] = 0

    heap = [(0, start)]  # (distance, node)

    while heap:
        d, u = heapq.heappop(heap)

        # Lazy deletion: устаревшая запись
        if d > dist[u]:
            continue

        for v, w in graph.get(u, []):
            alt = d + w
            if alt < dist[v]:
                dist[v] = alt
                parent[v] = u
                heapq.heappush(heap, (alt, v))

    return dist, parent


if __name__ == "__main__":
    graph = {
        "A": [("B", 1), ("C", 4)],
        "B": [("C", 2), ("D", 5)],
        "C": [("D", 1)],
        "D": [],
    }
    dist, _ = dijkstra(graph, "A")
    print(dist)  # {'A': 0, 'B': 1, 'C': 3, 'D': 4}
