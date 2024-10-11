const arr = [];
function numbers() {
    for (let i = 0; i < 60; i++) {
        arr.push(i);
    } return arr;
}
console.log(numbers());
console.log(Array.isArray(arr)); // true

const str = 'hello';
const strArray = Array.from(str);
console.log(strArray);

const obj = {
    first: "word",
    second: "term",
    third: "deal",
    [Symbol.iterator]: function () {
        const keys = Object.keys(this);
        let index = 0;
        return {
            next: () => {
                return index < keys.length ?
                    { value: this[keys[index++]], done: false } :
                    { done: true };
            }
        };
    }
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

let int = ['}',1,2,3,4,5,6,7,8,9,10,'reverse = {'];
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
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits[fruits.length] = "Kiwi"; // easy way to append a new element to an array
    let size = fruits.length;
    console.log(size);

}
length();

function toString() {
    const fruits_toString = ["Banana", "Orange", "Apple", "Mango"];
    let stringify_fruits = fruits_toString.toString();
    console.log(stringify_fruits);
}
toString();

function at() {
    const units = ["Elven warriors", "Dwarf guard", "Dragon slayers", "Grey warden"];
    let unit = units.at(2);
    // let unit = units[2]; // тоже рабочий метод
    console.log(unit);
}
at();

function join() {
    const tanks = ["AC-130", "LoL", "God Daaamn"];
    let join = tanks.join(" * ");
    console.log(join);
}
join();

function pop() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let mango = fruits.pop();
    console.log(mango); // Mango
}
pop(); // Удаляет элемент в конце массива

function push() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let length = fruits.push("Kiwi");
    console.log(length); // Помещает новый объект в конец массива и возвращает длину 
}
push();

function shift() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift();
    let fruit = fruits.shift();
    console.log(fruit) // Orange
}
shift(); // Метод shift удаляет первый элемент из массива и возвращает его. 
// После удаления элемента длина массива уменьшается на единицу. 
// Удалит именно первый элемент, а не последний (для этого используется метод pop()).

function unshift() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon");
    console.log(fruits);
}
unshift(); // Метод unshift добавляет один или несколько элементов в начало массива и возвращает новую длину массива.
// Добавляет новые элементы именно в начало, а не в конец массива (для этого используется метод push).

function deletion() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    delete fruits[1];
    console.log(fruits);
}
deletion();

function concat() {
    const dooms = ["Yeeeha!", "Howdy!", "Damn, boy!"];
    const booms = ["Type shi", "Wazzup", "Bruh"];

    const millennials = dooms.concat(booms);
    const newWave = ["This ", "is ", "my ", "starfish ", "punk"].concat(millennials);
    console.log(newWave); // Сшиваю 3 массива, один из которых представлен ad destructo
}
concat();

function copyWithin() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.copyWithin(2, 0)); // "Banana", "Orange", (to Apple from Banana)
    console.log(fruits);
}
copyWithin();

function flat() {
    const myArr = [
        [1, 2],
        [3, 4],
        [5, 6]
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
    const fruits_add = ["Banana", "Orange", "Apple", "Mango"];
    fruits_add.splice(2, 0, "Lemon", "Kiwi");
    console.log(fruits_add);
    // The first parameter (2) defines the position where new elements should be added (spliced in).
    // The second parameter (0) defines how many elements should be removed.
    // The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

    const fruits_remove = ["Banana", "Orange", "Apple", "Mango"];
    fruits_remove.splice(2, 2, "Lemon", "Kiwi");
    console.log(fruits_remove); // added - "Lemon", "Kiwi" / deleted - "Apple", "Mango"
    // The splice() method returns an array with the deleted items:

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
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
    const _fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const banana = _fruits.slice(1);
    console.log(banana) // new array without "Banana"
    // Slice out a part of an array starting from array element 3 ("Apple")

    const fruits_ = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits_.slice(3); // "Apple", "Mango"
    console.log(citrus);
    // The slice() method creates a new array.
    // The slice() method does not remove any elements from the source array.

    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const _citrus = fruits.slice(1, 3);
    console.log(_citrus); // "Orange", "Lemon",
}
slice();

// arr.reduce();
// arr.length();
// arr.toString();
// arr.at();
// arr.join();
// arr.pop();
// arr.push();
// arr.peek();
// arr.shift();
// arr.unshift();
// arr.delete(arr[1]);
// arr.concat();
// arr.copyWithin();
// arr.map();
// arr.flat();
// arr.flatMap();
// arr.splice()
// arr.toSpliced();
// arr.slice();