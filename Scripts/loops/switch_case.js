const { console } = require('inspector');

let a = 3 + 6;

switch (a) {
    case 3:
        alert('Not enough')
        break

    case 6:
        alert('Still not enough')
        break

    case 9:
        alert('Bingo!')
        break

    case 12:
        alert('Calm down, boy')
        break

    default: alert('No values like this')
};

let b = '1';
let c = 0;

switch (+b) {
    case c + b:
        alert('Выполнится, т.к. значением +b будет 1, тоесть c+b что в точности равно c+1')
        break

    case c + 1:
        alert('Выполнится тоже - +b будет 1, что в точности равно c+1')
        break

    default:
        alert('NIEN!!!')
};

// switch используется строгое сравнение (===)
let arg = prompt('Enter the number');
switch (arg) {
    case '0':
    case '1':
        alert('Zero or One')
        break

    case '2':
        alert('Two')
        break

    case 3:
        alert('Three') // Не выполнится, т.к. это интеграл(число)
        break

    default:
        alert('Unknown value')
};

//! Задачи
// Напишите if..else, соответствующий следующему switch:
const browser = 'Edge';

switch (browser) {
    case 'Edge':
        alert("You've got the Edge!")
        break

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too')
        break

    default:
        alert('We hope that this page looks ok!')
};

//? Моё решение
const others = ['Edge', 'Chrome', 'Firefox', 'Safari', 'Opera'];

if (browser === 'Edge') {
    alert('You have got the Edge!')
    console.log('You have got the Edge!')
} else if (others.includes(browser)) {
    alert('Okay we support these browsers too.')
    console.log('Okay we support these browsers too.')
} else {
    console.log('We hope that this page looks ok!')
    alert('We hope that this page looks ok!')
};

//? Решение из задачи
if (browser == 'Edge') {
    alert("You've got the Edge!")
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    alert('Okay we support these browsers too')
} else {
    alert('We hope that this page looks ok!')
};

// Перепишите код с использованием одной конструкции switch:
const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
    alert('Вы ввели число 0')
};

if (number === 1) {
    alert('Вы ввели число 1')
};

if (number === 2 || number === 3) {
    alert('Вы ввели число 2, а может и 3')
};

//? Моё решение
switch (number) {
    case 0:
        alert('Вы ввели число 0')
        break

    case 1:
        alert('Вы ввели число 1')
        break

    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3')
        break

    default:
        alert('Вы ввели некоректное  число')
};

//? Решение из задачи
switch (number) {
    case 0:
        alert('Вы ввели число 0')
        break

    case 1:
        alert('Вы ввели число 1')
        break

    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3')
        break
};