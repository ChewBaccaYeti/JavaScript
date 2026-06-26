"""
=====================================================================
Trie / Префиксное дерево
---------------------------------------------------------------------
insert/search/startsWith — O(L)
Применение: автодополнение, словари, T9.
=====================================================================
"""
from typing import List


class TrieNode:
    __slots__ = ("children", "is_end")

    def __init__(self):
        self.children = {}
        self.is_end = False


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    def search(self, word: str) -> bool:
        node = self._traverse(word)
        return node is not None and node.is_end

    def starts_with(self, prefix: str) -> bool:
        return self._traverse(prefix) is not None

    def _traverse(self, s: str):
        node = self.root
        for ch in s:
            if ch not in node.children:
                return None
            node = node.children[ch]
        return node

    def autocomplete(self, prefix: str) -> List[str]:
        node = self._traverse(prefix)
        if node is None:
            return []
        results = []
        self._collect(node, prefix, results)
        return results

    def _collect(self, node: TrieNode, path: str, results: List[str]) -> None:
        if node.is_end:
            results.append(path)
        for ch, child in node.children.items():
            self._collect(child, path + ch, results)


if __name__ == "__main__":
    t = Trie()
    for w in ["apple", "app", "apricot", "banana"]:
        t.insert(w)
    print(t.search("app"))         # True
    print(t.search("appl"))        # False
    print(t.starts_with("appl"))   # True
    print(t.autocomplete("ap"))    # ['app', 'apple', 'apricot']
