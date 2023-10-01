/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

const slugify = function (string) {
    // const normalizedTitle = string.toLowerCase(); // Первый способ, абстракция, где 3 метода в\д друг с другом
    // const words = normalizedTitle.split(' ');
    // const slug = words.join('-');

    // return slug;

    return string.toLowerCase().split(' ').join('-'); // Второй способ более компактный и выполняет задачу также хорошо
};

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));
