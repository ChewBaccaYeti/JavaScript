// BigInt
let x = BigInt(1111133333555557777799999);

console.log(x);

// Numbers: operators
// унарный, бинарный, операнд(аргументы)
const five = 5;
const seven = 7;

console.log(+five + +seven); // 12

/*
!Поддерживаются следующие математические операторы:

Сложение +,
Вычитание -,
Умножение *,
Деление /,
Взятие остатка от деления %,
Возведение в степень **.
*/

let a = 2;
let b = 4;

let c = 3 - (a = b + 6);
console.log(c); // -7

let d, e, f;

d = e = f = 3 + 3;
console.log(d, e, f); // 6 6 6

let n, p, m;

m = 3 + 5;
p = m;
p = n;

console.log(m) // 8

let v = 2;
v = v + 4;
v = v + 6;

console.log(v); // 12

let t = 3;
t += 6;
t *= 4;

console.log(t); // 36

let j = 4;
j *= 5 + 6;

console.log(j); // 44

