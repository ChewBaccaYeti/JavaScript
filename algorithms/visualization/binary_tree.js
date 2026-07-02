// =====================================================================
// BST Visualizer / Визуализация двоичного дерева поиска через D3.js
// ---------------------------------------------------------------------
// Логика BST — та же, что в algorithms/data_structures/binary_tree.js.
// Здесь мы оборачиваем её в UI и рисуем через d3.tree() layout.
// =====================================================================

// ---------- 1. Модель данных (BST) ----------
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
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
        return node;
    }

    // Возвращает путь узлов, пройденных при поиске (для подсветки).
    // Path of visited nodes — used for highlight animation.
    searchPath(value) {
        const path = [];
        let curr = this.root;
        while (curr) {
            path.push(curr);
            if (value === curr.value) return { found: true, path };
            curr = value < curr.value ? curr.left : curr.right;
        }
        return { found: false, path };
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
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            let succ = node.right;
            while (succ.left) succ = succ.left;
            node.value = succ.value;
            node.right = this._delete(node.right, succ.value);
        }
        return node;
    }

    // Traversals — возвращают массив узлов (не значений),
    // чтобы визуализация могла подсветить каждый по очереди.
    inorder(node = this.root, out = []) {
        if (!node) return out;
        this.inorder(node.left, out);
        out.push(node);
        this.inorder(node.right, out);
        return out;
    }
    preorder(node = this.root, out = []) {
        if (!node) return out;
        out.push(node);
        this.preorder(node.left, out);
        this.preorder(node.right, out);
        return out;
    }
    postorder(node = this.root, out = []) {
        if (!node) return out;
        this.postorder(node.left, out);
        this.postorder(node.right, out);
        out.push(node);
        return out;
    }
    levelorder() {
        const out = [];
        if (!this.root) return out;
        const q = [this.root];
        while (q.length) {
            const n = q.shift();
            out.push(n);
            if (n.left) q.push(n.left);
            if (n.right) q.push(n.right);
        }
        return out;
    }
}

// ---------- 2. D3 рендер ----------
// d3.tree() ожидает hierarchy — у нас "sparse" бинарное дерево
// (левый может быть null, правый есть). Оборачиваем в объекты,
// где children всегда массив (пустые слоты — placeholder для симметрии).
function toHierarchy(node) {
    if (!node) return null;
    const h = { value: node.value, ref: node, children: [] };
    // Симметричная раскладка: если есть только правый, добавляем "фантом" слева.
    // Без этого правый ребёнок ушёл бы под родителя.
    const hasL = !!node.left,
        hasR = !!node.right;
    if (hasL || hasR) {
        h.children.push(
            hasL ? toHierarchy(node.left) : { phantom: true, children: [] },
        );
        h.children.push(
            hasR ? toHierarchy(node.right) : { phantom: true, children: [] },
        );
    }
    return h;
}

const CANVAS_ID = '#bst-canvas';
const NODE_R = 22;
const LEVEL_H = 80;
const HORIZ_GAP = 60;

const bst = new BST();

function render() {
    const container = document.querySelector(CANVAS_ID);
    container.innerHTML = ''; // очищаем перед перерисовкой

    if (!bst.root) {
        container.innerHTML =
            '<p style="text-align:center;color:#8892a6;padding:40px;">Empty tree</p>';
        return;
    }

    const rootData = toHierarchy(bst.root);
    const root = d3.hierarchy(rootData);

    // d3.tree layout — раскладывает узлы, чтобы не пересекались.
    // .nodeSize([x, y]): фиксированное расстояние независимо от размера контейнера.
    const treeLayout = d3.tree().nodeSize([HORIZ_GAP, LEVEL_H]);
    treeLayout(root);

    // Считаем границы, чтобы отцентровать SVG.
    const xs = root.descendants().map(d => d.x);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const width = Math.max(600, maxX - minX + NODE_R * 4);
    const height = (root.height + 1) * LEVEL_H + NODE_R * 2;

    const svg = d3
        .select(CANVAS_ID)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const g = svg
        .append('g')
        .attr(
            'transform',
            `translate(${width / 2 - (minX + maxX) / 2}, ${NODE_R + 10})`,
        );

    // Links — соединения (фантомы не рисуем)
    g.append('g')
        .selectAll('path')
        .data(root.links().filter(l => !l.target.data.phantom))
        .join('path')
        .attr('class', 'link')
        .attr(
            'd',
            d3
                .linkVertical()
                .x(d => d.x)
                .y(d => d.y),
        );

    // Nodes — реальные узлы (не фантомы)
    const nodes = g
        .append('g')
        .selectAll('g.node')
        .data(root.descendants().filter(d => !d.data.phantom))
        .join('g')
        .attr('class', 'node')
        .attr('data-value', d => d.data.value)
        .attr('transform', d => `translate(${d.x}, ${d.y})`);

    nodes.append('circle').attr('r', NODE_R);
    nodes.append('text').text(d => d.data.value);
}

