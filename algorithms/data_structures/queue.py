"""
=====================================================================
Queue / Очередь — FIFO
---------------------------------------------------------------------
enqueue/dequeue — O(1) через collections.deque.
list НЕ годится: pop(0) — O(n).
=====================================================================
"""
from collections import deque


class Queue:
    def __init__(self):
        self._items = deque()

    def enqueue(self, item):
        self._items.append(item)

    def dequeue(self):
        if not self._items:
            return None
        return self._items.popleft()

    def peek(self):
        return self._items[0] if self._items else None

    def is_empty(self) -> bool:
        return not self._items

    def size(self) -> int:
        return len(self._items)


class CircularQueue:
    """Ring buffer фиксированного размера."""

    def __init__(self, capacity: int):
        self.buffer = [None] * capacity
        self.capacity = capacity
        self.head = 0
        self.tail = 0
        self.count = 0

    def enqueue(self, item):
        if self.count == self.capacity:
            raise OverflowError("Queue full")
        self.buffer[self.tail] = item
        self.tail = (self.tail + 1) % self.capacity
        self.count += 1

    def dequeue(self):
        if self.count == 0:
            return None
        item = self.buffer[self.head]
        self.buffer[self.head] = None
        self.head = (self.head + 1) % self.capacity
        self.count -= 1
        return item


if __name__ == "__main__":
    q = Queue()
    q.enqueue("a"); q.enqueue("b"); q.enqueue("c")
    print(q.dequeue())  # 'a'
    print(q.peek())     # 'b'
