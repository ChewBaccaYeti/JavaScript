/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 *
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */

const players = [
    {
        id: 'player-1',
        name: 'Mango',
        timePlayed: 310,
        points: 54,
        online: true,
    },
    {
        id: 'player-2',
        name: 'Poly',
        timePlayed: 470,
        points: 92,
        online: false,
    },
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

/*
 * Поиск онлайн и оффлайн игроков
 */

const isEveryOnline = players.every((player) => player.online);
console.log(isEveryOnline); // false

const isEveryOffline = players.every((player) => !player.online);
console.log(isEveryOffline); // false

const isSomeOnline = players.some((player) => player.online);
console.log(isSomeOnline); // true

const isSomeOffline = players.some((player) => !player.online);
console.log(isSomeOffline); // true

/*
 * Все ли игроки играли больше > 200 часов ИЛИ || < 200 меньше
 */

const isEveryPlayed = players.every((player) => player.timePlayed >= 200);
console.log(isEveryPlayed); // false

const isSomePlayed = players.some((player) => player.timePlayed < 200);
console.log(isSomePlayed); // true
