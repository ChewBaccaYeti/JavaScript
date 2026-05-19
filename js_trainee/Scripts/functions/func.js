//! Задачи
// Будет ли эта функция работать как-то иначе, если убрать else?
function checkAge(age) {
    if (age > 18) {
        return true
    } else {
        // ...
        return confirm('Родители разрешили?')
    }
}

function checkAge(age) {
    if (age > 18) {
        return true
    }
    // ...
    return confirm('Родители разрешили?')
}
//? Нет, не будет, их логика будет идентична

// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
let age
function checkAgeIf(age) {
    if (age > 18) {
        return true
    } else {
        return confirm('Родители разрешили?')
    }
}

//? Моё решение
function checkAge_0(age) {
    return (age ?? 0) >= 18
}

function checkAge_1(age) {
    return (age >= 18 || 0)
}

//? Решение из задачи
function checkAge_2(age) {
    return (age >= 18) ? true : confirm('Родители разрешили?')
}

function checkAge_3(age) {
    return (age >= 18) || confirm('Родители разрешили?')
}

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min_0(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}

function min_1(a, b) {
    return a < b ? a : b
}

function max(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

console.log(min_0(3, -1))
console.log(min_0(1, 1))
console.log(min_0(2, 5))

console.log(min_1(6, -3))
console.log(min_1(4, 9))
console.log(min_1(2, 7))

console.log(max(2, 5))
console.log(max(3, -1))
console.log(max(1, 1))