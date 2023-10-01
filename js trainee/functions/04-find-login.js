/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
// console.log(allLogins);
// console.log(loginToFind);

// let message = `Пользователь ${loginToFind} не найден.`;

// for (const login of allLogins) {
// if (login === loginToFind) {
// message = `Пользователь ${loginToFind} найден.`;
// return `Пользователь ${loginToFind} найден.`; // Выход из функции при первом совпадении, прерывается цикл
// }
// }
// return message;
// return `Пользователь ${loginToFind} не найден.`;
// };

const findLogin = function (allLogins, loginToFind) {
    // Поиск через тернарный оператор, одним выражением
    // const message = logins.includes(loginToFind)
    return allLogins.includes(loginToFind)
        ? `Пользователь ${loginToFind} найден.`
        : `Пользователь ${loginToFind} не найден.`;
    // return message;
};

// findLogin(logins);

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));
