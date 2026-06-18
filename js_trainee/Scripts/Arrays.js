const arr = [];
function numbers() {
    for (let i = 0; i < 60; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(numbers());
console.log(Array.isArray(arr)); // true

const str = 'hello';
const strArray = Array.from(str);
console.log(strArray);

const obj = {
    first: 'word',
    second: 'term',
    third: 'deal',
    [Symbol.iterator]: function () {
        const keys = Object.keys(this);
        let index = 0;
        return {
            next: () => {
                return index < keys.length
                    ? { value: this[keys[index++]], done: false }
                    : { done: true };
            },
        };
    },
};

for (const value of obj) {
    console.log(value);
}

console.log(arr.indexOf(11)); // 11
console.log(arr.indexOf(25, 13)); // 25
console.log(arr.lastIndexOf(12)); // 12
console.log(arr.lastIndexOf(46, 59)); // 46
console.log(arr.fill('Wazowski && Lebowski'));
console.log(arr.toString());
const wazowski = 'Wazowski';
console.log(arr.includes(`${wazowski} && Lebowski`)); // true

const result = arr.join(' - ');
console.log(result);

let int = ['}', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'reverse = {'];
const reverse = int.reverse();
console.log(reverse);

// Array.reduce() method executes a reducer function for array element / method returns a single value: the function's accumulated result
// method does not execute the function for empty array elements / method does not change the original array

// function(accumulator, currentValue, currentIndex, array) {
// <-logic->
//     return newValue;
// }

/*
 * accumulator — аккумулированное значение, возвращаемое после предыдущего вызова функции редуктора.
 * currentValue — текущий обрабатываемый элемент массива.
 * currentIndex — индекс текущего обрабатываемого элемента.
 * array — обрабатываемый массив.
 */

// function reduce() {
//     const _numbers = [175, 50, 25];
//     document.getElementById("demo").innerHTML = _numbers.reduce(myFunc);
//     function myFunc(total, num) {
//         return total - num;
//     }

//     const numbers_ = [15.5, 2.3, 1.1, 4.7];
//     document.getElementById("demo").innerHTML = numbers_.reduce(getSum, 0);
//     function getSum(total, num) {
//         return total + Math.round(num);
//     }

//     const users = [
//         { name: "Alice", group: "admin" },
//         { name: "Bob", group: "editor" },
//         { name: "Charlie", group: "admin" }
//     ];
//     const groupedByGroup = users.reduce((accumulator, user) => {
//         // Инициализируем пустой массив для новой группы
//         if (!accumulator[user.group]) {
//             accumulator[user.group] = [];
//         }
//         // Добавляем пользователя в соответствующую группу
//         accumulator[user.group].push(user);
//         return accumulator;
//     }, {}); // Начальное значение — пустой объект
//     console.log(groupedByGroup);

//     const scores = [65, 42, 12, 9, 86, 53];
//     const maxScore = scores.reduce((max, current) => {
//         return current > max ? current : max;
//     }, scores[0]); // Начальное значение — первый элемент массива
//     console.log(maxScore); // Выведет: 86
// }
// reduce();

function length() {
    const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    fruits[fruits.length] = 'Kiwi'; // easy way to append a new element to an array
    let size = fruits.length;
    console.log(size);
}
length();

function toString() {
    const fruits_toString = ['Banana', 'Orange', 'Apple', 'Mango'];
    let stringify_fruits = fruits_toString.toString();
    console.log(stringify_fruits);
}
toString();

function at() {
    const units = [
        'Elven warriors',
        'Dwarf guard',
        'Dragon slayers',
        'Grey warden',
    ];
    let unit = units.at(2);
    // let unit = units[2]; // тоже рабочий метод
    console.log(unit);
}
at();

function join() {
    const tanks = ['AC-130', 'LoL', 'God Daaamn'];
    let join = tanks.join(' * ');
    console.log(join);
}
join();

function pop() {
    const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    let mango = fruits.pop();
    console.log(mango); // Mango
}
pop(); // Удаляет элемент в конце массива

function push() {
    const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    let length = fruits.push('Kiwi');
    console.log(length); // Помещает новый объект в конец массива и возвращает длину
}
push();

function shift() {
    const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    fruits.shift();
    let fruit = fruits.shift();
    console.log(fruit); // Orange
}
shift(); // Метод shift удаляет первый элемент из массива и возвращает его.
// После удаления элемента длина массива уменьшается на единицу.
// Удалит именно первый элемент, а не последний (для этого используется метод pop()).

function unshift() {
    const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    fruits.unshift('Lemon');
    console.log(fruits);
}
unshift(); // Метод unshift добавляет один или несколько элементов в начало массива и возвращает новую длину массива.
// Добавляет новые элементы именно в начало, а не в конец массива (для этого используется метод push).

function deletion() {
    const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    delete fruits[1];
    console.log(fruits);
}
deletion();

function concat() {
    const dooms = ['Yeeeha!', 'Howdy!', 'Damn, boy!'];
    const booms = ['Type shi', 'Wazzup', 'Bruh'];

    const millennials = dooms.concat(booms);
    const newWave = ['This ', 'is ', 'my ', 'starfish ', 'punk'].concat(
        millennials,
    );
    console.log(newWave); // Сшиваю 3 массива, один из которых представлен ad destructo
}
concat();

function copyWithin() {
    const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    console.log(fruits.copyWithin(2, 0)); // "Banana", "Orange", (to Apple from Banana)
    console.log(fruits);
}
copyWithin();

function flat() {
    const myArr = [
        [1, 2],
        [3, 4],
        [5, 6],
    ];
    const newArr = myArr.flat();
    console.log(newArr);
}
flat();
// Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

function flatMap() {
    const myArr = [1, 2, 3, 4, 5, 6];
    const newArr = myArr.flatMap(x => [x, x * 10]);
    console.log(newArr);
}
flatMap();

function splice() {
    const fruits_add = ['Banana', 'Orange', 'Apple', 'Mango'];
    fruits_add.splice(2, 0, 'Lemon', 'Kiwi');
    console.log(fruits_add);
    // The first parameter (2) defines the position where new elements should be added (spliced in).
    // The second parameter (0) defines how many elements should be removed.
    // The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

    const fruits_remove = ['Banana', 'Orange', 'Apple', 'Mango'];
    fruits_remove.splice(2, 2, 'Lemon', 'Kiwi');
    console.log(fruits_remove); // added - "Lemon", "Kiwi" / deleted - "Apple", "Mango"
    // The splice() method returns an array with the deleted items:

    const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    fruits.splice(0, 1);
    console.log(fruits); // deleted - "Orange"
    // The first parameter (0) defines the position where new elements should be added (spliced in).
    // The second parameter (1) defines how many elements should be removed.
}
splice();

// new toSpliced() method creates a new array, keeping the original array unchanged, while the old method altered the original array.
// function toSpliced() {
//     const months = ["Jan", "Feb", "Mar", "Apr"];
//     const spliced = months.toSpliced(0, 1);
//     console.log(spliced); // deleted - "Jan"
//     return spliced
// }
// toSpliced();

function slice() {
    const _fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
    const banana = _fruits.slice(1);
    console.log(banana); // new array without "Banana"
    // Slice out a part of an array starting from array element 3 ("Apple")

    const fruits_ = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
    const citrus = fruits_.slice(3); // "Apple", "Mango"
    console.log(citrus);
    // The slice() method creates a new array.
    // The slice() method does not remove any elements from the source array.

    const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
    const _citrus = fruits.slice(1, 3);
    console.log(_citrus); // "Orange", "Lemon",
}
slice();

function forEach() {
    const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    fruits.forEach((fruit, index) => console.log(index, fruit));
}
forEach(); // Вызывает функцию для каждого элемента. Возвращает undefined — нет нового массива, нельзя прервать (используй for..of + break).

function map() {
    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map(n => n * 2);
    console.log(doubled); // [2, 4, 6, 8]
}
map(); // Создаёт новый массив, применяя функцию к каждому элементу. Не мутирует исходный.

function filter() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const even = numbers.filter(n => n % 2 === 0);
    console.log(even); // [2, 4, 6]
}
filter(); // Новый массив только из элементов, прошедших проверку (callback вернул true).

function find_findIndex() {
    const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
    console.log(users.find(u => u.id === 2)); // { id: 2 } — первый совпавший элемент или undefined
    console.log(users.findIndex(u => u.id === 2)); // 1 — индекс или -1
}
find_findIndex();

function findLast_findLastIndex() {
    const numbers = [1, 2, 3, 4, 3];
    console.log(numbers.findLast(n => n === 3)); // 3 — ищет с конца
    console.log(numbers.findLastIndex(n => n === 3)); // 4 — индекс с конца (ES2023)
}
findLast_findLastIndex();

function some_every() {
    const numbers = [1, 2, 3, 4];
    console.log(numbers.some(n => n > 3)); // true — хотя бы один проходит
    console.log(numbers.every(n => n > 0)); // true — все проходят
}
some_every();

function reduce() {
    const numbers = [175, 50, 25];
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum); // 250
    // Группировка в объект — частый паттерн reduce
    const users = [
        { name: 'Alice', group: 'admin' },
        { name: 'Bob', group: 'editor' },
        { name: 'Charlie', group: 'admin' },
    ];
    const byGroup = users.reduce((acc, user) => {
        (acc[user.group] ||= []).push(user.name);
        return acc;
    }, {});
    console.log(byGroup); // { admin: ['Alice','Charlie'], editor: ['Bob'] }
}
reduce(); // Сворачивает массив в одно значение. acc — аккумулятор, второй аргумент — начальное значение.

