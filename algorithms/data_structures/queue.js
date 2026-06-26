// =====================================================================
// Queue / Очередь — FIFO (First In, First Out)
// ---------------------------------------------------------------------
// Операции:
//   enqueue(x) — O(1)
//   dequeue()  — O(1)
//   peek()     — O(1)
//
// Реализация на массиве с shift даёт O(n) на dequeue. Здесь правильная
// реализация через индекс-указатель (амортизированно O(1)).
// Применение: BFS, очереди задач, scheduling, event loop.
// =====================================================================

class Queue {
    constructor() {
        this.items = [];
        this.head = 0; // индекс начала очереди
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) return undefined;
        const item = this.items[this.head];
        this.items[this.head] = undefined; // освобождаем ссылку (GC)
        this.head++;

        // Периодически "сжимаем" массив, чтобы не рос бесконечно
        if (this.head > 50 && this.head * 2 > this.items.length) {
            this.items = this.items.slice(this.head);
            this.head = 0;
        }

        return item;
    }

    peek() {
        return this.items[this.head];
    }

    isEmpty() {
        return this.head >= this.items.length;
    }

    size() {
        return this.items.length - this.head;
    }
}

// --- Circular Queue (ring buffer) — фиксированный размер, без пересоздания ---
class CircularQueue {
    constructor(capacity) {
        this.buffer = new Array(capacity);
        this.capacity = capacity;
        this.head = 0;
        this.tail = 0;
        this.count = 0;
    }

    enqueue(item) {
        if (this.count === this.capacity) throw new Error('Queue full');
        this.buffer[this.tail] = item;
        this.tail = (this.tail + 1) % this.capacity;
        this.count++;
    }

    dequeue() {
        if (this.count === 0) return undefined;
        const item = this.buffer[this.head];
        this.buffer[this.head] = undefined;
        this.head = (this.head + 1) % this.capacity;
        this.count--;
        return item;
    }
}

const q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
console.log(q.dequeue()); // 'a'
console.log(q.peek()); // 'b'

module.exports = { Queue, CircularQueue };
