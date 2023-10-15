/*
 * Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
 */
console.log('[] === []: ', [] === []);
console.log('{} === {}: ', {} === {});
//! This condition will always return 'false' since JavaScript compares objects by reference, not value.
console.log(
    'function() {} === function() {}: ',
    function () {} === function () {}
);

const fnA = function () {
    console.log('hello');
};

const fnB = fnA;
console.log('fnB === fnA: ', fnB === fnA);

/*
 * Контекст (this)
 *  //! - ГДЕ и КАК была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *  //! - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 */

/*
 * Как метод объекта. В контексте объекта.
 */
const mango = {
    tag: 'Mango',
    showTag() {
        console.log('showTag -> this', this);
    },
};

mango.showTag(); // Контекст присваивается здесь, в момент ВЫЗОВА в контексте объекта

/*
 * Вызов без контекста
 * - В строгом режиме = undefined
 * - Не в строгом режиме = window
 */
const foo = function () {
    console.log('foo -> this', this);
};

foo(); // Увижу window так как в этом файле я пишу без строго режима, сугубо для примера

/*
 * Как метод объекта, но объявлена как внешняя функция.
 * В контексте объекта.
 */
const showTag = function () {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
};

showTag();

const poly = {
    tag: 'Poly',
};

poly.showUserTag = showTag;
console.log('user', poly);

poly.showUserTag();

/*
 * Вызов без контекста, но объявлена как метод объекта.
 */
const tag = {
    tag: 'Mango',
    showTag() {
        console.log('showTag -> this', this);
        console.log('showTag -> this.tag', this.tag);
    },
};

tag.showTag(); // Вызов функции В контексте объекта

const outerShowTag = tag.showTag;

outerShowTag(); // Вызов функции БЕЗ контексте объекта

/*
 * Контекст в callback-функциях
 */

const user = {
    tag: 'Mango',
    showTag() {
        console.log('showTag -> this', this);
        console.log('showTag -> this.tag', this.tag);
    },
};

const invokeAction = function (action) {
    console.log(action);

    action();
};

invokeAction(user.showTag);

/*
 * Тренируемся 3
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//     };

//     changeColor();

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     sweater.updateColor('red');

//     return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor('blue');

/*
 * Тренируемся 4
 */

const makeChangeColor = function () {
    const changeColor = function (color) {
        console.log('changeColor -> this', this);
    };

    return changeColor;
};

const updateColor = makeChangeColor();
updateColor('yellow');

const hat = {
    color: 'blue',
    updateColor: updateColor,
};

hat.updateColor('orange');

/*
 * Тренируемся 5
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

updateCounter(10, counter.increment);
updateCounter(5, counter.decrement);
