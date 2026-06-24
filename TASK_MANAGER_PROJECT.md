# Progressive Task Management App

**Практическое задание с 5 уровнями сложности.** Каждый уровень добавляет новые
концепции JS и требует рефакторинга предыдущего кода.

**Итоговое приложение**: Полнофункциональное веб-приложение для управления
проектами и задачами с фильтрацией, сортировкой, сохранением данных, обработкой
ошибок и применением design patterns.

---

## Уровень 1: Базовые элементы (Переменные, Функции, DOM)

### Целевой навык

Работа с DOM, обработка событий, простые функции, массивы.

### Требования

1. **HTML структура**:

    - Инпут для названия задачи
    - Кнопка "Add Task"
    - Список задач (div/ul)
    - Счётчик (информация)

2. **JavaScript логика**:
    - Объявить `const tasks = []`
    - Функция `addTask(title)` — добавить объект в массив
    - Функция `renderTasks()` — вывести все задачи в HTML
    - При клике на кнопку → `addTask()` → `renderTasks()`
    - Очистить инпут после добавления
    - Генерировать ID (простой счётчик)

### Подсказки для кодирования

```js
// Как получить значение инпута?
const inputElement = document.querySelector('#taskInput');
const value = inputElement.value;

// Как запустить функцию при клике?
const button = document.querySelector('#addBtn');
button.addEventListener('click', () => {
    // ...
});

// Как создать HTML-строку и добавить в DOM?
const ul = document.querySelector('#taskList');
ul.innerHTML += '<li>' + task.title + '</li>';
// или (лучше):
const li = document.createElement('li');
li.textContent = task.title;
ul.appendChild(li);
```

### Задачи (в порядке решения)

1. ✅ Создать HTML с формой (input, button, список)
2. ✅ Создать массив `tasks` с начальными данными (1-2 задачи)
3. ✅ Реализовать функцию `addTask(title)` — добавляет объект `{ id, title }`
4. ✅ Реализовать `renderTasks()` — выводит все задачи в `<ul>`
5. ✅ Подключить кнопку к функции `addTask()`
6. ✅ Очистить инпут после добавления
7. ✅ Показать количество задач: "Total: 3"

---

## Уровень 2: Объекты, методы, события (OOP основы)

### Целевой навык

Объекты как структуры данных, методы, делегирование событий, условные
рендеринги.

### Требования

1. **Расширить структуру Task**:

    - Каждая задача = объект с свойствами: `id`, `title`, `done`
    - Методы: `toggleDone()`, `delete()`

2. **Функционал**:

    - Отметить задачу как "выполнено" (чекбокс или кнопка)
    - Удалить задачу (кнопка "Delete")
    - Выполненные задачи → серый цвет, зачёркивание

3. **Event Delegation** (важно!):
    - НЕ создавать listener на каждую кнопку
    - 1 listener на весь список → определить, какую задачу кликнули

### Подсказки для кодирования

```js
// Как определить, на какую кнопку кликнули?
ul.addEventListener('click', e => {
    const btn = e.target.closest('button'); // найти ближайшую кнопку
    if (!btn) return;

    const taskId = parseInt(btn.dataset.taskId); // получить data атрибут
    // ...
});

// Как найти задачу по ID?
const task = tasks.find(t => t.id === taskId);

// Как удалить из массива?
tasks = tasks.filter(t => t.id !== taskId); // новый массив без задачи

// Как добавить класс?
element.classList.add('done');
element.classList.remove('done');
element.classList.toggle('done');
```

### CSS для выполненных задач

```css
.task.done {
    text-decoration: line-through;
    color: #999;
    opacity: 0.6;
}

.task.active {
    background: #f0f0f0;
    border-left: 3px solid #007bff;
}
```

### Задачи (в порядке решения)

1. ✅ Изменить структуру `tasks[i]` на объект с методами:

    ```js
    {
      id,
      title,
      done: false,
      toggleDone() { this.done = !this.done; }
    }
    ```

2. ✅ В HTML каждой задачи добавить:

    - Чекбокс или кнопка "Done"
    - Кнопка "Delete"
    - Уникальный `data-id` атрибут

3. ✅ Реализовать Event Delegation:

    - Один listener на `#taskList`
    - При клике на кнопку "Done" → `task.toggleDone()` → `renderTasks()`
    - При клике на "Delete" → удалить из массива → `renderTasks()`