// ---------- 3. Подсветка узла по значению ----------
function nodeEl(value) {
    return document.querySelector(`${CANVAS_ID} .node[data-value="${value}"]`);
}

function clearClasses() {
    document
        .querySelectorAll(`${CANVAS_ID} .node`)
        .forEach(el => el.classList.remove('highlight', 'found', 'visited'));
}

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function animateTraversal(nodes, className = 'visited', delay = 500) {
    clearClasses();
    const values = [];
    for (const n of nodes) {
        const el = nodeEl(n.value);
        if (el) el.classList.add(className);
        values.push(n.value);
        setTraversalResult(values.join(' → '));
        await sleep(delay);
    }
}

async function animateSearch(value) {
    clearClasses();
    const { found, path } = bst.searchPath(value);
    for (const n of path) {
        const el = nodeEl(n.value);
        if (el) el.classList.add('highlight');
        await sleep(400);
    }
    // Последний в path — либо найденный, либо тупик.
    if (found) {
        const last = path[path.length - 1];
        nodeEl(last.value)?.classList.remove('highlight');
        nodeEl(last.value)?.classList.add('found');
        setStatus(`Found ${value} in ${path.length} steps.`);
    } else {
        setStatus(`${value} not in tree. Traversed ${path.length} nodes.`);
    }
}

// ---------- 4. UI обвязка ----------
function setStatus(msg) {
    document.getElementById('bst-status').textContent = msg;
}
function setTraversalResult(msg) {
    document.getElementById('bst-traversal-result').textContent = msg;
}
function getInputValue() {
    const raw = document.getElementById('bst-value').value;
    const n = Number(raw);
    if (raw === '' || Number.isNaN(n)) {
        setStatus('Enter a number first.');
        return null;
    }
    return n;
}

document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', async () => {
        const action = btn.dataset.action;
        if (action === 'insert') {
            const v = getInputValue();
            if (v === null) return;
            bst.insert(v);
            render();
            setStatus(`Inserted ${v}.`);
            setTraversalResult('');
        } else if (action === 'delete') {
            const v = getInputValue();
            if (v === null) return;
            const { found } = bst.searchPath(v);
            if (!found)
                return setStatus(`${v} not in tree — nothing to delete.`);
            bst.delete(v);
            render();
            setStatus(`Deleted ${v}.`);
            setTraversalResult('');
        } else if (action === 'search') {
            const v = getInputValue();
            if (v === null) return;
            await animateSearch(v);
        } else if (action === 'reset') {
            bst.root = null;
            render();
            setStatus('Tree cleared.');
            setTraversalResult('');
        } else if (action === 'seed') {
            bst.root = null;
            [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45].forEach(v =>
                bst.insert(v),
            );
            render();
            setStatus(
                'Loaded sample: 50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45',
            );
            setTraversalResult('');
        }
    });
});

document.querySelectorAll('[data-traverse]').forEach(btn => {
    btn.addEventListener('click', async () => {
        const type = btn.dataset.traverse;
        if (!bst.root) return setStatus('Tree is empty.');
        const nodes = bst[type]();
        setStatus(`Traversal: ${type}`);
        await animateTraversal(nodes);
    });
});

// Инициализация — сразу подсунуть sample, чтобы было что смотреть.
[50, 30, 70, 20, 40, 60, 80].forEach(v => bst.insert(v));
render();
