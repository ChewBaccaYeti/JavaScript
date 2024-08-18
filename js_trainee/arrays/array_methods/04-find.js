/*
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 * - прерывает поиск на первом true
 */

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find((number) => number === 10);
console.log(number);

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

/*
 * Ищем игрока по id
 */

const playerIdToFind = 'player-3';

const playerWithId = players.find(({ id }) => id === playerIdToFind);
console.log(playerWithId);

/*
 * Ищем игрока по имени
 */

const playerNameToFind = 'Chelsy';

const playerByName = players.find(({ name }) => name === playerNameToFind);
console.log(playerByName);
