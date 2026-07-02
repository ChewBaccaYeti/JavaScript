// =====================================================================
// Linked List Visualizer / Визуализация односвязного списка через D3.js
// ---------------------------------------------------------------------
// Логика — та же, что в algorithms/data_structures/linked_list.js.
// Рисуем узлы горизонтально, стрелки next между ними.
// =====================================================================

// ---------- 1. Модель ----------
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(value) {
        this.head = new ListNode(value, this.head);
        this.length++;
    }

    append(value) {
        const node = new ListNode(value);
        if (!this.head) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) curr = curr.next;
            curr.next = node;
        }
        this.length++;
    }

    insertAt(index, value) {
        if (index < 0 || index > this.length)
            throw new RangeError('Out of bounds');
        if (index === 0) return this.prepend(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) prev = prev.next;
        prev.next = new ListNode(value, prev.next);
        this.length++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length)
            throw new RangeError('Out of bounds');
        let removed;
        if (index === 0) {
            removed = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) prev = prev.next;
            removed = prev.next;
            prev.next = removed.next;
        }
        this.length--;
        return removed.value;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    // Возвращаем массив узлов (для подсветки по ссылке)
    toNodes() {
        const arr = [];
        let curr = this.head;
        while (curr) {
            arr.push(curr);
            curr = curr.next;
        }
        return arr;
    }

    findIndex(value) {
        let curr = this.head;
        let i = 0;
        while (curr) {
            if (curr.value === value) return i;
            curr = curr.next;
            i++;
        }
        return -1;
    }
}

// ---------- 2. D3 рендер ----------
const LL_CANVAS = '#ll-canvas';
const LL_NODE_W = 60;
const LL_NODE_H = 40;
const LL_GAP = 40; // расстояние между узлами
const LL_ROW_Y = 60; // вертикальный сдвиг ряда
const LL_HEAD_PAD = 60; // место под "head" стрелку

const list = new LinkedList();

