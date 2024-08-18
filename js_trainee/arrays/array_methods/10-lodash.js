//* lodash это библиотека МЕТОДОВ

console.dir(_); //* Все методы lodash. Нижнее подчеркивание _. обозначает обращение к методам библиотеки

/*
 * isEmpty()
 */
console.log(_.isEmpty({}));
console.log(_.isEmpty({ a: 1 }));

/*
 * get()
 *
 * - user && user.location && obj.location.city
 * - user?.location?.city
 */

const user = {
    name: 'mango',
    location: {
        city: 'Lviv',
    },
};

console.log(_.get(user, 'location.city')); //* Выдаст undefined при при отсутсвие location

console.log(user.location.city); //! Выдаст ошибку при отсутсвие location

if (user && user.location && user.location.city) {
    console.log(user.location.city); // Вместо этого можно писать пример ниже
}

console.log(user?.location?.city); //? Если первое свойство присутствует то метод двигается дальше( по ?), а если его нет то дальше он не идет и возвращает undefined

/*
 * union()
 */
//* _.union([arrays])
// Только уникальные символы, тоесть те которые не повторяются
console.table(_.union([1, 2, 3], [4, 5, 6]));
console.table(_.union(['a', 'b', 'c'], ['d', 'e', 'f']));

/*
 * range()
 */
//* _.range([start=0], end, [step=1])
// console.log(_.range(start, end, step));
console.log(_.range(1, 100)); // От 1 до 99
console.log(_.range(1, 100, 5)); // От 1 до 96 через 5
console.log(_.range(1, 1000, 100)); // От 1 до 901 через 100

/*
 * sortBy()
 */
var users = [
    { user: 'fred', age: 48 },
    { user: 'barney', age: 36 },
    { user: 'fred', age: 40 },
    { user: 'barney', age: 34 },
];

_.sortBy(users, [
    function (o) {
        return o.user;
    },
]);
console.log(
    _.sortBy(users, [
        function (o) {
            return o.user;
        },
    ])
); // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
_.sortBy(users, ['user', 'age']);
console.log(_.sortBy(users, ['user', 'age'])); // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]

/*
 * sum()для массива чисел и sumBy() для массива объектов
 */
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

console.log(_.sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(_.sumBy(players, (player) => player.timePlayed));

/*
 * uniq() и uniqBy()
 * sortedUniq() и sortedUniqBy()
 */
//* _.uniq(array)
console.log(_.uniq([2, 1, 2]));
//* _.uniqBy(array, [iteratee=_.identity])
console.log(_.uniqBy([2.1, 1.2, 2.3], Math.floor));
//* _.sortedUniq(array)
console.log(_.sortedUniq([1, 1, 2]));
//* _.sortedUniqBy(array, [iteratee])
console.log(_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor));

/*
 * random()
 */
//* _.random([lower=0], [upper=1], [floating])
console.log(_.random(1.1, 9.9, 1));

/*
 * min() и max()
 * minBy() и maxBy()
 */
console.log(_.min([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(_.max([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(_.maxBy(players, (player) => player.timePlayed));
console.log(_.minBy(players, (player) => player.timePlayed));

/*
 * camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
 */
console.log(_.camelCase('mike wazowski'));
console.log(_.capitalize('mike wazowski'));
console.log(_.kebabCase('m i k e w a z o w s k i'));
console.log(_.lowerCase('MIKE WAZOWSKI'));
console.log(_.upperCase('mike wazowski'));
