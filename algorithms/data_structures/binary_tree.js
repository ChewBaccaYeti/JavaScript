// =====================================================================
// Binary Search Tree / Двоичное дерево поиска
// ---------------------------------------------------------------------
// Свойство BST: для каждого узла все значения в левом поддереве меньше,
//               в правом — больше.
// Операции (avg, при сбалансированном):
//   insert/search/delete — O(log n)
// Worst case (вырожденное в список) — O(n). Для гарантии — AVL, RB-tree.
//
// Обходы:
//   inorder    — left, root, right     → отсортированный порядок в BST
//   preorder   — root, left, right     → для сериализации
//   postorder  — left, right, root     → для удаления
//   level-order (BFS) — по уровням
// =====================================================================

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        if (!node) return new TreeNode(value);
        if (value < node.value) node.left = this._insert(node.left, value);
        else if (value > node.value)
            node.right = this._insert(node.right, value);
        // дубликаты игнорируем
        return node;
    }

    search(value) {
        let curr = this.root;
        while (curr) {
            if (value === curr.value) return true;
            curr = value < curr.value ? curr.left : curr.right;
        }
        return false;
    }

    delete(value) {
        this.root = this._delete(this.root, value);
    }

    _delete(node, value) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this._delete(node.left, value);
        } else if (value > node.value) {
            node.right = this._delete(node.right, value);
        } else {
            // Нашли узел для удаления — 3 случая
            if (!node.left) return node.right; // нет левого
            if (!node.right) return node.left; // нет правого

            // Оба есть: ищем in-order successor (минимум в правом поддереве)
            let successor = node.right;
            while (successor.left) successor = successor.left;
            node.value = successor.value;
            node.right = this._delete(node.right, successor.value);
        }
        return node;
    }

    // --- Обходы ---
    inorder(node = this.root, result = []) {
        if (!node) return result;
        this.inorder(node.left, result);
        result.push(node.value);
        this.inorder(node.right, result);
        return result;
    }

    preorder(node = this.root, result = []) {
        if (!node) return result;
        result.push(node.value);
        this.preorder(node.left, result);
        this.preorder(node.right, result);
        return result;
    }

    postorder(node = this.root, result = []) {
        if (!node) return result;
        this.postorder(node.left, result);
        this.postorder(node.right, result);
        result.push(node.value);
        return result;
    }

    levelOrder() {
        const result = [];
        if (!this.root) return result;
        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return result;
    }
}

const tree = new BST();
[5, 3, 7, 1, 4, 6, 8].forEach(v => tree.insert(v));
console.log(tree.inorder()); // [1, 3, 4, 5, 6, 7, 8] — отсортировано
console.log(tree.levelOrder()); // [5, 3, 7, 1, 4, 6, 8]
console.log(tree.search(4)); // true
tree.delete(5);
console.log(tree.inorder()); // [1, 3, 4, 6, 7, 8]

module.exports = { TreeNode, BST };
