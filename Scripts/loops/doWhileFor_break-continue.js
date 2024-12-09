//condition === true; by default
// while (condition) {
//      ... тело цикла ...
// };

//! while

console.log("i=0 while ", "(i<=3) {i++}")
let i = 0;
while (i <= 2) {
    console.log(i)
    i++
};

// Одно выполнение тела цикла по-научному называется итерация.
// Цикл в примере выше совершает три итерации.

/*
Любое выражение или переменная может быть условием цикла, а не только сравнение: 
условие while вычисляется и преобразуется в логическое значение.
Например, while (i) – более краткий вариант while (i != 0):
*/

console.log("j=0 while ", "(j<=4) {j--}")
let j = 4;
while (j) {
    console.log(j)
    j--
};

while (j) console.log(j--);

//! do...while

// Цикл сначала выполнит тело, а затем проверит условие condition, 
// и пока его значение равно true, он будет выполняться снова и снова.

console.log("k=0 do{k++}... ", "while(k<6)")
let k = 0
do {
    console.log(k)
    k++
} while (k < 6);

/*
Такая форма синтаксиса оправдана, если вы хотите,
чтобы тело цикла выполнилось хотя бы один раз,
даже если условие окажется ложным.
*/

//! for

// for (начало; условие; шаг) {
// ... тело цикла ...
// }

// Если условие == true > Выполнить тело, Выполнить шаг 
// if (i < 3) { alert(i); i++ } х3 раза

console.log(" let declared outside  for with l")
let l = 0;
for (l; l < 8; l++) {
    console.log(l)
};

console.log(" let declared inside  for with u")
for (let u = 0; u < 10; u++) {
    console.log(u)
};

for (; i < 3; i++) { // нет необходимости в "начале"
    console.log(i); // 0, 1, 2
}

console.log("Это сделает цикл аналогичным while (i < 3)");
for (; i < 3;) { // Можно убрать и шаг
    console.log(i++); // 0, 1, 2
}

// for (; ;) { }; // Вечно

//! break

let sum = 0;
while (true) {
    let value = +prompt("Введите число", '')
    if (!value) break

    sum += value
};
alert('Сумма: ' + sum);

//! continue - «облегчённая версия» break

function forContinue() {
    for (let w = 0; w < 10; w++) {
        if (w % 2 === 0) {
            console.log(w, "Для чётных чисел ---w")
            continue
        }
    }

    for (let f = 0; f < 10; f++) {
        if (f % 2) {
            console.log(f, "Для нечётных чисел ---f")
            continue
        }
    }
};
console.log(forContinue());

//! Метки для break/continue

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; i < 3; j++) {
        let input = prompt(`Значение на координатах (${i},${j})`, '')
        if (!input) break outer
    }
}
alert('Готово!');

//! Задачи

let o = 3;
while (o) {
    alert(o--)
};

//? разница в ++ (пост\префиксная форма)
let y = 0;
while (++y < 5) {
    alert(y) // 1,2,3,4 
};
let q = 0;
while (q++ < 5) {
    alert(q) // 1,2,3,4,5
};

//? ++ в for цикле роли не играет, начальное значение 0
for (let i = 0; i < 5; i++) {
    alert(i) // 0,1,2,3,4
};
for (let i = 0; i < 5; ++i) {
    alert(i) // 0,1,2,3,4
};

//? заменить на while
for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
};
let h = 0;
while (h < 3) {
    alert(`number ${h}!`)
    h++
};

//? Повторять цикл, пока ввод неверен
let num = 100;
outer: while (num) {
    let value = prompt("Введите число больше 100 в do()", 0, '')
    if (value === null) {
        console.log("Цикл был прерван пользователем.");
        break outer;
    }
    value = +value
    if (value < num) {
        continue
    } else {
        break outer
    }
};
let sus;
do {
    sus = prompt("Введите число больше 100 в do(...)while(){ }", 0)
} while (sus <= 100 && sus);

//? Вывести простые числа (с двумя(2) делителями),
//? без составных(с тремя(3) и более делителями)
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue nextPrime
        }
    }
    alert(i)
    console.log(i)
};