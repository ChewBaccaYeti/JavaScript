// =====================================================================
// DFS / Depth-First Search / Поиск в глубину
// ---------------------------------------------------------------------
// Идея: уходим как можно глубже по графу, потом возвращаемся (backtrack).
//       Используем СТЕК (явный или вызовов рекурсии).
// Применение:
//   - Топологическая сортировка (DAG)
//   - Поиск циклов
//   - Связные компоненты
//   - Tarjan / Kosaraju (SCC)
//   - Поиск пути в лабиринте
// Time:  O(V + E)
// Space: O(V) — visited + стек
// =====================================================================

// Рекурсивная версия — короче и понятнее
function dfsRecursive(graph, start, visited = new Set(), order = []) {
    visited.add(start);
    order.push(start);

    for (const neighbor of graph[start] || []) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited, order);
        }
    }

    return order;
}

// Итеративная версия — нужна когда граф огромный (стек переполнится)
function dfsIterative(graph, start) {
    const visited = new Set();
    const order = [];
    const stack = [start];

    while (stack.length > 0) {
        const node = stack.pop();
        if (visited.has(node)) continue;

        visited.add(node);
        order.push(node);

        // reverse() чтобы порядок совпал с рекурсивным
        const neighbors = (graph[node] || []).slice().reverse();
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) stack.push(neighbor);
        }
    }

    return order;
}

const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: [],
};

console.log(dfsRecursive(graph, 'A')); // [ 'A', 'B', 'D', 'E', 'F', 'C' ]
console.log(dfsIterative(graph, 'A')); // [ 'A', 'B', 'D', 'E', 'F', 'C' ]

module.exports = { dfsRecursive, dfsIterative };
