/*
 * Деструктуризация объекта (распаковка\разархивация)
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */
const playlist = {
    title: 'Мой супер плейлист',
    rating: 5,
    tracks: ['Bolt', 'Hektor', 'Divine'],
    trackCount: 3,
};

const {
    title,
    rating,
    tracks,
    trackCount: numberOfTracks = 4, // Переименование и изменения значения
    author = 'Lebovski', // Добавление нового свойства
} = playlist; // Операция деструктуризации

console.log(title, rating, tracks, numberOfTracks, author);

/*
 * Глубокая деструктуризация
 */
const profile = {
    name: 'Jacques Gluke',
    tag: 'jqluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

// const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);

/*
 * Деструктуризация массивов
 */
const rgb = [255, 100, , 80]; // Если надо пропустит свойство то просто ставится пробел

const [red, green, , blue] = rgb;

console.log(red, green, blue);

const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
};

const keys = Object.keys(authors); // Беру ключи из authors
for (const key of keys) {
    console.log(key, authors[key]); // Нахожу и ключ и значение сразу
}

const ratings = Object.values(authors); // Беру значения ключей из объекта authors и записываю их в новую переменную ratings
console.log(Math.max(...ratings)); // Распыляю ratings и нахожу найвысшее число

const entries = Object.entries(authors); // Возвращает массив массивов, где первый элемент это ключ, а второй значение ключа
console.log(entries);

for (const /*entry*/ [name, value] of entries) {
    // const [name, value] = entry; 2) Деструктуризировал сразу в цикле итерации forof

    // const name = entry[0]; 1) Тоже самое что и объявление сверху
    // const value = entry[1];

    // console.log(entry); Получу 4 массива с двумя элементами

    console.log(name, value);
}

/*
 * Операция rest (сбор)
 */
const account = {
    name: 'Big `Dude` Lebovski',
    tag: 'bgLbvsk',
    location: 'Los Angeles, USA',
    avatar: 'https://th.bing.com/th/id/OIP.xHBKGLaUWTdRWlqX7r2jRgHaDs?pid=ImgDet&rs=1',
    stats: {
        followers: 5460730,
        views: 648273,
        likes: 9137082,
    },
};

const { name, tag, location, ...restProps } = account;

console.log(name, tag, location);
console.log(restProps); // !! avatar и stats записаны сюда, так как этот метод собирает остаток от свойств объекта

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */
const showProfileInfo = function (userProfile) {
    const { name, tag, location, ...restProps } = userProfile;

    console.log(name, tag, location, ...restProps);
};
