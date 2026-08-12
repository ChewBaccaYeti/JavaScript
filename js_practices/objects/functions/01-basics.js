/*
 * Функции
 * - Функциональные выражения
 * - Аргументы и параметры
 * - Возврат значения
 */

const add_1 = function () {
    console.log('Выполняет функцию add_1'); // Тело функции, но ничего при ввыводе происходить не будет, так как она просто объявлена
}; // функциональное выражение, так как я объявляю функцию и присваиваю ее в переменную

add_1(); // Вызов функции - при просмотре консоли теперь я увижу сообщение из console.log
add_1(); // Эту тоже
add_1(); // и это

const add_2 = function (x, y) {
    //! Функция принимает два параметра, в данном случае это x, y
    console.log(x);
    console.log(y);

    const result = x + y;
    console.log('x + y:', result);
    console.log('Выполняет функцию add_2');

    return x + y;
};

const r1 = add_2(5, 3); //! При вызове функции в параметры передаются аргументы - значение для параметров, в точной последовательности
console.log('r1:', r1);
const r2 = add_2(12, 7);
console.log('r2:', r2);
const r3 = add_2(46, 82);
console.log('r3:', r3);

const fnA = function () {
    console.log(fnA);
    fnB(); // Еще не объявлена
};
// fnA(); // Тут начнется выполнение бесконечного стека вызовов функций

const fnB = function () {
    console.log(fnB);
    fnC(); // Еще не объявлена
};
// fnB();

const fnC = function () {
    console.log(fnC);
    fnA();
};
// fnC(); // Достаточно вызвать последнюю функцию чтобы начать каскад вызовов (смотри последовательность вложенности вызовов в функциях)

const fn = function () {
    console.log(Math.random() * 10);
    console.log(1, ':', Math.floor(Math.random() * 10) + 1); // Вернет целое число от 10 до 10 включительно
    console.log(2, ':', Math.random() * 100);
    console.log(3, ':', Math.random() * 1000);

    console.log(fnA);
    console.log(fnB);
    console.log(fnC);
    return;
};
fn();

// console.log('Лог перед вызовом функции A');
// console.log(fnA());
// console.log('Лог после вызова функции A');
// console.log('Лог перед вызовом функции B');
// console.log(fnB());
// console.log('Лог после вызова функции B');
// console.log('Лог перед вызовом функции C');
// console.log(fnC());
// console.log('Лог после вызова функции C');

//! Данные действия - демонстрация Стека вызова функции. В зависимости от написания его поведение может иметь несколько видов.
