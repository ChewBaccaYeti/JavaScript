function ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    } else {
        no()
    }
};

function Yes() {
    alert('Yes')
};

function No() {
    alert('No')
};

ask('Are you agree?', Yes, No);

let age = prompt('How old are you?', 18);

let welcome;

if (age < 18) {
    welcome = function deny() {
        alert('You are too young for this sh!t.')
    }
} else {
    welcome = function getIt() {
        alert('Damn boy, get it!')
    }
};

welcome();

let blablarism = (age < 18) ? function () { alert('Wazzup!!!') } : function () { alert('How are you, sir?') };

blablarism();

//! Hoisting — ключевое отличие declaration от expression
sayHi(); // ✓ работает: declaration целиком поднимается наверх
function sayHi() {
    console.log('Hi from declaration');
}

try {
    sayBye(); // ✗ TypeError: sayBye is not a function — переменная поднята, но = undefined
} catch (e) {
    console.log('expression до присваивания:', e.message);
}
var sayBye = function () {
    console.log('Bye from expression');
};

//! Параметры по умолчанию
function greet(name = 'аноним', greeting = 'Привет') {
    console.log(`${greeting}, ${name}!`);
}
greet(); // Привет, аноним!
greet('Боб'); // Привет, Боб!

//! Rest-параметры — собирают остаток аргументов в настоящий массив
function sum(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

function logFirst(first, ...rest) {
    console.log('первый:', first, 'остальные:', rest);
}
logFirst('a', 'b', 'c'); // первый: a остальные: ['b','c']

// Старый способ — объект arguments (НЕ массив, нет в стрелочных функциях)
function oldStyle() {
    console.log(arguments.length, Array.from(arguments));
}
oldStyle(1, 2, 3); // 3 [1,2,3]

//! Spread при вызове — разворачивает массив в аргументы
const nums = [5, 1, 9, 3];
console.log(Math.max(...nums)); // 9

//! IIFE — Immediately Invoked Function Expression (изоляция области видимости)
const moduleResult = (function () {
    const privateVar = 'скрыто';
    return privateVar.toUpperCase();
})();
console.log(moduleResult); // СКРЫТО