// =====================================================================
// Trie / Префиксное дерево (бор)
// ---------------------------------------------------------------------
// Дерево, где каждый узел = символ. Путь от корня = строка.
// Операции (L = длина слова):
//   insert        — O(L)
//   search        — O(L)
//   startsWith    — O(L)
//   delete        — O(L)
//
// Применение: автодополнение, T9, словари, IP routing, проверка орфографии.
// =====================================================================

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false; // помечает конец слова
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const ch of word) {
            if (!node.children.has(ch)) {
                node.children.set(ch, new TrieNode());
            }
            node = node.children.get(ch);
        }
        node.isEnd = true;
    }

    search(word) {
        const node = this._traverse(word);
        return node !== null && node.isEnd;
    }

    startsWith(prefix) {
        return this._traverse(prefix) !== null;
    }

    _traverse(s) {
        let node = this.root;
        for (const ch of s) {
            if (!node.children.has(ch)) return null;
            node = node.children.get(ch);
        }
        return node;
    }

    /**
     * Находит все слова с данным префиксом.
     */
    autocomplete(prefix) {
        const node = this._traverse(prefix);
        if (!node) return [];

        const results = [];
        this._collect(node, prefix, results);
        return results;
    }

    _collect(node, path, results) {
        if (node.isEnd) results.push(path);
        for (const [ch, child] of node.children) {
            this._collect(child, path + ch, results);
        }
    }
}

const trie = new Trie();
['apple', 'app', 'apricot', 'banana'].forEach(w => trie.insert(w));
console.log(trie.search('app')); // true
console.log(trie.search('appl')); // false (не полное слово)
console.log(trie.startsWith('appl')); // true
console.log(trie.autocomplete('ap')); // ['apple', 'app', 'apricot']

module.exports = { Trie, TrieNode };
