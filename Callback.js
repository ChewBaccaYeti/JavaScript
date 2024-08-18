// Определяем функцию, которая принимает два числа и callback функцию
function calculate(a, b, callback) {
    return callback(a, b);
}

// Определяем несколько callback функций
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return 'Ошибка: деление на ноль';
    }
}

// Используем функцию calculate с различными callback функциями
let result1 = calculate(10, 5, add); // 15
let result2 = calculate(10, 5, subtract); // 5
let result3 = calculate(10, 5, multiply); // 50
let result4 = calculate(10, 5, divide); // 2

console.log(result1); // Вывод: 15
console.log(result2); // Вывод: 5
console.log(result3); // Вывод: 50
console.log(result4); // Вывод: 2

//! Функция, которая имитирует получение данных с сервера
function fetchData(callback) {
    console.log('Получение данных с сервера...');

    // Симуляция задержки ответа сервера с использованием setTimeout
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe', age: 30 };
        console.log('Данные получены.');
        callback(null, data); // Вызов callback с данными
    }, 2000); // Задержка в 2 секунды
}

//! Функция, которая обрабатывает данные
function processData(error, data, callback) {
    if (error) {
        console.error('Ошибка при обработке данных:', error);
        return;
    }

    console.log('Обработка данных...');

    // Обработка данных (например, увеличение возраста на 1 год)
    setTimeout(() => {
        data.age += 1;
        console.log('Данные обработаны:', data);
        callback(null, data); // Вызов callback с обновленными данными
    }, 2000); // Задержка в 2 секунды
}

//! Функция, которая отображает данные
function displayData(error, data) {
    if (error) {
        console.error('Ошибка при отображении данных:', error);
        return;
    }

    console.log('Отображение данных:');
    console.log(`ID: ${data.id}`);
    console.log(`Имя: ${data.name}`);
    console.log(`Возраст: ${data.age}`);
}

// Вызов цепочки функций с использованием callback'ов
fetchData((error, data) => {
    if (error) {
        console.error('Ошибка при получении данных:', error);
        return;
    }

    processData(null, data, (error, processedData) => {
        if (error) {
            console.error('Ошибка при обработке данных:', error);
            return;
        }

        displayData(null, processedData);
    });
});
