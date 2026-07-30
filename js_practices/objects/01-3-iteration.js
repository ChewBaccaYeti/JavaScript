/*
 * Перебор через for...in и Object.keys|values|entries
 */

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};

let totalFeedback = 0;

const keys = Object.keys(feedback); // Получаю массив ключей из объекта feedback

console.log(keys);

for (const key of keys) {
    console.log(key); // Доступ к ключу
    console.log(feedback[key]); // Доступ к значению

    totalFeedback += feedback[key];
}

console.log('totalFeedback:', totalFeedback);

const values = Object.values(feedback); // Получаю массив значений из объекта feedback

console.log(values);

for (const value of values) {
    console.log(value);

    totalFeedback += value;
}

console.log('totalFeedback:', totalFeedback);
