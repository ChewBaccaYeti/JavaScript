/*
 * Array.prototype.filter()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 *    - если коллбек вернул true элемент добавляется в возвращаемый массив
 *    - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
 */

const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter((number) => {
    console.log(number);

    if (number < 10 || number > 20) {
        return number;
    }
});
console.log(filteredNumbers);

/*
 * Получаем массив всех онлайн и оффлайн игроков
 */

const players = [
    {
        id: 'player-1',
        name: 'Mango',
        timePlayed: 310,
        points: 54,
        online: false,
    },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    {
        id: 'player-4',
        name: 'Ajax',
        timePlayed: 150,
        points: 71,
        online: false,
    },
    {
        id: 'player-5',
        name: 'Chelsy',
        timePlayed: 280,
        points: 48,
        online: true,
    },
];

// ! ONLINE
const onlinePlayers_0 = players.filter((player) => player.online);
console.log(onlinePlayers_0);
// ИЛИ
const onlinePlayers_1 = players.filter(({ online }) => online);
console.log(onlinePlayers_1);

// ! OFFLINE
const offlinePlayers_0 = players.filter((player) => !player.online);
console.log(offlinePlayers_0);
// ИЛИ
const offlinePlayers_1 = players.filter(({ online }) => !online);
console.log(offlinePlayers_1);

/*
 * Получаем список хардкорных и начинающих игроков с временем больше и меньше 250
 */

// HARDCORE
const hardcorePlayers_0 = players.filter((player) => player.timePlayed > 250);
console.log(hardcorePlayers_0);
// ИЛИ
const hardcorePlayers_1 = players.filter(({ timePlayed }) => timePlayed > 250);
console.log(hardcorePlayers_1);

// NOOBS
const noobPplayers_0 = players.filter((player) => player.timePlayed < 250);
console.log(noobPplayers_0);
// ИЛИ
const noobPplayers_1 = players.filter(({ timePlayed }) => timePlayed < 250);
console.log(noobPplayers_1);
