/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = '';
// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);

// console.log(string.slice(0, string.length - 1));
// console.log(string.slice(0, 20));
// console.log(string.length);

const string = friends.join(', ');
console.log(friends);
console.log(string);

// Должно получиться 'Mango,Poly,Kiwi,Ajax'
