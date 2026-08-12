/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */

const cardToRemove = 'Карточка-3';
const index1 = cards.indexOf(cardToRemove);
console.log(cardToRemove);
console.log(index1);

cards.splice(index1, 1);
console.table(cards);

/*
 * Добавление (по индексу)
 */

const cardToInsert = 'Карточка-6';
const index2 = 5;

cards.splice(index2, 0, cardToInsert);
console.table(cards);

cards.splice(3, 0, 5, 10, 20);
console.table(cards);

/*
 * Обновление (по индексу)
 */

const cardToUpdate = 'Карточка-4';
const index3 = cards.indexOf(cardToUpdate);

console.log(index3);

cards.splice(index3, 1, 'Обновленная карточка-3');

console.table(cards);
