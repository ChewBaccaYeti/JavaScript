/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называется
    «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// Это функцией высшего порядка
const fnA = function (message, callback) {
    console.log(message);
    console.log(callback);
    callback(100); // Вызов функции через имя параметра
};

// Это функция-callback
const fnB = function (number) {
    console.log('Это лог при вызове fnB', number);
};

//* Вызов функции fnA и передача ее аргументов в параметры(среди которых функция fnB и вызов ее же внутри функции fnA)
fnA('Lebowski', fnB);

//!!<!--!>Пример<!--!>!!//
const doMath = function (a, b, callback) {
    const result = callback(a, b);
    console.log(result);
};

const add = function (x, y) {
    return x + y;
};

const sub = function (x, y) {
    return x - y;
};

doMath(1, 4, add);
doMath(6, 4, sub);

//? Пример inline-функций, аналог вызова функций сверху
doMath(1, 4, function (x, y) {
    return x + y;
});
doMath(6, 4, function (x, y) {
    return x - y;
});

/*
 * Отложенный вызов: регистрация событий
 */
const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
    console.log('Клик по кнопке ' + Date.now());
};

buttonRef.addEventListener('click', handleBtnClick);

/*
 * Отложенный вызов: геолокация
 */
const onGetPositionSuccess = function (position) {
    console.log('Это вызов onGetPositionSuccess', position);
};

const onGetPositionError = function (error) {
    console.log('Это вызов onGetPositionError', error);
};

window.navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess,
    onGetPositionError,
);

/*
 * Отложенный вызов: интервалы
 */
const callback = function () {
    console.log('Через 2 секунды внутри коллбека в таймауте');
};
console.log('В коде перед таймаутом');

setTimeout(callback, 2000);

console.log('В коде после таймаута');

/*
 * Отложенный вызов: http-запрос
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */
const onRequestSuccess = function (response) {
    console.log(
        'Вызов функции onRequestSuccess после успешного ответа бекэнда',
        response,
    );
};

fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(onRequestSuccess);

/*
 * Фильтр
 */
const filter = function (array, test) {
    const filteredArray = [];

    for (const element of array) {
        console.log(element, test(element));
        const passed = test(element);

        if (passed) {
            filteredArray.push(element);
        }
    }

    return filteredArray;
};

const callback_1 = function (value) {
    return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback_1);
console.log(r1);

const callback_2 = function (value) {
    return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], callback_2);
console.log(r2);

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsByQuantity = function (fruit) {
    return fruit.quantity >= 120;
};

const fruitsFilter = filter(fruits, getFruitsByQuantity);
console.log(fruitsFilter);

/*
 * ============================================================
 * УПРАЖНЕНИЯ — реши сам, потом проверь
 * ============================================================
 */

// ЗАДАЧА 1: Напиши функцию repeat(n, action)
// Она вызывает action(i) ровно n раз, передавая номер итерации
// repeat(3, i => console.log(i)) → 0, 1, 2

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i)
    }
        
}
repeat(3, console.log);

// ЗАДАЧА 2: Напиши функцию map(array, transform)
// Возвращает новый массив, где каждый элемент прошёл через transform
// map([1,2,3], x => x * 2) → [2, 4, 6]
// for...of + .push

function map(array, transform) {
    let nums = []
    for (let item of array) {
        nums.push(transform(item))
        return nums
    }
}
console.log(map([1, 2, 3], x => x * 2))

// ЗАДАЧА 3: Исправь баг — почему handleClick вызывается сразу?
// const btn = document.querySelector('.js-button');
// btn.addEventListener('click', handleBtnClick());  // ← баг здесь
 btn.addEventListener('click', handleBtnClick);

// ЗАДАЧА 4: Напиши unless(test, action)
// Вызывает action() только если test === false
// unless(5 > 10, () => console.log('5 не больше 10')) → выведет строку

function unless(test, action) {
    // твой код
}

/*
 * РЕШЕНИЯ — раскомментируй когда сделаешь сам
 *
 * Задача 1:
 * function repeat(n, action) {
 *     for (let i = 0; i < n; i++) action(i);
 * }
 *
 * Задача 2:
 * function map(array, transform) {
 *     const result = [];
 *     for (const item of array) result.push(transform(item));
 *     return result;
 * }
 *
 * Задача 3:
 * btn.addEventListener('click', handleBtnClick); // убрать ()
 *
 * Задача 4:
 * function unless(test, action) {
 *     if (!test) action();
 * }
 */
