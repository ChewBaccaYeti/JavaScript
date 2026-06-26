// =====================================================================
// Bellman-Ford / Алгоритм Беллмана-Форда
// ---------------------------------------------------------------------
// Кратчайшие пути от стартовой вершины. В отличие от Дейкстры —
// РАБОТАЕТ С ОТРИЦАТЕЛЬНЫМИ ВЕСАМИ и обнаруживает отриц. циклы.
//
// Идея: V-1 раз релаксируем ВСЕ рёбра. На V-й итерации если что-то
//       релаксировалось — есть отрицательный цикл.
// Time:  O(V·E)
// Space: O(V)
//
// Ввод: список рёбер edges = [[u, v, weight], ...], список вершин nodes
// =====================================================================

function bellmanFord(nodes, edges, start) {
    const dist = new Map();
    const parent = new Map();
    for (const n of nodes) dist.set(n, Infinity);
    dist.set(start, 0);

    // V-1 итерация релаксации
    for (let i = 0; i < nodes.length - 1; i++) {
        let updated = false;
        for (const [u, v, w] of edges) {
            if (dist.get(u) + w < dist.get(v)) {
                dist.set(v, dist.get(u) + w);
                parent.set(v, u);
                updated = true;
            }
        }
        if (!updated) break; // early exit — пути стабилизировались
    }

    // V-я итерация: если что-то ещё релаксируется → отрицательный цикл
    for (const [u, v, w] of edges) {
        if (dist.get(u) + w < dist.get(v)) {
            throw new Error('Graph contains negative-weight cycle');
        }
    }

    return { dist, parent };
}

const nodes = ['A', 'B', 'C', 'D'];
const edges = [
    ['A', 'B', 1],
    ['B', 'C', -2],
    ['A', 'C', 4],
    ['C', 'D', 3],
];
const { dist } = bellmanFord(nodes, edges, 'A');
console.log([...dist.entries()]); // A:0, B:1, C:-1, D:2

module.exports = bellmanFord;
