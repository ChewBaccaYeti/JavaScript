"""
=====================================================================
Binary Search Tree / BST
---------------------------------------------------------------------
Свойство: left < root < right (рекурсивно).
insert/search/delete: O(log n) avg, O(n) worst.
Обходы: inorder, preorder, postorder, level-order (BFS).
=====================================================================
"""
from collections import deque
from typing import List


class TreeNode:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


class BST:
    def __init__(self):
        self.root = None

    def insert(self, value):
        self.root = self._insert(self.root, value)

    def _insert(self, node, value):
        if node is None:
            return TreeNode(value)
        if value < node.value:
            node.left = self._insert(node.left, value)
        elif value > node.value:
            node.right = self._insert(node.right, value)
        return node

    def search(self, value) -> bool:
        curr = self.root
        while curr:
            if value == curr.value:
                return True
            curr = curr.left if value < curr.value else curr.right
        return False

    def delete(self, value):
        self.root = self._delete(self.root, value)

    def _delete(self, node, value):
        if node is None:
            return None
        if value < node.value:
            node.left = self._delete(node.left, value)
        elif value > node.value:
            node.right = self._delete(node.right, value)
        else:
            if node.left is None:
                return node.right
            if node.right is None:
                return node.left

            # In-order successor — мин. в правом поддереве
            succ = node.right
            while succ.left:
                succ = succ.left
            node.value = succ.value
            node.right = self._delete(node.right, succ.value)
        return node

    def inorder(self, node=..., result=None) -> List:
        if node is ...:
            node = self.root
            result = []
        if node is None:
            return result
        self.inorder(node.left, result)
        result.append(node.value)
        self.inorder(node.right, result)
        return result

    def preorder(self, node=..., result=None) -> List:
        if node is ...:
            node = self.root
            result = []
        if node is None:
            return result
        result.append(node.value)
        self.preorder(node.left, result)
        self.preorder(node.right, result)
        return result

    def postorder(self, node=..., result=None) -> List:
        if node is ...:
            node = self.root
            result = []
        if node is None:
            return result
        self.postorder(node.left, result)
        self.postorder(node.right, result)
        result.append(node.value)
        return result

    def level_order(self) -> List:
        result = []
        if not self.root:
            return result
        q = deque([self.root])
        while q:
            node = q.popleft()
            result.append(node.value)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        return result


if __name__ == "__main__":
    tree = BST()
    for v in [5, 3, 7, 1, 4, 6, 8]:
        tree.insert(v)
    print(tree.inorder())     # [1, 3, 4, 5, 6, 7, 8]
    print(tree.level_order()) # [5, 3, 7, 1, 4, 6, 8]
    print(tree.search(4))     # True
    tree.delete(5)
    print(tree.inorder())     # [1, 3, 4, 6, 7, 8]
