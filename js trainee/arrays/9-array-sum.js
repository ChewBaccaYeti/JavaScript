/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

// for (let i = 0; i < array1.length; i += 1) {
//     total += array1[i];
// }
console.log(array1);

// for (let i = 0; i < array2.length; i += 1) {
//     total += array2[i];
// }
console.log(array2);

const numbers = array1.concat(array2, [1, 2, 3], [40, 50, 60]);
for (const number of numbers) {
    total += number;
}
console.log(total);
console.table(numbers);
