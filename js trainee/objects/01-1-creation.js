/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */
// Usecase 1
const playList_1 = {
    name: 'playlist',
    rating: 5,
    tracks: ['Big Iron', 'Jumanji', 'Bay of Fire'],
    trackCount: 3,
};
console.log(playList_1);

// Usecase 2
const fn = function (myObject) {
    // !! Функция с параметром myObject, при вызове принимает ОДИН аргумент в виде объекта с двумя свойствами
    // Грубо говоря - myObject = {a: 1, b: 2}
    console.log(myObject);
};

fn({ a: 1, b: 2 });

// Usecase 3
const object = function () {
    return { c: 3 }; // !! Возврат - это тоже самое присвоение, когда я возвращаю что-то из функции то возврат работает как и присвоение
};
console.log(object());

/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */
const playList_2 = {
    name: 'playList',
    rating: 5,
    tracks: ['Break Free', 'Wretched', 'Noah'],
    trackCount: 3,
};
console.log(playList_2);
console.log(playList_2.name);
console.log(playList_2.rating);
console.log(playList_2.tracks);
console.log(playList_2.trackCount);

const propertyName = 'tracks'; // !! ключи в объектах это всегда строка - type: 'string'

console.log(playList_2[propertyName]); // При использовании литерала [] массив при вызове свойства из объекта я получу все 'tracks'

/*
 * Короткая запись свойств
 */
const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
    username: username,
    email, // Чтобы избежать повторения имени ключа и свойства, можно записывть сразу свойства объекта, если их названия совпадают
};
console.log(signupData);

/*
 * Вычисляемые свойства
 */
const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
    [inputName]: inputValue,
};

console.log(colorPickerData);

/*
 * Ссылочный тип {} === {}
 */
const a = { x: 1, y: 2 };
const b = a;
const c = b;

console.log(b === a);
a.d = 3; // Добавление свойства в объект
b.e = 4;
c.hello = 'Hi, world!';

console.log(a);
console.log(b);
console.log(c);

/*
 * Массивы и функции это объекты
 */
const array = [1, 2, 3];

array.greetings = ':)'; // Данный ключ будет добавлен в массив со своим свойством, так как массив это объект

console.log(array);

const func = function () {
    console.log('Hey!');
};
func.Hey = ':)';

console.dir(func.Hey);
