/*
 * call и apply
 */
const showThis = function (a, b, arr) {
    console.log(a, b, arr);
    console.log('showThis ->', this);
};

showThis(); // undefined

const objA = {
    a: 5,
    b: 10,
};

showThis.call(objA, 1, 2, [3, 4, 5]); // В контексте объекта objA вызывает и передает аргументы 10, 20 и т.д.
showThis.apply(objA, [6, 7, [8, 9, 10]]); // Тоже самое, но как массив

const objB = {
    x: 25,
    y: 500,
};

showThis.call(objB, 10, 20, [30, 40, 50]); // Это не привязка контекста навсегда, а просто на один раз по месту использования
showThis.apply(objB, [60, 70, [80, 90, 100]]);

showThis(); // undefined

/*
 * Прототипное наследование
 */

const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;
};

const hat = {
    color: 'black',
};

changeColor.call(hat, 'orange');
console.log(hat);

const sweater = {
    color: 'green',
};

changeColor.call(sweater, 'blue');
console.log(sweater);

/*
 * bind позволяет сделать КОПИЮ функции с привязаным контекстом
 */

const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

console.log(changeHatColor);
console.log(changeSweaterColor);

/*
 * counter
 */

const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

updateCounter(10, counter.increment.bind(counter)); // Передаю копию инкремента которая НАВСЕГДА привязана к counter
updateCounter(5, counter.decrement.bind(counter)); // Так решается проблема передачи методов объекта как коллбэков

console.log(counter);

/*
 * Стрелочные функции НЕ имеют своего this — берут его лексически из окружения.
 * call/apply/bind НЕ могут переопределить this у стрелочной функции.
 */
const arrow = () => console.log('arrow -> this', this);
arrow.call({ a: 1 }); // this всё равно из внешней области (не { a: 1 })

/*
 * Главное применение: сохранить this внутри коллбэка без bind.
 */
const timerObj = {
    seconds: 0,
    // Обычная функция в setTimeout потеряла бы this (был бы undefined/window).
    // Стрелка наследует this метода start -> остаётся timerObj.
    start() {
        setTimeout(() => {
            this.seconds += 1;
            console.log('arrow callback -> this.seconds', this.seconds); // 1
        }, 0);
    },
    // Анти-пример: обычная функция теряет контекст
    startBroken() {
        setTimeout(function () {
            console.log('broken -> this', this); // НЕ timerObj
        }, 0);
    },
};
timerObj.start();
timerObj.startBroken();

/*
 * Зеркало паттерна .bind(counter) выше — но через стрелку.
 * Здесь стрелка-обёртка вызывает метод в правильном контексте.
 */
updateCounter(3, value => counter.increment(value)); // эквивалент counter.increment.bind(counter)
console.log(counter);
