# JavaScript Learning Roadmap — Enflux Trainee Program

Дорожная карта для изучения JS от базовых концепций до продвинутых паттернов.
Каждый уровень включает теорию (reference files), упражнения и практику.

---

## Уровень 1️⃣ — Фундамент (The Basics)

### 1.1 DataTypes & Variables

**Что?** Примитивные типы, typeof, coercion, var/let/const, TDZ, scope

**Файлы:**

- 📖 `Scripts/DataTypes.js` — типы данных, == vs ===, falsy, ?., ??
- 📖 `Scripts/variables.js` — var/let/const, hoisting, scope, redeclaration
    trap

**Упражнения:**

- Определи тип каждого значения (primitives vs objects)
- Вычисли результат coercion: `"5" + 3`, `"5" - 3`, `true + 1`
- Найди опасности var в циклах vs let
- Работа с optional chaining `?.` и nullish coalescing `??`

**Практика:** `playground.js` → SECTION 1 (Data Types)

---

### 1.2 Operators & Control Flow

**Что?** if/else, switch, сравнение, логические операторы, truthy/falsy

**Файлы:**

- 📖 `Scripts/loops/switch_case.js` — switch паттерны

**Упражнения:**

- Напиши декодер для switch (коды → значения)
- Реши цепочку if/else vs switch (когда что лучше)
- Комбинируй логические операторы: `&&`, `||`, `!`

**Практика:** `playground.js` → SECTION 2 (Control Flow)

---

### 1.3 Loops (Essential)

**Что?** for, while, do...while, for...in, for...of, break/continue

**Файлы:**

- 📖 `Scripts/loops/Loops.js` — все типы циклов
- 📖 `Scripts/loops/doWhileFor_break-continue.js` — break/continue детали

**Упражнения:**

- ✅ `loops/exercises.js` — задачи 1-24 (закончено)

**Практика:** `playground.js` → SECTION 3 (Loops)

---

## Уровень 2️⃣ — Структуры Данных (Data Structures)

### 2.1 Arrays (глубоко)

**Что?** Создание, методы (mutate/immutable), iteration, chaining, search, sort

**Файлы:**

- 📖 `Scripts/Arrays.js` — полный каталог методов
- 📖 `arrays/array_methods/` — методы в глубину (forEach, map, filter,
    reduce...)
- 📖 `arrays/arrays_examples/` — прикладные примеры

**Упражнения:**

- Трансформируй массив: map, filter, find
- Вычисли: reduce, some, every
- Сортировка: sort, с кастомным comparator
- Immutable операции: spread, slice vs splice
- Вложенные массивы: flat, flatMap

**Практика:** `playground.js` → SECTION 4 (Arrays)

---

### 2.2 Objects (глубоко)

**Что?** Создание, методы, iteration (for...in, Object.entries, Object.keys),
descriptors, freeze/seal, clone

**Файлы:**

- 📖 `Scripts/Objects.js` — Object.\*, descriptors, freeze, clone, **proto**
- 📖 `objects/` — создание, методы, примеры (friends, cart)

**Упражнения:**

- Вложенные объекты: доступ, изменение, clone (shallow vs structuredClone)
- Object.entries/keys/values для iteration
- freeze vs seal (когда что?)
- Property descriptors: configurable, enumerable, writable

**Практика:** `playground.js` → SECTION 5 (Objects)

---

## Уровень 3️⃣ — Functions & Scope (Critical)

### 3.1 Function Fundamentals

**Что?** Declaration vs Expression, hoisting, return, scope, parameters
(default, rest, spread)

**Файлы:**

- 📖 `Scripts/functions/func_decl_expr.js` — decl vs expr, hoisting
- 📖 `Scripts/functions/func.js` — параметры, return, scope
- 📖 `Scripts/functions/func_arrow.js` — arrow functions, this binding

**Упражнения:**

- ✅ `functions/exercises.js` — задачи 1-16 (базовые функции, arrow, params)

**Практика:** `playground.js` → SECTION 6 (Functions)

---

### 3.2 Advanced Functions: Closures & Scope

**Что?** Closure паттерны, private state, factory functions, currying, scope
chain

**Файлы:**

- 📖 `Scripts/callback_closures/` — callbacks, closures (factories, counter,
    currying)
- 📖 `Scripts/Middleware.js` — middleware паттерн (closure application)

**Упражнения:**

- Closure: counter (инкремент, не глобальный state)
- Closure: private data (bank account, user profile)
- Factory: createUser, createLogger
- Currying: add(2)(3), multiply(2)(3)(4)
- Memoization: fibonacci кэширование

**Практика:** `playground.js` → SECTION 7 (Closures & Advanced Functions)

