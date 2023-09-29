/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);

const words = normalizedTitle.split(' ');
console.log(words);

const slug = words.join('-');
console.log(slug);

const allMethods = title.toLowerCase().split(' ').join('-'); // Эта страка выполняет сразу 3 действия, используя методы которые расписаны по отдельности выше.
console.log(allMethods);

const shift = words.shift();
console.log(shift);

const pop = words.pop();
console.log(pop);

const push = words.push();
console.log(push);
