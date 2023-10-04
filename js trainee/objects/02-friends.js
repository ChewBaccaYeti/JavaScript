/*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
];

console.table(friends);

for (const friend of friends) {
    // Массив сложных типов, то есть объектов, в цикле итерации forof я получаю ССЫЛКУ на объект
    console.log(friend);

    friend.newProp = 567;
}

console.table(friends);

/*
 * Ищем друга по имени
 */
const findFriendByName = function (allFriends, friendName) {};