4. ✅ Добавить CSS классы:

    - `.done` для выполненных задач (зачёркивание, серый цвет)
    - `.active` для активной задачи (опционально)

5. ✅ Обновить счётчик:
    - "Total: 3, Done: 1, Remaining: 2"

---

## Уровень 3: Классы, функции высшего порядка, функциональный стиль

### Целевой навык

Классы, методы, `filter()`, `map()`, `reduce()`, чистые функции.

### Требования

1. **Переделать на классы**:

    ```js
    class Task {
      constructor(title) {
        this.id = ???; // как генерировать уникальный ID?
        this.title = title;
        this.done = false;
        this.createdAt = new Date();
      }

      toggleDone() { this.done = !this.done; }
    }

    class TaskList {
      constructor() { this.tasks = []; }
      add(title) { /* ... */ }
      remove(id) { /* ... */ }
      getAll() { return this.tasks; }
      getDone() { /* filter */ }
      getPending() { /* filter */ }
    }
    ```

2. **Функциональный стиль**:

    - Использовать `.filter()`, `.sort()`, `.map()`
    - Методы возвращают новые массивы (immutable)

3. **Фильтрация в UI**:
    - Кнопки: "All", "Done", "Pending"
    - При клике → вызвать метод → перерисовать

### Подсказки для кодирования

```js
// Как создать счётчик ID через замыкание?
function createIdGenerator() {
    let id = 0;
    return () => ++id;
}
const nextId = createIdGenerator();
console.log(nextId()); // 1
console.log(nextId()); // 2

// Как отфильтровать массив?
const doneTasks = this.tasks.filter(t => t.done === true);
const pendingTasks = this.tasks.filter(t => !t.done);

// Как отсортировать?
const sorted = this.tasks.sort((a, b) => {
    return a.createdAt - b.createdAt;
});

// Как подсчитать с reduce?
const doneCount = this.tasks.reduce((sum, t) => {
    return sum + (t.done ? 1 : 0);
}, 0);
```

### Задачи (в порядке решения)

1. ✅ Создать класс `Task` с `constructor`, `toggleDone()`
2. ✅ Реализовать счётчик ID через замыкание (в классе или отдельно)
3. ✅ Создать класс `TaskList` с методами: `add()`, `remove()`, `getAll()`,
   `getDone()`, `getPending()`
4. ✅ В `addTask()` вместо объекта создавать `new Task(title)`
5. ✅ Добавить в HTML три кнопки для фильтрации: "All", "Done", "Pending"
6. ✅ При клике на фильтр → вызвать соответствующий метод → показать
   отфильтрованный список
7. ✅ Показать статистику с `reduce()`:
    - "Total: 5, Done: 2, Remaining: 3"

---

## Уровень 4: Асинхронность, обработка ошибок, сохранение данных

### Целевой навык

`Promise`, `async/await`, `try/catch`, `localStorage`, валидация, loading
состояния.

### Требования

1. **Сохранение в `localStorage`**:

    ```js
    async function saveTasks() {
        // Показать loading
        // Сохранить this.tasks в localStorage
        // Показать "Saved!" сообщение
    }

    async function loadTasks() {
        // Загрузить из localStorage
        // Парсить JSON
        // Обработать ошибки
    }
    ```

2. **Имитация API (с задержкой)**:

    ```js
    async function fetchTaskFromServer(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.3) {
                    resolve(task);
                } else {
                    reject(new Error('Network error'));
                }
            }, 1000);
        });
    }
    ```

3. **UI для асинхронности**:

    - При клике "Save" → показать spinner/disable кнопку
    - Если успех → "Saved!"
    - Если ошибка → красное сообщение об ошибке

4. **Валидация**:
    ```js
    function validateTask(title) {
        if (!title || title.trim().length === 0) {
            throw new Error('Task title cannot be empty');
        }
        if (title.length > 100) {
            throw new Error('Task title too long');
        }
        return true;
    }
    ```

### Подсказки для кодирования

```js
// Как сохранить в localStorage?
const tasksJson = JSON.stringify(this.tasks);
localStorage.setItem('tasks', tasksJson);

// Как загрузить из localStorage?
const tasksJson = localStorage.getItem('tasks');
const tasks = JSON.parse(tasksJson);

// Обработка ошибок в async функции:
async function saveTasks() {
    try {
        // может выбросить ошибку
        await this.validate();
        // может выбросить ошибку
        await this.persistToStorage();
    } catch (error) {
        console.error('Save failed:', error.message);
        showErrorMessage(error.message);
    }
}

// Показать/скрыть loading:
button.disabled = true;
try {
    await operation();
} finally {
    button.disabled = false;
}
```

