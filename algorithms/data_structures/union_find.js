// =====================================================================
// Union-Find / Disjoint Set Union (DSU) / Система непересекающихся множеств
// ---------------------------------------------------------------------
// Операции:
//   find(x)        — найти представителя множества x
//   union(x, y)    — объединить множества x и y
//   connected(x,y) — в одном ли множестве
//
// С двумя оптимизациями (path compression + union by rank/size):
//   амортизированно O(α(n)) ≈ O(1)  (α — обратная функция Аккермана)
//
// Применение: Kruskal MST, проверка связности, динамическая connectivity,
//             cycles detection.
// =====================================================================

class UnionFind {
    constructor(n) {
        // Можно инициализировать from elements тоже. Здесь — 0..n-1
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
        this.size = new Array(n).fill(1);
        this.count = n; // число компонент
    }

    /**
     * Find с path compression — flattens дерево
     */
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    /**
     * Union by rank — присоединяем меньшее дерево к большему
     * Возвращает false если уже в одном множестве
     */
    union(x, y) {
        const rx = this.find(x);
        const ry = this.find(y);
        if (rx === ry) return false;

        if (this.rank[rx] < this.rank[ry]) {
            this.parent[rx] = ry;
            this.size[ry] += this.size[rx];
        } else if (this.rank[rx] > this.rank[ry]) {
            this.parent[ry] = rx;
            this.size[rx] += this.size[ry];
        } else {
            this.parent[ry] = rx;
            this.size[rx] += this.size[ry];
            this.rank[rx]++;
        }

        this.count--;
        return true;
    }

    connected(x, y) {
        return this.find(x) === this.find(y);
    }

    componentSize(x) {
        return this.size[this.find(x)];
    }
}

const uf = new UnionFind(5);
uf.union(0, 1);
uf.union(2, 3);
console.log(uf.connected(0, 1)); // true
console.log(uf.connected(0, 2)); // false
uf.union(1, 2);
console.log(uf.connected(0, 3)); // true
console.log(uf.count); // 2 ({0,1,2,3}, {4})
console.log(uf.componentSize(0)); // 4

module.exports = UnionFind;
