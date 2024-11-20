/*
 * Array.prototype.reduce()
 * - Поэлементно перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

const numbersExplicit = [5, 10, 15, 20, 25];

const numbersImplicit = [6, 11, 16, 21, 26];

const totalExplicit = numbersExplicit.reduce((accumulator, number) => {
    console.log('number', number);
    console.log('accumulator', accumulator);

    return accumulator + number;
}, 0);
console.log(totalExplicit);

const totalImplicit = numbersImplicit.reduce((acc, number) => acc + number, 1);
console.log(totalImplicit);

//? accumulator = 0 -> number = 5 -> return 0 + 5
//* accumulator = 5 -> number = 10 -> return 5 + 10
//* accumulator = 15 -> number = 15 -> return 15 + 15
//* accumulator = 30 -> number = 20 -> return 30 + 20
//? accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};

const totalSalaryExplicit = Object.values(salary).reduce(
    (accumulatorTotal, value) => {
        return accumulatorTotal + value;
    },
    0,
);
console.log(totalSalaryExplicit);

const totalSalaryImplicit = Object.values(salary).reduce(
    (total, values) => total + values,
    1,
);
console.log(totalSalaryImplicit);

/*
 * Считаем общее количество часов
 */

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, online: true },
];

const totalTimeExplicit = Object.values(players).reduce(
    (accumulatorTime, value) => {
        return accumulatorTime + value.timePlayed;
    },
    0,
);
console.log(totalTimeExplicit);

const totalTimeImplicit = players.reduce(
    (acc, player) => acc + player.timePlayed,
    1,
);
console.log(totalTimeImplicit);

/*
 * Считаем общую сумму товаров корзины
 */

const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmountExplicit = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
}, 0);
console.log(totalAmountExplicit);

const totalAmountImplicit = cart.reduce(
    (total, { price, quantity }) => total + price * quantity,
    1,
);
console.log(totalAmountImplicit);

/*
 * Собираем все теги из твитов
 */

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTagsMutable = tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags); //* Если писать без ...spread то просто запушатся в новый массив другие массивы с тегами из tweets

    return allTags;
}, []);
//* Минус данного способа в том что он мутирует объект массива tweets и linter будет выдавать ошибку
console.table(allTagsMutable);

const allTagsImmutable = tweets.reduce((acc, tweet) => {
    return [...acc, ...tweet.tags];
}, []);
//* Данный способ не изменяет оригинал, а распыляет объекты в новый массив и после этого изменяет их
console.table(allTagsImmutable);

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']

const allTagsFlatMap = tweets.flatMap(tweet => tweet.tags);
console.table(allTagsFlatMap);
//* Используя flatMap, мы получаем массив тегов, и он автоматически "выравнивает" результат, чтобы получить одномерный массив, как и ранее с оператором ...spread.
