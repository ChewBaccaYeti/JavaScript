/*
 * Псевдомассив arguments и Array.from и ...
 */

const fn_1 = function () {
    console.log(arguments); // Псевдомассив, он не имеет всех методов массива
    const args = Array.from(arguments); // Преобразование псевдомассива в массив, чтобы применить к нему методы
    console.log(args);

    for (const arg of arguments) {
        console.log(arg);
    }
};

fn_1(1, 2, 3, 4);
fn_1(1, 2, 3, 4, 5, 6);
fn_1(1, 2, 3, 4, 5, 6, 7, 8);

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

const fn_2 = function (...args) {
    // Теперь это не псевдомассив, а массив
    // В данный параметр ...args собраны все аргументы, которые были переданы в эту функцию
    console.log(args);
};

fn_2(1, 2, 3, 4); // Эти параметры
fn_2(1, 2, 3, 4, 5, 6); // И эти параметры
fn_2(1, 2, 3, 4, 5, 6, 7, 8); // И эти параметры

// <!---!>Пример с использованием разных типов данных и поведение ...rest при разной разбитой последовательности</!---!>
const fn_3 = function (a, b, c, ...args) {
    console.log(`${a}, ${b}, ${c}`);
    console.log(args);
};

fn_3('Hello', 1, 2, 3, 4);
fn_3('Aloha', 1, 2, 3, 4, 5, 6);
fn_3('Hi', 1, 2, 3, 4, 5, 6, 7, 8);

// <!---!>Решение задания</!---!>
const add = function (...args) {
    console.log(args);
    let total = 0;

    for (const arg of args) {
        total += arg;
    }

    return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5, 6));

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

const filterNumbers = function (array, ...args) {
    console.log('array:', array);
    console.log('args:', args);

    const uniqueElements = [];

    for (const element of array) {
        console.log(element);
        console.log(args.includes(element));

        if (args.includes(element)) {
            uniqueElements.push(element);
            console.log(`${element} is everywhere!`);
        }
    }
    console.log(uniqueElements);

    return uniqueElements;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]
