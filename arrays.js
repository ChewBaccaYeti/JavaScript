const arr = [];
function numbers() {
    for (let i = 0; i < 60; i++) {
        arr.push(i);
    }
};
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

console.log(arr.indexOf(11)); // 10
console.log(arr.indexOf(25, 13)); // 25
console.log(arr.lastIndexOf(12)); // 11
console.log(arr.lastIndexOf(46, 59)); // 46
console.log(arr.fill('Wazowski'));
console.log(arr.toString());

const result = arr.join(' - ');
console.log(result);

const reverse = arr.reverse();
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

function reduce() {
    const _numbers = [175, 50, 25];
    document.getElementById("demo").innerHTML = _numbers.reduce(myFunc);
    function myFunc(total, num) {
        return total - num;
    }

    const numbers_ = [15.5, 2.3, 1.1, 4.7];
    document.getElementById("demo").innerHTML = numbers_.reduce(getSum, 0);
    function getSum(total, num) {
        return total + Math.round(num);
    }

    const users = [
        { name: "Alice", group: "admin" },
        { name: "Bob", group: "editor" },
        { name: "Charlie", group: "admin" }
    ];
    const groupedByGroup = users.reduce((accumulator, user) => {
        // Инициализируем пустой массив для новой группы
        if (!accumulator[user.group]) {
            accumulator[user.group] = [];
        }
        // Добавляем пользователя в соответствующую группу
        accumulator[user.group].push(user);
        return accumulator;
    }, {}); // Начальное значение — пустой объект
    console.log(groupedByGroup);

    const scores = [65, 42, 12, 9, 86, 53];
    const maxScore = scores.reduce((max, current) => {
        return current > max ? current : max;
    }, scores[0]); // Начальное значение — первый элемент массива
    console.log(maxScore); // Выведет: 86
};
reduce();