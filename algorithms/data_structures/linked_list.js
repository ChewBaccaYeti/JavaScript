// =====================================================================
// Singly Linked List / Односвязный список
// ---------------------------------------------------------------------
// Узел: { value, next }
// Операции:
//   prepend       — O(1)
//   append        — O(n) без tail, O(1) если хранить tail
//   insertAt(k)   — O(n)
//   removeAt(k)   — O(n)
//   reverse       — O(n)
// Применение: реализация стека/очереди, LRU cache, hash table chaining.
// =====================================================================

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

    // Классическая задача — разворот односвязного списка in-place
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

    toArray() {
        const result = [];
        let curr = this.head;
        while (curr) {
            result.push(curr.value);
            curr = curr.next;
        }
        return result;
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
console.log(list.toArray()); // [0, 1, 2, 3]
list.reverse();
console.log(list.toArray()); // [3, 2, 1, 0]

module.exports = { ListNode, LinkedList };
