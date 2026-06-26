// =====================================================================
// Dijkstra's Algorithm / Алгоритм Дейкстры
// ---------------------------------------------------------------------
// Кратчайшие пути от стартовой вершины во ВЗВЕШЕННОМ графе.
// УСЛОВИЕ: все веса НЕОТРИЦАТЕЛЬНЫЕ. Иначе — Bellman-Ford.
//
// Идея:
//   1. dist[start] = 0, остальные = ∞
//   2. На каждом шаге берём непосещённую вершину с минимальным dist
//   3. Релаксируем рёбра: если dist[v] > dist[u] + w(u,v), обновляем
//
// Time:  O((V + E) log V) с binary heap (priority queue)
//        O(V²) с массивом
// Space: O(V)
//
// Граф: { node: [[neighbor, weight], ...] }
// =====================================================================

// Простой min-heap для приоритетной очереди
class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(item) {
        this.heap.push(item);
        this._siftUp(this.heap.length - 1);
    }
    pop() {
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._siftDown(0);
        }
        return top;
    }
    get size() {
        return this.heap.length;
    }
    _siftUp(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[i][0] >= this.heap[parent][0]) break;
            [this.heap[i], this.heap[parent]] = [
                this.heap[parent],
                this.heap[i],
            ];
            i = parent;
        }
    }
    _siftDown(i) {
        const n = this.heap.length;
        while (true) {
            let smallest = i;
            const l = 2 * i + 1;
            const r = 2 * i + 2;
            if (l < n && this.heap[l][0] < this.heap[smallest][0]) smallest = l;
            if (r < n && this.heap[r][0] < this.heap[smallest][0]) smallest = r;
            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[i],
            ];
            i = smallest;
        }
    }
}

function dijkstra(graph, start) {
    const dist = new Map();
    const parent = new Map();
    for (const node of Object.keys(graph)) dist.set(node, Infinity);
    dist.set(start, 0);
    parent.set(start, null);

    const heap = new MinHeap();
    heap.push([0, start]); // [distance, node]

    while (heap.size > 0) {
        const [d, u] = heap.pop();

        // Lazy deletion: пропускаем устаревшие записи
        if (d > dist.get(u)) continue;

        for (const [v, w] of graph[u] || []) {
            const alt = d + w;
            if (alt < dist.get(v)) {
                dist.set(v, alt);
                parent.set(v, u);
                heap.push([alt, v]);
            }
        }
    }

    return { dist, parent };
}

const graph = {
    A: [
        ['B', 1],
        ['C', 4],
    ],
    B: [
        ['C', 2],
        ['D', 5],
    ],
    C: [['D', 1]],
    D: [],
};
const { dist } = dijkstra(graph, 'A');
console.log([...dist.entries()]); // A:0, B:1, C:3, D:4

module.exports = { dijkstra, MinHeap };
