// for итерирует значение до получения желаемого результата
/*
for (initialization; condition; post-expression) {
  // statements
}
*/
// Посчитай до 10
console.log("=========for_0-=========");
function for_0() {
    let i;
    for (i = 0; i < 10; i++) {
        console.log(i);
    }
    return i;
}
console.log(for_0());

console.log("=========for_1=========");
function for_1() {
    let j;
    for (j = 10; j <= 22; j+=1) {
        let multiValue = j * 10;
        console.log(multiValue);
    }
    return j;
}
console.log(for_1());


/*
for (value definition; condition; accumulator) {
    _action_
}
*/
console.log("=========fruits=========");
const fruits = ['apple', 'banana', 'cherry', 'date'];
for (let index = 0; index < fruits.length; index++) {
    console.log(index, fruits[index]); // i = счётчик итерации
};

// Счётчик вверх ++
/*
for (count value, counter condition; accumulator) {
    __action__-counting up++
}
*/
console.log("=========UP=========");
for (let count = 0; count <= 5; count++) {
    console.log('count up:', count);
};

// Счётчик вниз
console.log("=========DOWN=========");
for (let count = 5; count >= 0; count--) {
    console.log('count down:', count);
};

console.log("=========2X_ACC=========");
for (let i = 0; i <= 10; i += 2) { // double accumulating
    console.log('even:', i); // 0,2,4,6,8,10
};

console.log("=========MULTI_TAB=========");
// Таблица умножения
function quadTab() {
    const rows = {}
    for (let int = 1; int <= 10; int++) {
        rows[int] = {}
        for (let inc = 1; inc <= 10; inc++) {
            rows[int][inc] = int * inc
        }
    }
    console.table(rows)
}
quadTab()

// while цикл выполняется до первой лжи
// Выполнение кода, пока не выполнится определённое условие.
function while_0() {
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
    console.log('Цикл завершен, i = ' + i);
}
while_0();

function while_1() {
    let j = 15;
    while (j < 20) {
        console.log(j);
        j++;
    }
    console.log('От 15 до > ' + j);
}
while_1();

function while_2() {
    let balance = 1000;
    const threshold = 400;
    while (balance > threshold) {
        balance -= 100;
        console.log('New balance: ', balance);
    }
}
while_2();

// WHILE — счётчик с условием
let i = 0;
while (i < fruits.length) {
    console.log('while:', fruits[i]);
    i++; // ОБЯЗАТЕЛЬНО — иначе бесконечный цикл
};

// do...while — выполняется минимум 1 раз
let attempt = 0;
do {
    console.log('attempt:', attempt);
    attempt++;
} while (attempt < 3);

// do...while гарантирует хотя бы одно выполнение тела цикла
// Выполнение кода как минимум один раз и дальнейшее выполнение до выполнения условия.
function do_while_0() {
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);
}
do_while_0();

function do_while_1() {
    let j = 17;
    do {
        console.log(j);
        j++;
    } while (j < 24);
}
do_while_1();

// for...in цикл предназначен для перебора всех свойств объекта
function for_in_0() {
    const obj = { a: 1, b: 2, c: 3 };
    for (let key in obj) {
        console.log(key + ' Ayo! ' + obj[key]);
    }
}
for_in_0();

function for_in_1() {
    const obj = { d: 4, e: 5, f: 6 };
    for (let key in obj) {
        console.log(key + ' Sup ' + obj[key]);
    }
}
for_in_1();

function for_in_2() {
    const person = {
        name: 'John',
        age: 30,
        city: 'New York',
    };
    for (let key in person) {
        console.log(key, person[key]);
    }
}
for_in_2();

// Перебор элементов массива.
// Перебор символов строки.
// Перебор элементов объектов Set и Map.
function for_of_0() {
    const arr = [1, 2, 3, 4, 5];
    console.log(arr);
    for (let value of arr) {
        console.log(value);
    }
}
for_of_0();

function for_of_1() {
    const array = [10, 12, 18, 26, 38];
    console.log('<--_+_-->');
    for (let value of array) {
        console.log(value);
    }
}
for_of_1();

function for_of_2() {
    const numbers = [6, 7, 8, 9, 10];
    let sum = 0;
    for (number of numbers) {
        sum += number;
    }
    console.log('Sum: ' + sum);
}
for_of_2();

function for_of_3() {
    const names = ['Alice', 'Bob', 'Charlie'];
    const searchName = 'Alice';
    let found = false;

    for (let name of names) {
        if (name === searchName) {
            found = true;
            break;
        }
    }
    console.log(`Name found: ${searchName}`, found);
}
for_of_3();

