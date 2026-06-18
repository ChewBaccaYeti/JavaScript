function factorial(n) {
    // Базовый случай: если n равно 1 или 0, возвращаем 1, так как 0! и 1! равны 1
    if (n <= 1) {
        return 1;
    }

    // Рекурсивный случай: умножаем текущее значение n на результат вызова факториала для n - 1
    return n * factorial(n - 1);
}

// Пример вызова функции
console.log(factorial(5)); // Вывод: 120


function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    // Рекурсивные вызовы для предыдущих двух чисел
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Пример вызова функции
console.log(fibonacci(5)); // Вывод: 5 (последовательность: 0, 1, 1, 2, 3, 5)

/**
 * Базовом случае: Без него рекурсия будет бесконечной и приведёт к переполнению стека вызовов.
 * Оптимизации: Рекурсивные алгоритмы, такие как вычисление чисел Фибоначчи, могут быть неэффективны без мемоизации или преобразования в итеративный подход.
 */

// Мемоизация: кешируем уже вычисленные значения, чтобы не пересчитывать.
// Наивный fibonacci(40) делает ~2^40 вызовов; с мемоизацией — линейно.
function memoizedFibonacci() {
    const cache = new Map(); // замыкание хранит кеш между вызовами
    const fib = n => {
        if (n <= 1) return n;
        if (cache.has(n)) return cache.get(n);
        const value = fib(n - 1) + fib(n - 2);
        cache.set(n, value);
        return value;
    };
    return fib;
}
const fastFib = memoizedFibonacci();
console.log(fastFib(40)); // 102334155 — мгновенно

// Итеративный fibonacci — без рекурсии, O(n) времени, O(1) памяти, нет риска переполнения стека
function iterativeFibonacci(n) {
    let [prev, curr] = [0, 1];
    for (let i = 0; i < n; i++) {
        [prev, curr] = [curr, prev + curr];
    }
    return prev;
}
console.log(iterativeFibonacci(40)); // 102334155

// Рекурсия по вложенной структуре — суммируем числа в массиве любой глубины
function deepSum(arr) {
    return arr.reduce((acc, item) => {
        // Базовый случай — число; рекурсивный — вложенный массив
        return acc + (Array.isArray(item) ? deepSum(item) : item);
    }, 0);
}
console.log(deepSum([1, [2, 3, [4, 5]], [6, [7, [8]]]])); // 36

// Обход дерева (рекурсия по узлам) — типичная задача с файловой системой/DOM
function countNodes(node) {
    if (!node) return 0;
    // 1 за текущий узел + рекурсия по всем детям
    return 1 + (node.children ?? []).reduce((sum, child) => sum + countNodes(child), 0);
}
const tree = {
    value: 'root',
    children: [{ value: 'a', children: [{ value: 'a1' }] }, { value: 'b' }],
};
console.log(countNodes(tree)); // 4