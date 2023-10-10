/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

const add = function (a, b, c) {
    // По классике, у функционального выражения есть локальная переменная arguments
    console.log(a, b, c);
    console.log(arguments);
    return a + b + c;
};
console.log(add(6, 11, 16));

const addArrowExplicit = (...args) => {
    // Rest для сбора аргументов
    // !! У стрелочной функции arguments НЕТ
    // !! И ...args здесь это уже не ПСЕВДОмассив а обычный массив
    console.log(args);
    // return a + b + c;
};
console.log(addArrowExplicit(7, 12, 17));

const addArrowImplicit = (a, b, c) => a + b + c;
console.log(addArrowImplicit(8, 13, 18));