function llRender() {
    const container = document.querySelector(LL_CANVAS);
    container.innerHTML = '';

    if (!list.head) {
        container.innerHTML =
            '<p style="text-align:center;color:#8892a6;padding:40px;">Empty list. head → null</p>';
        return;
    }

    const nodes = list.toNodes();
    const totalW = LL_HEAD_PAD + nodes.length * (LL_NODE_W + LL_GAP) + 60;
    const totalH = 150;

    const svg = d3
        .select(LL_CANVAS)
        .append('svg')
        .attr('width', totalW)
        .attr('height', totalH);

    // Определяем маркер стрелки (arrowhead)
    svg.append('defs')
        .append('marker')
        .attr('id', 'll-arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 8)
        .attr('refY', 0)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#4fc3f7');

    // "head" label + стрелка к первому узлу
    svg.append('text')
        .attr('x', 10)
        .attr('y', LL_ROW_Y + LL_NODE_H / 2)
        .attr('fill', '#4fc3f7')
        .attr('font-weight', '700')
        .attr('dominant-baseline', 'central')
        .text('head');

    svg.append('line')
        .attr('x1', 55)
        .attr('y1', LL_ROW_Y + LL_NODE_H / 2)
        .attr('x2', LL_HEAD_PAD - 5)
        .attr('y2', LL_ROW_Y + LL_NODE_H / 2)
        .attr('stroke', '#4fc3f7')
        .attr('stroke-width', 2)
        .attr('marker-end', 'url(#ll-arrow)');

    // Узлы
    const nodeG = svg
        .selectAll('g.ll-node')
        .data(nodes)
        .join('g')
        .attr('class', 'll-node')
        .attr('data-idx', (_, i) => i)
        .attr(
            'transform',
            (_, i) =>
                `translate(${LL_HEAD_PAD + i * (LL_NODE_W + LL_GAP)}, ${LL_ROW_Y})`,
        );

    // Прямоугольник каждого узла (два "отсека": value | next)
    nodeG
        .append('rect')
        .attr('width', LL_NODE_W)
        .attr('height', LL_NODE_H)
        .attr('rx', 4);

    // Разделитель между value и next
    nodeG
        .append('line')
        .attr('x1', LL_NODE_W * 0.6)
        .attr('y1', 0)
        .attr('x2', LL_NODE_W * 0.6)
        .attr('y2', LL_NODE_H)
        .attr('stroke', '#2d3651');

    // Значение
    nodeG
        .append('text')
        .attr('class', 'll-value')
        .attr('x', LL_NODE_W * 0.3)
        .attr('y', LL_NODE_H / 2)
        .text(d => d.value);

    // Метка "next"
    nodeG
        .append('text')
        .attr('class', 'll-next')
        .attr('x', LL_NODE_W * 0.8)
        .attr('y', LL_NODE_H / 2)
        .text('•');

    // Индекс под узлом
    nodeG
        .append('text')
        .attr('class', 'll-index')
        .attr('x', LL_NODE_W / 2)
        .attr('y', LL_NODE_H + 18)
        .text((_, i) => `[${i}]`);

    // Стрелки между узлами
    for (let i = 0; i < nodes.length - 1; i++) {
        const x1 = LL_HEAD_PAD + i * (LL_NODE_W + LL_GAP) + LL_NODE_W;
        const x2 = LL_HEAD_PAD + (i + 1) * (LL_NODE_W + LL_GAP) - 2;
        svg.append('line')
            .attr('class', 'll-link')
            .attr('x1', x1)
            .attr('y1', LL_ROW_Y + LL_NODE_H / 2)
            .attr('x2', x2)
            .attr('y2', LL_ROW_Y + LL_NODE_H / 2)
            .attr('stroke', '#4fc3f7')
            .attr('stroke-width', 2)
            .attr('marker-end', 'url(#ll-arrow)');
    }

    // Финальный NULL
    const lastX =
        LL_HEAD_PAD + (nodes.length - 1) * (LL_NODE_W + LL_GAP) + LL_NODE_W;
    svg.append('line')
        .attr('x1', lastX)
        .attr('y1', LL_ROW_Y + LL_NODE_H / 2)
        .attr('x2', lastX + LL_GAP - 5)
        .attr('y2', LL_ROW_Y + LL_NODE_H / 2)
        .attr('stroke', '#4fc3f7')
        .attr('stroke-width', 2)
        .attr('marker-end', 'url(#ll-arrow)');
    svg.append('text')
        .attr('x', lastX + LL_GAP + 5)
        .attr('y', LL_ROW_Y + LL_NODE_H / 2)
        .attr('fill', '#8892a6')
        .attr('font-weight', '600')
        .attr('dominant-baseline', 'central')
        .text('null');
}

// ---------- 3. Подсветка + анимации ----------
function llNodeEl(idx) {
    return document.querySelector(`${LL_CANVAS} .ll-node[data-idx="${idx}"]`);
}
function llClearClasses() {
    document
        .querySelectorAll(`${LL_CANVAS} .ll-node`)
        .forEach(el => el.classList.remove('highlight', 'found', 'visited'));
}
const llSleep = ms => new Promise(r => setTimeout(r, ms));

async function llTraverse() {
    llClearClasses();
    const total = list.length;
    for (let i = 0; i < total; i++) {
        const el = llNodeEl(i);
        if (el) el.classList.add('visited');
        setLLResult(`Visited [${i}] = ${list.toNodes()[i].value}`);
        await llSleep(400);
    }
    setLLStatus(`Traversed ${total} nodes. Time: O(n).`);
}

async function llFind(value) {
    llClearClasses();
    const nodes = list.toNodes();
    for (let i = 0; i < nodes.length; i++) {
        const el = llNodeEl(i);
        if (el) el.classList.add('highlight');
        await llSleep(400);
        if (nodes[i].value === value) {
            el.classList.remove('highlight');
            el.classList.add('found');
            setLLStatus(`Found ${value} at index [${i}] after ${i + 1} steps.`);
            return;
        }
    }
    setLLStatus(`${value} not in list. Traversed ${nodes.length} nodes.`);
}

async function llReverseAnimated() {
    // Подсветка "swapping" — по одному узлу.
    // Реальный reverse делаем сразу, потом просто рендерим.
    llClearClasses();
    const nodes = list.toNodes();
    for (let i = 0; i < nodes.length; i++) {
        const el = llNodeEl(i);
        if (el) el.classList.add('highlight');
        await llSleep(250);
    }
    list.reverse();
    llRender();
    setLLStatus(`Reversed in-place. O(n) time, O(1) space.`);
}

// ---------- 4. UI ----------
function setLLStatus(msg) {
    document.getElementById('ll-status').textContent = msg;
}
function setLLResult(msg) {
    document.getElementById('ll-result').textContent = msg;
}
function getLLValue() {
    const raw = document.getElementById('ll-value').value;
    if (raw === '') {
        setLLStatus('Enter a value first.');
        return null;
    }
    const n = Number(raw);
    return Number.isNaN(n) ? raw : n;
}
function getLLIndex() {
    const raw = document.getElementById('ll-index').value;
    if (raw === '') return null;
    const n = Number(raw);
    return Number.isNaN(n) ? null : n;
}

document.querySelectorAll('[data-ll-action]').forEach(btn => {
    btn.addEventListener('click', async () => {
        const action = btn.dataset.llAction;
        try {
            if (action === 'prepend') {
                const v = getLLValue();
                if (v === null) return;
                list.prepend(v);
                llRender();
                setLLStatus(`Prepended ${v}. Length: ${list.length}. O(1).`);
                setLLResult('');
            } else if (action === 'append') {
                const v = getLLValue();
                if (v === null) return;
                list.append(v);
                llRender();
                setLLStatus(`Appended ${v}. Length: ${list.length}. O(n).`);
                setLLResult('');
            } else if (action === 'insert-at') {
                const v = getLLValue();
                const idx = getLLIndex();
                if (v === null || idx === null)
                    return setLLStatus('Need both value and index.');
                list.insertAt(idx, v);
                llRender();
                setLLStatus(`Inserted ${v} at [${idx}]. O(n).`);
                setLLResult('');
            } else if (action === 'remove-at') {
                const idx = getLLIndex();
                if (idx === null) return setLLStatus('Need index.');
                const removed = list.removeAt(idx);
                llRender();
                setLLStatus(`Removed [${idx}] = ${removed}. O(n).`);
                setLLResult('');
            } else if (action === 'find') {
                const v = getLLValue();
                if (v === null) return;
                await llFind(v);
            } else if (action === 'reverse') {
                if (!list.head) return setLLStatus('List is empty.');
                await llReverseAnimated();
                setLLResult('');
            } else if (action === 'traverse') {
                if (!list.head) return setLLStatus('List is empty.');
                await llTraverse();
            } else if (action === 'reset') {
                list.head = null;
                list.length = 0;
                llRender();
                setLLStatus('List cleared.');
                setLLResult('');
            } else if (action === 'seed') {
                list.head = null;
                list.length = 0;
                [10, 20, 30, 40, 50].forEach(v => list.append(v));
                llRender();
                setLLStatus('Loaded sample: 10 → 20 → 30 → 40 → 50');
                setLLResult('');
            }
        } catch (err) {
            setLLStatus(`Error: ${err.message}`);
        }
    });
});

// Начальный список
[10, 20, 30, 40, 50].forEach(v => list.append(v));
llRender();