---

### 3.3 this & Context

**Что?** this binding правила, call/apply/bind, method vs function, arrow
lexical this

**Файлы:**

- 📖 `Scripts/this/` — binding rules, call/apply/bind, arrows

**Упражнения:**

- Method binding: когда `this` теряется
- call/apply/bind: переопределение context
- Стрелочная функция vs обычная в методах
- Event handler binding

**Практика:** `playground.js` → SECTION 8 (this & Context)

---

## Уровень 4️⃣ — Асинхронность & Callbacks

### 4.1 Callbacks & Error-First Pattern

**Что?** Callback hell, error-first callbacks, pyramid of doom

**Файлы:**

- 📖 `Scripts/Callback.js` — callback pattern, error-first

**Упражнения:**

- Error-first callbacks: (err, data) => { if (err) ... }
- Цепочка callbacks (deep nesting)
- Асинхронные операции: setTimeout, file read, API call

**Практика:** `playground.js` → SECTION 9 (Callbacks)

---

### 4.2 Promises (Foundation)

**Что?** Promise states, .then/.catch/.finally, chaining, error handling,
all/race/any

**Файлы:**

- 📖 `js_trainee/apps/promises/` — Promise примеры с Bootstrap

**Упражнения:**

- Создай Promise: resolve/reject
- Chaining: .then(...).then(...).catch(...)
- Promise.all — когда все выполнены
- Promise.race — кто первый
- .finally() — cleanup логика

**Практика:** `playground.js` → SECTION 10 (Promises)

---

### 4.3 Async/Await (Modern)

**Что?** async функции, await, try/catch, sequential vs parallel

**Файлы:**

- 📖 `js_trainee/apps/async-await/` — async/await CRUD примеры

**Упражнения:**

- Переделай Promise-цепочку в async/await
- Error handling: try/catch vs .catch()
- Sequential: await одно после другого
- Parallel: Promise.all с await

**Практика:** `playground.js` → SECTION 11 (Async/Await)

---

## Уровень 5️⃣ — OOP & Prototypes

### 5.1 Prototypes & Prototype Chain

**Что?** **proto**, prototype, Object.create, constructor functions, instanceof

**Файлы:**

- 📖 `Scripts/prototypes/` — prototype chain, constructor functions,
    Object.create, **proto**

**Упражнения:**

- Prototype chain: child → parent → Object.prototype
- Constructor functions: function User(name) { ... }
- Object.create: создание с кастомным прототипом
- instanceof: проверка наследования

**Практика:** `playground.js` → SECTION 12 (Prototypes)

---

### 5.2 Classes (Modern OOP)