function reduceRight() {
    const parts = [['a'], ['b'], ['c']];
    const flat = parts.reduceRight((acc, cur) => acc.concat(cur), []);
    console.log(flat); // ['c', 'b', 'a'] — reduce справа налево
}
reduceRight();

function sort() {
    const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    console.log(fruits.sort()); // лексикографически, МУТИРУЕТ исходный
    const numbers = [40, 1, 5, 200];
    console.log(numbers.sort((a, b) => a - b)); // [1, 5, 40, 200] — числовая сортировка по возрастанию
    console.log(numbers.sort((a, b) => b - a)); // [200, 40, 5, 1] — по убыванию
}
sort(); // Без компаратора сортирует как строки: [1,5,40,200].sort() => [1,200,40,5].

function toSorted_toReversed() {
    const numbers = [3, 1, 2];
    console.log(numbers.toSorted((a, b) => a - b)); // [1, 2, 3] — новый массив (ES2023)
    console.log(numbers.toReversed()); // [2, 1, 3] — новый массив, не мутирует
    console.log(numbers); // [3, 1, 2] — оригинал цел
}
toSorted_toReversed(); // Иммутабельные копии sort/reverse — без побочных эффектов.

function toSpliced_with() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr'];
    console.log(months.toSpliced(1, 2, 'Feb-fix')); // ['Jan','Feb-fix','Apr'] — копия (ES2023)
    console.log(months.with(0, 'JAN')); // ['JAN','Feb','Mar','Apr'] — копия с заменой по индексу
    console.log(months); // оригинал не тронут
}
toSpliced_with();

