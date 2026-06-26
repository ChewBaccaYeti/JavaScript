// =====================================================================
// BFS / Breadth-First Search / Поиск в ширину
// ---------------------------------------------------------------------
// Идея: обходим граф уровнями — сначала все соседи стартовой вершины,
//       потом соседи соседей, и т.д. Используем ОЧЕРЕДЬ (FIFO).
// Применение:
//   - Кратчайший путь в НЕВЗВЕШЕННОМ графе
//   - Уровни/расстояния от стартовой вершины
//   - Проверка двудольности
//   - Поиск компонент связности
// Time:  O(V + E)
// Space: O(V) — visited + queue
//
// Граф представлен как adjacency list: { node: [neighbors] }
// =====================================================================

function bfs(graph, start) {
    const visited = new Set([start]);
    const order = []; // порядок обхода
    const distance = new Map([[start, 0]]); // расстояние в шагах
    const parent = new Map([[start, null]]); // для восстановления пути

    // В JS нет встроенной очереди с O(1) shift. Для production
    // используй deque или индекс-указатель. Здесь — для простоты Array.shift.
    const queue = [start];

    while (queue.length > 0) {
        const node = queue.shift(); // O(n) на массиве — окей для учебной версии
        order.push(node);

        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                distance.set(neighbor, distance.get(node) + 1);
                parent.set(neighbor, node);
                queue.push(neighbor);
            }
        }
    }

    return { order, distance, parent };
}

/**
 * Восстановление пути из start в target.
 * @returns массив вершин или null если не достижим
 */
function reconstructPath(parent, target) {
    if (!parent.has(target)) return null;
    const path = [];
    let curr = target;
    while (curr !== null) {
        path.unshift(curr);
        curr = parent.get(curr);
    }
    return path;
}

// --- Пример ---
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
};

const result = bfs(graph, 'A');
console.log(result.order); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log([...result.distance.entries()]); // расстояния от A
console.log(reconstructPath(result.parent, 'F')); // путь A → F

module.exports = { bfs, reconstructPath };
