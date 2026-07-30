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

console.log(m); // 8

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

//! Примитивы и typeof
// 7 примитивов: string, number, bigint, boolean, undefined, symbol, null
// Всё остальное — object (включая массивы, функции, даты)
console.log(typeof 'text'); // 'string'
console.log(typeof 42); // 'number'
console.log(typeof 10n); // 'bigint'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof Symbol()); // 'symbol'
console.log(typeof null); // 'object' — известный баг языка, исторический
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object' — для массивов используй Array.isArray()
console.log(typeof function () {}); // 'function' — единственный объект с особым typeof

//! Преобразование типов (явное)
console.log(Number('42')); // 42
console.log(Number('42px')); // NaN
console.log(parseInt('42px', 10)); // 42 — парсит до первого нечисла, основание 10
console.log(parseFloat('3.14abc')); // 3.14
console.log(String(42)); // '42'
console.log((42).toString(2)); // '101010' — в двоичную систему
console.log(Boolean('')); // false
console.log(Boolean('0')); // true — непустая строка истинна!

//! Falsy-значения (всего 8) — всё остальное truthy
// false, 0, -0, 0n, '', null, undefined, NaN
[false, 0, '', null, undefined, NaN, 0n].forEach(v =>
    console.log(v, '=>', Boolean(v)),
); // все false

//! == (с приведением типов) vs === (строгое)
console.log(1 == '1'); // true  — приводит типы
console.log(1 === '1'); // false — разные типы
console.log(null == undefined); // true  — особый случай ==
console.log(null === undefined); // false
console.log(NaN === NaN); // false — NaN не равен ничему, даже себе
console.log(Number.isNaN(NaN)); // true — правильная проверка на NaN
console.log(Object.is(NaN, NaN)); // true — Object.is различает -0 и +0, и видит NaN

//! Специальные числовые значения
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(Number.isInteger(5.0)); // true
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log((0.1 + 0.2).toFixed(2)); // '0.30' — плавающая точка: 0.1+0.2 !== 0.3

//! Optional chaining ?. и nullish-coalescing ??
const user = { profile: { name: 'Bob' } };
console.log(user.profile?.name); // 'Bob'
console.log(user.account?.balance); // undefined — без ошибки (вместо TypeError)
console.log(user.account?.balance ?? 'нет счёта'); // 'нет счёта' — ?? срабатывает только на null/undefined
console.log(0 ?? 'default'); // 0  — в отличие от ||, 0 и '' сохраняются
console.log(0 || 'default'); // 'default' — || срабатывает на любом falsy

//! Символы — уникальные неперечисляемые ключи
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // false — каждый символ уникален
