/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */
const fnA = function (parameter) {
    const innerVariable = 'значение внутренней переменной функции fnA';

    // Возвращаемая функция
    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
        console.log('Это вызов innerFunction');
    };
    // Замыкание
    return innerFunction;
};

const fnB = fnA();

fnB();

console.log(fnB);

/*
 * Поварёнок
 */
// !! Тут повторяются вызовы функции и имена поваров
// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

// !! Чтобы работать с одним и тем же именем и разными блюдами я написал функцию которая замыкается
const makeChief = function (name) {
    const innerVar = { Jeez: 'Oh my god!!!', number: 555 };
    const message = 'Yo!';
    // Одну функцию возвращаю из другой и она получает доступ ко всем локальным переменным в родительской функции
    const makeDish = function (dish) {
        console.log(message);
        console.log(innerVar);
        console.log(`${name} готовит ${dish}`);
    };

    return makeDish;
};

const mango = makeChief('Mango');
const poly = makeChief('Poly');

console.dir(mango); // Покажет closure в консоле

mango('пирожок');
mango('омлет');
mango('котлеты');

poly('чай');
poly('супик');
poly('кофе');

/*
 * Округлятор 🤷‍♂️
 */
// !! Данная функция использует округление в зависимости от того какое число и что именно нужно сделать, использует повторение
// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder1 = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder1(3.4567, 2)); // Есть второй параметр в виде 2 после запятой
// console.log(rounder1(3.4567, 3));
// console.log(rounder1(5.1234, 2));
// console.log(rounder1(3.4567, 3)); // Тоже самое, с 3

// !! Это второй вариант который использует замыкание и без повторения того сколько чисел должно стоять после запятой
const rounder2 = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
};

const rounder3 = rounder2(3); // В эту переменую я вернул функцию из rounder2 в замыкании которой places === 3
const rounder4 = rounder2(4); // В эту переменую я вернул функцию из rounder2 в замыкании которой places === 4

console.dir(rounder3); // Покажет closure в консоле
console.dir(rounder4);

console.log(rounder3(3.45678)); // Второго параметра нет, то есть цифры после запятой которая указывала бы сколько должно быть числе после запятой
console.log(rounder4(3.4567));
console.log(rounder3(5.12345678));
console.log(rounder4(3.4567));

/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */
const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary; // Приватная переменная

    // Методы замыкания в данной функции
    return {
        raise(amount) {
            if (amount > 1000) {
                return 'Ты опять выходишь связь, мудила?';
            }
            salary += amount;
        },

        lower(amount) {
            salary -= amount;
        },

        current() {
            return `Текущая зарпалата ${employeeName} - ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory('Mango', 5000);
console.log(salaryManager.current());

salaryManager.raise(1000);
console.log(salaryManager.current());

salaryManager.raise(2000000);
console.log(salaryManager.current());
