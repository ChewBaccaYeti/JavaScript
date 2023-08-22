/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = [
    'm4ngoDoge',
    'k1widab3st',
    'poly1scute',
    'Lebovski',
    'aj4xth3m4n',
];
console.table(logins);
const loginToFind = 'Lebovski';
let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     console.log('Login: ' + login);
//     console.log(`${login} === ${loginToFind}:`, login === loginToFind);
// }
console.log(message);

for (const login of logins) {
    console.log('Login: ' + login);
    console.log(`${login} === ${loginToFind}:`, login === loginToFind);
    if (login === loginToFind) {
        message = `Пользователь ${loginToFind} найден.`;
        break;
    } // Здесь else не нужен по логике, так как будет просто бесполезен.
}

//     if (login !== loginToFind) {
//         message = `Пользователь ${loginToFind} не найден.`;
//     } else {
//         message = `Пользователь ${loginToFind} найден.`;
//     }
console.log(message);
const messageInclude = logins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден. logins.includes`
    : `Пользователь ${loginToFind} не найден.`;
console.log(messageInclude);
console.log(logins.includes(loginToFind));
// Выше приведен декларативный код с *абстракцией* то есть с includes
// Циклы forof & for можно использовать вместе и параллельно.
// Декларативный метод с includes более краток и чище, если речь идет конкретно о подобных заданиях.
