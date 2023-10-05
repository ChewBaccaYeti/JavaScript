/*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
    { name: 'Lebovski', online: false },
    { name: 'Isaac', online: true },
    { name: 'Aragorn', online: false },
    { name: 'Arthur', online: false },
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
const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.name);

        if (friend.name === friendName) {
            return 'Found you!';
        }
    }
};

// !! includes method работает только с коллекцией ПРИМИТИВОВ - числа, строки, були. В массиве он бесполезен

console.log(findFriendByName(friends, 'Arthur'));
console.log(findFriendByName(friends, 'Aragorn'));

/*
 * Получаем имена всех друзей
 */