function keys_values_entries() {
    const fruits = ['Banana', 'Orange'];
    console.log([...fruits.keys()]); // [0, 1] — итератор индексов
    console.log([...fruits.values()]); // ['Banana', 'Orange'] — итератор значений
    console.log([...fruits.entries()]); // [[0,'Banana'], [1,'Orange']] — пары [индекс, значение]
}
keys_values_entries();

function staticConstructors() {
    console.log(Array.of(7)); // [7] — в отличие от Array(7) => пустой массив длины 7
    console.log(Array.from('abc')); // ['a','b','c'] — из итерируемого
    console.log(Array.from({ length: 3 }, (_, i) => i * 2)); // [0, 2, 4] — с map-функцией
}
staticConstructors();

// arr.reduce();
// arr.reduceRight();
// arr.length;
// arr.toString();
// arr.at();
// arr.join();
// arr.pop();
// arr.push();
// arr.shift();
// arr.unshift();
// delete arr[1];
// arr.concat();
// arr.copyWithin();
// arr.forEach();
// arr.map();
// arr.filter();
// arr.find(); arr.findIndex();
// arr.findLast(); arr.findLastIndex();
// arr.some(); arr.every();
// arr.indexOf(); arr.lastIndexOf(); arr.includes();
// arr.sort();
// arr.toSorted(); arr.toReversed();
// arr.reverse();
// arr.flat();
// arr.flatMap();
// arr.splice();
// arr.toSpliced(); arr.with();
// arr.slice();
// arr.fill();
// arr.keys(); arr.values(); arr.entries();
// Array.isArray(); Array.of(); Array.from();
