/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

// 1 переменная тотал
// 2 перебрать массив

// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);
//     ! 3 на каждой итерации проверить элемент на чётность
//     if (number % 2 === 0) {
//         console.log(number, 'Чётное!');
//         ! 4 если четный плюсуем к тотал
//         total += number;
//     }
// }
// console.log('Total:', total);

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         console.log(number, '${number} - Чётное!');
//         total += number;
//     }
// }
// console.log('Total:', total);

// !! Логика от обратного - то есть, если НЕ то пропускаем, в противном случае - пропускаем
for (const number of numbers) {
    if (number % 2 !== 0) {
        console.log('Эту итерацию нужно пропустить - НЕчётное', number);
        continue;
        // Это говорить циклу, если код выполнился на текущей итерации то больше код выполнять не нужно,
        //то есть он переходит на следующую итерацию
    }
    console.log(number, '${number} - Чётное!');
    total += number;
}
console.log('Total:', total);
