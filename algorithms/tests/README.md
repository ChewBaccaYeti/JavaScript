# Algorithm Tests

Tests for both JS and Python implementations. Add new test files here as
algorithms get verified.

## Запуск

### JavaScript (Jest)

```bash
# Все JS-тесты алгоритмов
npm run algo:test

# Конкретный файл
npx jest algorithms/tests/js/sorting.test.js

# С watch-режимом
npx jest algorithms/tests/js --watch
```

### Python (pytest)

```bash
# Установить pytest один раз (в .venv или глобально)
python3 -m pip install pytest

# Все Python-тесты алгоритмов
npm run algo:pytest
# или напрямую:
pytest algorithms/tests/python -v

# Конкретный файл
pytest algorithms/tests/python/test_sorting.py -v

# Один тест
pytest algorithms/tests/python/test_sorting.py::test_sort -v
```

## Структура

```
algorithms/tests/
├── js/        # Jest-тесты для JS-реализаций (.test.js)
└── python/    # pytest-тесты для Python-реализаций (test_*.py)
```

## Добавление новых тестов

**JS** — создавай файл `*.test.js`, требуй модули через
`require('../../<dir>/<file>')`.

**Python** — создавай файл `test_*.py`. `conftest.py` уже добавляет
`algorithms/` в `sys.path`, импортируй как
`from sorting.bubble import bubble_sort`.

Все алгоритмы должны иметь хотя бы:

-   пустой вход
-   единственный элемент
-   отсортированный вход
-   обратный порядок
-   дубликаты
-   случайный вход
