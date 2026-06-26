"""
=====================================================================
Stack / Стек — LIFO
---------------------------------------------------------------------
push/pop/peek — O(1)
В Python list работает как стек (append/pop). collections.deque тоже.
=====================================================================
"""


class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)

    def pop(self):
        if self.is_empty():
            return None
        return self._items.pop()

    def peek(self):
        return self._items[-1] if self._items else None

    def is_empty(self) -> bool:
        return not self._items

    def size(self) -> int:
        return len(self._items)


def is_balanced(s: str) -> bool:
    pairs = {")": "(", "]": "[", "}": "{"}
    stack = Stack()
    for ch in s:
        if ch in "([{":
            stack.push(ch)
        elif ch in ")]}":
            if stack.pop() != pairs[ch]:
                return False
    return stack.is_empty()


if __name__ == "__main__":
    s = Stack()
    s.push(1); s.push(2); s.push(3)
    print(s.pop())   # 3
    print(s.peek())  # 2

    print(is_balanced("({[]})"))  # True
    print(is_balanced("({[}])"))  # False
