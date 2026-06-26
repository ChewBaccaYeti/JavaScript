// =====================================================================
// Topological Sort / Топологическая сортировка
// ---------------------------------------------------------------------
// Только для DAG (ориентированный граф без циклов).
// Результат: линейный порядок вершин, где для каждого ребра u→v
//            u идёт раньше v.
// Применение: порядок задач с зависимостями, build systems, scheduling.
//
// Два алгоритма:
//   - Kahn (BFS по in-degree)   — также детектирует цикл
//   - DFS + стек (post-order)
//
// Time:  O(V + E)
// Space: O(V)
// =====================================================================

// --- Kahn (BFS, in-degree) ---
function topoKahn(graph) {
    const nodes = Object.keys(graph);
    const inDegree = new Map(nodes.map(n => [n, 0]));

    for (const u of nodes) {
        for (const v of graph[u]) {
            inDegree.set(v, (inDegree.get(v) || 0) + 1);
        }
    }

    // Очередь из вершин без входящих рёбер
    const queue = nodes.filter(n => inDegree.get(n) === 0);
    const order = [];

    while (queue.length > 0) {
        const u = queue.shift();
        order.push(u);
        for (const v of graph[u]) {
            inDegree.set(v, inDegree.get(v) - 1);
            if (inDegree.get(v) === 0) queue.push(v);
        }
    }

    if (order.length !== nodes.length) {
        throw new Error('Graph has a cycle — not a DAG');
    }
    return order;
}

// --- DFS post-order ---
function topoDFS(graph) {
    const visited = new Set();
    const inStack = new Set(); // для детекции цикла
    const order = [];

    function dfs(u) {
        if (inStack.has(u)) throw new Error('Cycle detected');
        if (visited.has(u)) return;

        inStack.add(u);
        for (const v of graph[u] || []) dfs(v);
        inStack.delete(u);

        visited.add(u);
        order.push(u); // post-order
    }

    for (const node of Object.keys(graph)) {
        if (!visited.has(node)) dfs(node);
    }

    return order.reverse(); // переворачиваем для топологического порядка
}

const graph = {
    shirt: ['tie', 'belt'],
    tie: ['jacket'],
    belt: ['jacket'],
    jacket: [],
    pants: ['belt', 'shoes'],
    socks: ['shoes'],
    shoes: [],
};
console.log(topoKahn(graph));
console.log(topoDFS(graph));

module.exports = { topoKahn, topoDFS };
