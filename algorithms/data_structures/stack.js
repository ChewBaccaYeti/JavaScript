// =====================================================================
// Stack / Стек — LIFO (Last In, First Out)
// ---------------------------------------------------------------------
// Операции:
//   push(x) — O(1)
//   pop()   — O(1)
//   peek()  — O(1)
//   size()  — O(1)
//
// В JS массив уже работает как стек (push/pop). Класс ниже для образования.
// Применение: вызовы функций, отмена операций, обход (DFS),
//             валидация скобок, инфикс→постфикс.
// =====================================================================

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) return undefined;
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// --- Пример применения: проверка сбалансированных скобок ---
function isBalanced(s) {
    const pairs = { ')': '(', ']': '[', '}': '{' };
    const stack = new Stack();
    for (const ch of s) {
        if ('([{'.includes(ch)) stack.push(ch);
        else if (')]}'.includes(ch)) {
            if (stack.pop() !== pairs[ch]) return false;
        }
    }
    return stack.isEmpty();
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.pop()); // 3
console.log(s.peek()); // 2

console.log(isBalanced('({[]})')); // true
console.log(isBalanced('({[}])')); // false

module.exports = { Stack, isBalanced };