### Задачи (в порядке решения)

1. ✅ Добавить методы в `TaskList`:

    - `save()` — сохранить в localStorage
    - `load()` — загрузить из localStorage

2. ✅ В методе `add(title)`:

    - Вызвать `validateTask(title)` перед добавлением
    - Если ошибка → выбросить `throw new Error(...)`
    - UI должно поймать ошибку и показать пользователю

3. ✅ Добавить в HTML:

    - Кнопку "Save"
    - Область для сообщений (успеха/ошибки)
    - Spinner (может быть простой div с классом `.loading`)

4. ✅ При клике "Save":

    ```js
    button.disabled = true;
    try {
        await taskList.save();
        showMessage('Saved!', 'success');
    } catch (error) {
        showMessage(error.message, 'error');
    } finally {
        button.disabled = false;
    }
    ```

5. ✅ При загрузке страницы → загрузить задачи из localStorage:
    ```js
    window.addEventListener('DOMContentLoaded', async () => {
        try {
            await taskList.load();
            renderTasks();
        } catch (error) {
            console.error('Failed to load:', error);
        }
    });
    ```

---

## Уровень 5: Design Patterns, оптимизация, best practices

### Целевой навык

Observer/Pub-Sub, Module Pattern, Factory, дебаунсинг, мемоизация, архитектура.

### Требования

1. **Observer Pattern** (система уведомлений):

    ```js
    // При изменении задачи → автоматически обновить UI
    class TaskList extends EventEmitter {
        add(task) {
            this.tasks.push(task);
            this.emit('task:added', task); // оповестить слушателей
        }
    }

    // В UI:
    taskList.on('task:added', task => {
        renderTasks();
    });
    ```

2. **Event Emitter** (простая реализация):

    ```js
    class EventEmitter {
        constructor() {
            this.events = {};
        }

        on(event, callback) {
            if (!this.events[event]) {
                this.events[event] = [];
            }
            this.events[event].push(callback);
        }

        emit(event, data) {
            if (this.events[event]) {
                this.events[event].forEach(cb => cb(data));
            }
        }

        off(event, callback) {
            // удалить конкретный listener
        }
    }
    ```

3. **Module Pattern** (инкапсуляция):

    ```js
    const TaskApp = (() => {
        // приватные переменные
        const tasks = [];

        // публичный API
        return {
            add(title) {
                /* ... */
            },
            getAll() {
                return [...tasks];
            },
            on(event, cb) {
                /* ... */
            },
        };
    })();
    ```

4. **Factory Pattern** (создание разных типов задач):

    ```js
    function createTask(type, title) {
        switch (type) {
            case 'simple':
                return new SimpleTask(title);
            case 'recurring':
                return new RecurringTask(title);
            case 'important':
                return new ImportantTask(title);
            default:
                return new Task(title);
        }
    }
    ```

5. **Дебаунсинг** (для поиска и сохранения):

    ```js
    function debounce(fn, delay) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn(...args), delay);
        };
    }

    const debouncedSearch = debounce(query => {
        filter(query);
        renderTasks();
    }, 300);

    // Вызывать при каждом изменении инпута:
    searchInput.addEventListener('input', e => {
        debouncedSearch(e.target.value);
    });
    ```

6. **Расширенный функционал**:
    - Категории/теги для задач
    - Приоритеты (Low, Medium, High)
    - Дедлайны и форматирование дат
    - Поиск с дебаунсингом
    - Сортировка по нескольким критериям (приоритет → дедлайн → дата создания)
    - Экспорт в JSON
    - Undo/Redo (Command Pattern)

### Архитектура

```js
js/
├── eventEmitter.js       // EventEmitter класс
├── taskManager.js        // Главный модуль (Singleton + Observer)
├── taskFactory.js        // Factory для создания задач
├── validators.js         // Валидация
├── storage.js            // localStorage обработка
├── debounce.js           // Утилиты
└── ui.js                 // Рендеринг и события
```

### Задачи (в порядке решения)

1. ✅ Создать `EventEmitter` класс с методами `on()`, `emit()`, `off()`