**Что?** class syntax, constructor, methods, inheritance (extends/super),
instanceof, private (#), getters/setters

**Файлы:**

- 📖 `Scripts/classes/` — class syntax, inheritance, getters/setters, private
    fields

**Упражнения:**

- Базовый класс: constructor, методы
- Наследование: extends, super()
- Переопределение методов: override
- Приватные поля: #privateField
- Getters/setters: get name() { }, set name(val) { }

**Практика:** `playground.js` → SECTION 13 (Classes & OOP)

---

## Уровень 6️⃣ — Продвинутые Паттерны

### 6.1 Recursion

**Что?** Рекурсивные алгоритмы, base case, memoization, tail recursion

**Файлы:**

- 📖 `Scripts/Recursion.js` — factorial, fibonacci, memoization, iterative
    form

**Упражнения:**

- Factorial, fibonacci (с memoization)
- Tree traversal: DFS, BFS
- Permutations, combinations
- Ханойские башни

**Практика:** `playground.js` → SECTION 14 (Recursion)

---

### 6.2 Functional Programming

**Что?** Pure functions, immutability, composition, HOF, map/filter/reduce
chains

**Файлы:**

- 📖 `arrays/array_methods/` — chaining, reduce complexity

**Упражнения:**

- Compose функции: compose(f, g)(x) = f(g(x))
- Pipe: pipe(f, g)(x) = g(f(x))
- Pure vs impure functions
- Immutable updates: spread, Object.assign

**Практика:** `playground.js` → SECTION 15 (Functional Programming)

---

### 6.3 Design Patterns

**Что?** Singleton, Factory, Observer, Decorator, Strategy

**Файлы:**

- 📖 `Scripts/Middleware.js` — Middleware (Observer-like)

**Упражнения:**

- Factory: создание объектов
- Singleton: единственный экземпляр
- Observer: subscribe/unsubscribe
- Decorator: функция оборачивает функцию

**Практика:** `playground.js` → SECTION 16 (Design Patterns)

---

## Уровень 7️⃣ — DOM & Browser (если нужно)

### 7.1 DOM Manipulation

**Что?** querySelector, attributes, classList, innerHTML vs textContent

**Файлы:**

- 📖 `Scripts/DOM/` — DOM методы

**Упражнения:**

- Поиск элементов: getElementById, querySelector, querySelectorAll
- Изменение: innerHTML, textContent, setAttribute
- Классы: classList.add/remove/toggle

**Практика:** `js_trainee/apps/` (DOM driven apps)

---

### 7.2 Events & Delegation

**Что?** Event listeners, event bubbling, delegation, preventDefault,
stopPropagation

**Файлы:**

- 📖 `Scripts/events/`, `Scripts/delegation/` — event handling, delegation

**Упражнения:**

- Event listener: click, change, submit
- Event delegation: один listener на родителе для многих children
- Event object: e.target, e.currentTarget, e.preventDefault()

**Практика:** `js_trainee/apps/` (event-driven apps)

---

## Уровень 8️⃣ — Real-World (Node.js & Backend)

### 8.1 Node.js Basics

**Что?** require/module.exports, npm, file system, streams

**Упражнения:**

- require: импорт модулей
- module.exports: экспорт функций
- fs: читать/писать файлы
- Callbacks vs promises в Node API

**Практика:** `nested_projects/` примеры

---

### 8.2 HTTP & Express

**Что?** REST API, routing, middleware, request/response, status codes

**Файлы:**

- 📖 `nested_projects/mongoose/` — Express + MongoDB API
- 📖 `nested_projects/JWT_token/` — auth, middleware

**Упражнения:**

- GET/POST/PUT/DELETE endpoints
- Middleware: logging, auth, validation
- Request body parsing: JSON
- Error handling: try/catch, status codes

**Практика:** `nested_projects/mongoose/`, `nested_projects/JWT_token/`

---

### 8.3 Databases & Queries

**Что?** SQL/NoSQL, queries, relationships, transactions, ORM (Mongoose)

**Файлы:**

- 📖 `nested_projects/mongoose/` — Mongoose schemas, queries

**Упражнения:**

- Schema definition: fields, types, validation
- CRUD: create, read, update, delete
- Relationships: references, populate
- Aggregation, filtering, sorting

**Практика:** `nested_projects/mongoose/`

---

## Уровень 9️⃣ — React & Modern Frontend (если нужно)

### 9.1 React Basics

**Что?** Components, JSX, props, state, hooks, re-render

**Файлы:**

- 📖 `nested_projects/CEC/` — React TypeScript app

**Упражнения:**

- Functional components, props
- useState, useEffect
- Conditional rendering
- Lists: map, keys

---

## 🎯 Как Пользоваться Дорожной Картой

1. **Выбери уровень** по текущему скиллу (1-9)
2. **Прочитай reference файлы** (📖)
3. **Реши упражнения** (✅) или создай новые в `exercises.js`
4. **Практикуй в `playground.js`** (SECTION номер)
5. **Повтори** → закрепи → переходи дальше

---

## 📊 Зависимости (Prerequisites)

``` -
Level 1 (Basics)
    ↓
Level 2 (Data Structures)
    ↓
Level 3 (Functions) ← CRITICAL
    ↓
Level 4 (Async)
    ↓
Level 5 (OOP) + Level 6 (Patterns)
    ↓
Level 7-9 (Specializations)
```

**Совет:** Не прыгай через уровни. Особенно Level 3 (Functions) — там вся мощь
JS.

---

## 🚀 Быстрый Чек-лист

- [ ] Level 1: DataTypes, Variables, Control Flow
- [ ] Level 1: Loops (все типы)
- [ ] Level 2: Arrays (все методы, chaining)
- [ ] Level 2: Objects (iteration, clone, descriptors)
- [ ] Level 3: Functions (decl, expr, arrow)
- [ ] Level 3: Closures (counter, factory, private state)
- [ ] Level 3: this & Context (binding, call/apply/bind)
- [ ] Level 4: Callbacks (error-first)
- [ ] Level 4: Promises (then/catch/finally, all/race)
- [ ] Level 4: Async/Await (sequential, parallel, error handling)
- [ ] Level 5: Prototypes (chain, constructor, Object.create)
- [ ] Level 5: Classes (syntax, inheritance, private, getters/setters)
- [ ] Level 6: Recursion (memoization, algorithms)
- [ ] Level 6: Functional Programming (compose, pure functions)
- [ ] Level 6: Design Patterns (factory, singleton, observer)

---

## 📝 Ссылка на Playground

Все практические примеры и эксперименты → **`playground.js`** в корне репо.
