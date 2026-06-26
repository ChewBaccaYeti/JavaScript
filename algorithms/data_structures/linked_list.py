"""
=====================================================================
Singly Linked List / Односвязный список
---------------------------------------------------------------------
prepend O(1), append O(n), reverse O(n).
=====================================================================
"""


class ListNode:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


class LinkedList:
    def __init__(self):
        self.head = None
        self.length = 0

    def prepend(self, value):
        self.head = ListNode(value, self.head)
        self.length += 1

    def append(self, value):
        node = ListNode(value)
        if not self.head:
            self.head = node
        else:
            curr = self.head
            while curr.next:
                curr = curr.next
            curr.next = node
        self.length += 1

    def insert_at(self, index: int, value):
        if not 0 <= index <= self.length:
            raise IndexError("Out of bounds")
        if index == 0:
            return self.prepend(value)

        prev = self.head
        for _ in range(index - 1):
            prev = prev.next
        prev.next = ListNode(value, prev.next)
        self.length += 1

    def remove_at(self, index: int):
        if not 0 <= index < self.length:
            raise IndexError("Out of bounds")

        if index == 0:
            removed = self.head
            self.head = self.head.next
        else:
            prev = self.head
            for _ in range(index - 1):
                prev = prev.next
            removed = prev.next
            prev.next = removed.next
        self.length -= 1
        return removed.value

    def reverse(self):
        """In-place разворот. Классика собеса."""
        prev = None
        curr = self.head
        while curr:
            curr.next, prev, curr = prev, curr, curr.next
        self.head = prev

    def to_list(self):
        result = []
        curr = self.head
        while curr:
            result.append(curr.value)
            curr = curr.next
        return result


if __name__ == "__main__":
    ll = LinkedList()
    ll.append(1); ll.append(2); ll.append(3)
    ll.prepend(0)
    print(ll.to_list())  # [0, 1, 2, 3]
    ll.reverse()
    print(ll.to_list())  # [3, 2, 1, 0]