2. ✅ Переделать `TaskList` чтобы наследовалась от `EventEmitter`:

    - При `add()`, `remove()`, `toggleDone()` → `emit()` события
    - UI слушает события и перерисовывается автоматически

3. ✅ Реализовать `debounce()` функцию и применить к поиску:

    - Инпут "Search" → дебаунсим 300ms → фильтруем → renderTasks

4. ✅ Реализовать `Factory` для создания задач разных типов:

    - `createTask('simple', ...)` → обычная задача
    - `createTask('recurring', ...)` → повторяющаяся задача
    - Каждый тип имеет свой класс с общим интерфейсом

5. ✅ Добавить функционал:

    - **Теги**: при создании задачи можно добавить теги
    - **Приоритет**: низкий, средний, высокий (разные цвета)
    - **Дедлайн**: дата выполнения (показать, если просрочено)

6. ✅ Реализовать сортировку:

    - Кнопки: "By Date", "By Priority", "By Deadline"
    - Сложная сортировка: приоритет → дедлайн → дата создания

7. ✅ Экспорт в JSON:

    - Кнопка "Export" → скачать JSON файл со всеми задачами
    - Функция должна использовать `JSON.stringify()`

8. ✅ Undo/Redo (опционально, сложно):

    - Вести историю действий (Command Pattern)
    - Кнопки "Undo", "Redo"

9. ✅ Документация:

    ```js
    /**
     * Adds a new task to the list
     * @param {string} title - Task title
     * @param {Object} options - { priority, dueDate, tags }
     * @throws {Error} If title is empty
     * @returns {Task} Created task
     */
    add(title, options = {}) {
      // ...
    }
    ```

10. ✅ Unit тесты (простые) для ключевых методов:
    ```js
    // task.test.js
    test('Task.toggleDone() flips done state', () => {
        const task = new Task('Test');
        expect(task.done).toBe(false);
        task.toggleDone();
        expect(task.done).toBe(true);
    });
    ```

---

## Структура файлов (финальная)

```
js_trainee/projects/task-manager/
├── index.html                    # главная страница
├── css/
│   └── style.css                 # стили
├── js/
│   ├── eventEmitter.js           # EventEmitter класс
│   ├── task.js                   # Task класс
│   ├── taskList.js               # TaskList класс + наследование
│   ├── taskFactory.js            # Factory для создания задач
│   ├── taskManager.js            # Singleton модуль (главное приложение)
│   ├── validators.js             # Валидация
│   ├── storage.js                # localStorage обработка
│   ├── utils.js                  # debounce, memoize, compose
│   ├── ui.js                     # Рендеринг и обработка событий
│   └── app.js                    # Точка входа (инициализация)
└── tests/
    ├── task.test.js
    ├── taskList.test.js
    └── utils.test.js
```

---

## Путь обучения (краткий)

| Уровень | Fokus                                   | Время | Результат                                      |
| ------- | --------------------------------------- | ----- | ---------------------------------------------- |
| 1       | DOM, события, массивы                   | 1-2ч  | Работающее приложение с основной функцией      |
| 2       | Объекты, методы, делегирование          | 2-3ч  | Добавлена фильтрация и удаление задач          |
| 3       | Классы, функциональное программирование | 3-4ч  | Полная переработка на ООП, фильтры             |
| 4       | Асинхронность, валидация, сохранение    | 4-5ч  | Данные сохраняются, обработка ошибок           |
| 5       | Паттерны, оптимизация, архитектура      | 5-8ч  | Чистый, масштабируемый код с доп. функционалом |

**Итого**: 15-22 часа практики с полным охватом JS концепций.

---

## Критерии успешного решения

-   ✅ Код работает на каждом уровне
-   ✅ Каждый уровень рефакторит предыдущий (не переписывание)
-   ✅ Используются все требуемые концепции
-   ✅ Обработка edge cases и ошибок
-   ✅ Хороший UX (feedback, loading, валидация)
-   ✅ Чистый, читаемый код с комментариями
-   ✅ Документация и простые тесты

---

## Подсказки для самостоятельного решения

**Застрял?** Не смотри решение сразу. Вместо этого:

1. Прочитай соответствующий файл из `LEARNING_ROADMAP.md`
2. Попробуй решить подпроблему отдельно в `playground.js`
3. Потом примени в основной код
4. Если совсем не работает → ищи похожий пример в `js_trainee/Scripts/`

**Не торопись** между уровнями. Убедись, что понимаешь ВСЕ концепции перед
переходом дальше.
