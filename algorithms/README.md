# Algorithms — Reference Database

Классические алгоритмы для подготовки к собеседованиям. Каждый алгоритм
представлен в двух языках: JavaScript и Python. Стиль соответствует
`js_trainee/`: подробные RU/EN комментарии, объяснение каждого шага.

## Структура

```
algorithms/
├── sorting/         # сортировки
├── searching/       # поиск
├── math/            # вычислительные/числовые
├── graph/           # графовые
├── dp/              # динамическое программирование
├── strings/         # строковые
└── data_structures/ # структуры данных
```

## Таблица сложностей (worst-case если не указано иначе)

### Sorting

| Алгоритм  | Время      | Память   | Stable | In-place |
| --------- | ---------- | -------- | ------ | -------- |
| Bubble    | O(n²)      | O(1)     | ✅     | ✅       |
| Selection | O(n²)      | O(1)     | ❌     | ✅       |
| Insertion | O(n²)      | O(1)     | ✅     | ✅       |
| Merge     | O(n log n) | O(n)     | ✅     | ❌       |
| Quick     | O(n²)\*    | O(log n) | ❌     | ✅       |
| Heap      | O(n log n) | O(1)     | ❌     | ✅       |
| Counting  | O(n + k)   | O(k)     | ✅     | ❌       |
| Radix     | O(d·(n+k)) | O(n+k)   | ✅     | ❌       |

\* avg O(n log n)

### Searching

| Алгоритм      | Время        | Условие                        |
| ------------- | ------------ | ------------------------------ |
| Linear        | O(n)         | любой массив                   |
| Binary        | O(log n)     | отсортированный                |
| Jump          | O(√n)        | отсортированный                |
| Interpolation | O(log log n) | равномерное распределение      |
| Exponential   | O(log n)     | отсортированный, неогр. размер |

### Math

| Алгоритм              | Время          | Описание             |
| --------------------- | -------------- | -------------------- |
| Fibonacci (memo)      | O(n)           | n-ое число Фибоначчи |
| Factorial             | O(n)           | n!                   |
| GCD (Euclidean)       | O(log min)     | НОД                  |
| Sieve of Eratosthenes | O(n log log n) | простые до n         |
| Fast Power            | O(log n)       | a^b                  |
| Prime check (Miller)  | O(k log³ n)    | проверка на простоту |

### Graph

| Алгоритм         | Время          | Назначение                 |
| ---------------- | -------------- | -------------------------- |
| BFS              | O(V + E)       | кратч. путь в невзв. графе |
| DFS              | O(V + E)       | обход, циклы, компоненты   |
| Dijkstra         | O((V+E) log V) | кратч. путь, неотр. веса   |
| Bellman-Ford     | O(V·E)         | кратч. путь, отриц. веса   |
| Kruskal MST      | O(E log E)     | мин. остовное дерево       |
| Topological Sort | O(V + E)       | DAG упорядочивание         |

### Dynamic Programming

| Задача        | Время      | Память |
| ------------- | ---------- | ------ |
| 0/1 Knapsack  | O(n·W)     | O(n·W) |
| LCS           | O(n·m)     | O(n·m) |
| LIS           | O(n log n) | O(n)   |
| Edit Distance | O(n·m)     | O(n·m) |
| Coin Change   | O(n·amt)   | O(amt) |

### Strings

| Алгоритм    | Время      | Назначение           |
| ----------- | ---------- | -------------------- |
| KMP         | O(n + m)   | поиск подстроки      |
| Rabin-Karp  | O(n + m)\* | поиск с хешированием |
| Z-algorithm | O(n + m)   | префикс-функция Z    |

\* avg, worst O(n·m)

### Data Structures

| Структура   | Доступ   | Поиск    | Вставка  | Удаление |
| ----------- | -------- | -------- | -------- | -------- |
| Stack       | O(n)     | O(n)     | O(1)     | O(1)     |
| Queue       | O(n)     | O(n)     | O(1)     | O(1)     |
| Linked List | O(n)     | O(n)     | O(1)\*   | O(1)\*   |
| Binary Tree | O(log n) | O(log n) | O(log n) | O(log n) |
| Trie        | O(L)     | O(L)     | O(L)     | O(L)     |
| Union-Find  | -        | α(n)     | α(n)     | -        |

\* при наличии ссылки на узел. α — обратная функция Аккермана (~константа).

## Как пользоваться

Каждый файл самодостаточен: запусти `node algorithms/sorting/bubble.js` или
`python algorithms/sorting/bubble.py`, чтобы увидеть пример работы.

## Запомни главное

1. **Trade-offs**: время vs память, читаемость vs скорость, простота vs
   обобщённость
2. **Edge cases**: пустой вход, один элемент, дубликаты, отрицательные,
   переполнение
3. **Asymptotics**: всегда указывай Big-O в комментариях, это первое, что
   спросят
