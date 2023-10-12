/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

const numbers = [5, 10, 15, 20, 25]; // Оригигальный массив

const doubleNumbers = numbers.map((number) => {
    console.log(number);

    return number * 5;
});

console.log('numbers', numbers);
console.log('doubleNumbers', doubleNumbers); // После метода данные записываются в новый массив, а не изменяют старый

/*
 * Получаем массив имён всех игроков
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
        timePlayed: 80,
        points: 48,
        online: true,
    },
];
console.table(players);

const playersName = players.map((player) => player.name); // Возврат нового массива ТОЛЬКО из имён игроков  в одну строку благодаря НЕЯВНОМУ возврату
console.log('playersName', playersName);

const playersID = players.map((player) => player.id);
console.log('playersID', playersID);

const res = players.map(({ name, online }) => ({ name, online })); // Деструктуризация короткие свойства объекта
console.log('res', res);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

const updatePoints = players.map((player) => ({
    ...player,
    points: player.points * 1.1,
}));

console.table(updatePoints); // С НЕЯВНЫМ возвратом

/*
 * Увеличиваем кол-во часов игрока по id
 */

const playerIdToUpdate = 'player-3';

const updatedTime = players.map((player) => {
    if (playerIdToUpdate === player.id) {
        console.log('Found right one - Kiwi!');

        return {
            ...player,
            timePlayed: player.timePlayed + 100,
        };
    }

    return player;
});
/* Более краткая запись 
playerIdToUpdate === player.id
    ? {
        ...player,
        timePlayed: player.timePlayed + 100,
    }
    : player;
*/
console.table(updatedTime);
