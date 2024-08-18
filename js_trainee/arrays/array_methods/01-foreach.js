/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

const numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.forEach(
    function (number, index, array) {
        console.log('number: ' + number);
        console.log(this);
    },
    { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 }
);

console.log(numbers);
