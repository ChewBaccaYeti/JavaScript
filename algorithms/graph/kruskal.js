// =====================================================================
// Kruskal's MST / Минимальное остовное дерево по Краскалу
// ---------------------------------------------------------------------
// Идея:
//   1. Сортируем рёбра по весу
//   2. Идём по рёбрам и добавляем в MST, если не создают цикл
//   3. Проверка цикла через Union-Find (DSU)
// Time:  O(E log E) — сортировка доминирует
// Space: O(V)
//
// MST = поддерево из V-1 рёбер с минимальной суммой весов,
//       связывающее все вершины (только для связных неориентированных).
// =====================================================================

class UnionFind {
    constructor(elements) {
        this.parent = new Map();
        this.rank = new Map();
        for (const e of elements) {
            this.parent.set(e, e);
            this.rank.set(e, 0);
        }
    }

    // Path compression — почти O(1) амортизированно
    find(x) {
        if (this.parent.get(x) !== x) {
            this.parent.set(x, this.find(this.parent.get(x)));
        }
        return this.parent.get(x);
    }

    // Union by rank — балансируем дерево
    union(x, y) {
        const rx = this.find(x);
        const ry = this.find(y);
        if (rx === ry) return false; // уже в одном множестве — цикл

        const rankX = this.rank.get(rx);
        const rankY = this.rank.get(ry);
        if (rankX < rankY) this.parent.set(rx, ry);
        else if (rankX > rankY) this.parent.set(ry, rx);
        else {
            this.parent.set(ry, rx);
            this.rank.set(rx, rankX + 1);
        }
        return true;
    }
}

function kruskal(nodes, edges) {
    // 1. Сортируем рёбра по весу
    const sorted = [...edges].sort((a, b) => a[2] - b[2]);

    const uf = new UnionFind(nodes);
    const mst = [];
    let totalWeight = 0;

    for (const edge of sorted) {
        const [u, v, w] = edge;
        if (uf.union(u, v)) {
            mst.push(edge);
            totalWeight += w;
            if (mst.length === nodes.length - 1) break; // MST готов
        }
    }

    return { mst, totalWeight };
}

const nodes = ['A', 'B', 'C', 'D', 'E'];
const edges = [
    ['A', 'B', 1],
    ['A', 'C', 7],
    ['B', 'C', 5],
    ['B', 'D', 4],
    ['C', 'D', 6],
    ['C', 'E', 2],
    ['D', 'E', 3],
];
console.log(kruskal(nodes, edges));
// mst: [A-B:1, C-E:2, D-E:3, B-D:4], totalWeight: 10

module.exports = { kruskal, UnionFind };
