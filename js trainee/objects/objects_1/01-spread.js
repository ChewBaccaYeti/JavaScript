/*
 * Операция spread (распыление) // !! Распыляются строки, массивы и объекты
 * - Array.prototype.concat() (добавление\сшивание двух и более массивов) и аналог через spread
 */
const numbersConcat = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

console.log(numbersConcat);

const numbersSpread = [0, 7, 8, ...[1, 2, 3], 4, 5, 6];

console.log(numbersSpread);

const numbersMegaSpread = [
    1000,
    ...[1, 2, 3],
    2000,
    ...[4, 5, 6],
    3000,
    ...[7, 8, 9],
]; // !! Распыляет массив и добавляет в другой, если стоят ПРИМИТИВЫ - делает копию, если СЛОЖНЫЕ типы то ставит ссылку на них

console.log(numbersMegaSpread);

/*
 * Поиск самой маленькой или большой температуры (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

console.log(Math.min(...temps));
console.log(Math.max(...temps));

/*Пример*/
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

const b = [...a]; // Ссылка на массив в новый пустой массив(распыление массива а в b)

console.log('a: ', a);
console.log('b: ', b); // В данном случае копируется массив, а точнее ставится ссылка, причем эти два массива никак не связаны
console.log(a[0] === b[0]); // true потому что элементы между собой равны, так как во второй массив кладется ссылка на первый
console.log(a === b); // false потому что два разных массива(две разные ячейки памяти)

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTempsConcat = lastWeekTemps.concat(currentTemps, nextWeekTemps);
console.log(allTempsConcat); // concat method

const allTempsSpread = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTempsSpread); // spread method

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */
const c = { x: 1, y: 2 };
const d = { x: 0, z: 3 };

const defaultSettings = {
    theme: 'light',
    showNotifications: true,
    hideSidebar: false,
};

const userSettings = {
    showNotifications: false,
    hideSidebar: true,
};

const finalSettings = {
    // При распылении 2 объектов в финальный, значения из двух предыдущих сшиваются и переписываются за последним свойством
    ...defaultSettings,
    ...userSettings,
};

console.log(finalSettings);
