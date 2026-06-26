"""
=====================================================================
DFS / Depth-First Search / Поиск в глубину
---------------------------------------------------------------------
Стек (рекурсивный или явный).
Time:  O(V + E)
Space: O(V)
=====================================================================
"""
from typing import Dict, List, Set


def dfs_recursive(graph: Dict, start, visited: Set = None, order: List = None) -> List:
    if visited is None:
        visited, order = set(), []
    visited.add(start)
    order.append(start)

    for neighbor in graph.get(start, []):
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited, order)

    return order


def dfs_iterative(graph: Dict, start) -> List:
    visited, order = set(), []
    stack = [start]

    while stack:
        node = stack.pop()
        if node in visited:
            continue

        visited.add(node)
        order.append(node)

        # reversed чтобы совпасть с рекурсивным порядком
        for neighbor in reversed(graph.get(node, [])):
            if neighbor not in visited:
                stack.append(neighbor)

    return order


if __name__ == "__main__":
    graph = {
        "A": ["B", "C"],
        "B": ["D", "E"],
        "C": ["F"],
        "D": [],
        "E": ["F"],
        "F": [],
    }
    print(dfs_recursive(graph, "A"))  # ['A','B','D','E','F','C']
    print(dfs_iterative(graph, "A"))  # ['A','B','D','E','F','C']
