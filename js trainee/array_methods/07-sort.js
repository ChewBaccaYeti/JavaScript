/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3];
numbers.sort();
console.log('numbers', numbers);

const letters = ['b', 'B', 'a', 'A'];
letters.sort();
console.log('letters', letters);

/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

numbers.sort((curEl, nextEl) => {
    return nextEl - curEl;
});
console.log(numbers);

numbers.sort((curEl, nextEl) => {
    return curEl - nextEl;
});
console.log(numbers);

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

const copy = [...numbers]; // Копия
copy.sort();
console.log(copy);

const ascSortNumbers = [...numbers].sort((a, b) => b - a);
console.log(ascSortNumbers);
console.log(ascSortNumbers.reverse());

const descSortNumbers = [...numbers].sort((a, b) => a - b);
console.log(descSortNumbers);
console.log(descSortNumbers.reverse());

/*
 * Кастомная сортировка сложных типов
 */
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// По игровому времени

const sortByNoob = [...players].sort(
    (currentPlayer, nextPlayer) =>
        currentPlayer.timePlayed - nextPlayer.timePlayed
);
console.table(sortByNoob);

const sortByBest = [...players].sort(
    (currentPlayer, nextPlayer) =>
        nextPlayer.timePlayed - currentPlayer.timePlayed
);
console.table(sortByBest);

// По имени

const byName = [...players].sort((a, b) => {
    const result = a.name[0] > b.name[0];

    if (result) {
        return 1;
    }

    if (!result) {
        return -1;
    }
});
console.table(byName);