// FOR...OF — счётчик не нужен, он сам перебирает все элементы массива и выдаёт их по очереди
for (const fruit of fruits) {
    console.log(fruit); // значение, без индекса
};

// Нужен и индекс и значение? entries() Похоже на обычный for
for (const [index, fruit_item] of fruits.entries()) {
    console.log(index, fruit_item);
};

// switch case когда нужно проверить одно значение на равенство нескольким возможным значениям.
function switch_case() {
    let day = 7;
    let dayName;

    switch (day) {
        case 1:
            dayName = 'Monday';
            break; // break обязателен для остановки текущей операции
        case 2:
            dayName = 'Tuesday';
            break; // если его не ставить то случится провал и нужное значение не будет получено
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        case 7:
            dayName = 'Sunday';
            break;
        default: // Это как else в конструкции if...else. Выполнит стандартную команду в случае несоответсвия результата цикла.
            dayName = 'Invalid day';
    }
    console.log(dayName);
}
switch_case();

function switch_case_fall_through() {
    let fruit = 'apple';

    switch (fruit) {
        case 'apple':
            console.log('This is an apple.');
        case 'banana':
            console.log('This is a banana.');
            break;
        default:
            console.log('Unknown fruit.');
    }
    // Вывод:
    // This is an apple.
    // This is a banana.
    // То есть - apple, который нужен был и мог быть получен на первом кейсе был пропущен и поэтому после него выводится banana
}
switch_case_fall_through();

function multiple_switch_case() {
    let color = 'blue';

    switch (color) {
        case 'red':
        case 'blue': //!
        case 'green':
            console.log('Primary color');
            break;
        case 'yellow':
        case 'orange':
            console.log('Secondary color');
            break;
        default:
            console.log('Unknown color');
    }
}
multiple_switch_case();

// Данный if...else является альтернативой для switch_case()
function if_else() {
    let day = 3;
    let dayName;

    if (day === 1) {
        dayName = 'Monday';
    } else if (day === 2) {
        dayName = 'Tuesday';
    } else if (day === 3) {
        dayName = 'Wednesday'; //!
    } else if (day === 4) {
        dayName = 'Thursday';
    } else if (day === 5) {
        dayName = 'Friday';
    } else if (day === 6) {
        dayName = 'Saturday';
    } else if (day === 7) {
        dayName = 'Sunday';
    } else {
        dayName = 'Invalid day';
    }

    console.log(dayName); // Выведет "Wednesday"
}
if_else();

// Тернарный оператор для выбора между двумя
function ternarnian() {
    let age = 18;
    let isAdult = age >= 18 ? 'Adult' : 'Not an adult';
    console.log(isAdult); // Выведет "Adult"
}
ternarnian();

// for...of по Set — уникальные значения, перебор без индексов
function for_of_set() {
    const unique = new Set([1, 1, 2, 3, 3, 3]);
    console.log('Set size:', unique.size); // 3 — дубликаты отброшены
    for (const value of unique) {
        console.log('set value:', value); // 1, 2, 3
    }
}
for_of_set();

// for...of по Map — деструктуризация пар [ключ, значение]
function for_of_map() {
    const prices = new Map([
        ['apple', 50],
        ['banana', 30],
    ]);
    for (const [product, price] of prices) {
        console.log(`${product}: ${price}`);
    }
    // Map также даёт .keys(), .values(), .entries() как итераторы
    for (const key of prices.keys()) console.log('key:', key);
    for (const value of prices.values()) console.log('value:', value);
}
for_of_map();

// for...of по строке — перебор по символам (с учётом Unicode)
function for_of_string() {
    for (const char of 'abc') {
        console.log('char:', char); // a, b, c
    }
}
for_of_string();

// Отличие for...in от for...of:
// for...in  — перебирает КЛЮЧИ (индексы/свойства), включая унаследованные перечисляемые
// for...of  — перебирает ЗНАЧЕНИЯ итерируемого (массив/строка/Set/Map), НЕ работает с обычным объектом
function in_vs_of() {
    const arr = ['a', 'b', 'c'];
    arr.extra = 'не-индекс'; // добавочное свойство
    for (const key in arr) console.log('for-in:', key); // 0, 1, 2, extra
    for (const value of arr) console.log('for-of:', value); // a, b, c (extra пропущен)
}
in_vs_of();
