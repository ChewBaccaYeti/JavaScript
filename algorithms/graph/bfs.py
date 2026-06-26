"""
=====================================================================
BFS / Breadth-First Search / Поиск в ширину
---------------------------------------------------------------------
Очередь (FIFO). Применение: кратч. путь в невзв. графе, уровни,
двудольность, компоненты связности.
Time:  O(V + E)
Space: O(V)
=====================================================================
"""
from collections import deque
from typing import Dict, List, Optional


def bfs(graph: Dict, start) -> dict:
    visited = {start}
    order = []
    distance = {start: 0}
    parent = {start: None}

    queue = deque([start])

    while queue:
        node = queue.popleft()
        order.append(node)

        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                distance[neighbor] = distance[node] + 1
                parent[neighbor] = node
                queue.append(neighbor)

    return {"order": order, "distance": distance, "parent": parent}


def reconstruct_path(parent: Dict, target) -> Optional[List]:
    if target not in parent:
        return None
    path = []
    curr = target
    while curr is not None:
        path.append(curr)
        curr = parent[curr]
    return list(reversed(path))


if __name__ == "__main__":
    graph = {
        "A": ["B", "C"],
        "B": ["A", "D", "E"],
        "C": ["A", "F"],
        "D": ["B"],
        "E": ["B", "F"],
        "F": ["C", "E"],
    }
    res = bfs(graph, "A")
    print(res["order"])                              # ['A','B','C','D','E','F']
    print(res["distance"])
    print(reconstruct_path(res["parent"], "F"))      # путь A → F
