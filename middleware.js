//* middleware функция
function logger(req, res, next) {
    console.log(`${req.method} request for ${req.url}`);
    next(); // передать управление следующему middleware
}

// применение middleware к приложению Express
const express = require('express');
const app = express();

// использование middleware для всех запросов
app.use(logger);

// обработка маршрутов
app.get('/', (req, res) => {
    res.send('Привет, мир!');
});

app.listen(3000, () => {
    console.log('Сервер запущен на порте 3000');
});

//* middleware функция для аутентификации
function authenticate(req, res, next) {
    // Проверка аутентификации пользователя
    if (req.isAuthenticated()) {
        return next(); // если пользователь аутентифицирован, продолжить
    }
    // если не аутентифицирован, перенаправить на страницу входа
    res.redirect('/login');
}

// применение middleware к определенному маршруту
app.get('/profile', authenticate, (req, res) => {
    res.send('Профиль пользователя');
});

//* middleware функция для обработки ошибок
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Что-то пошло не так!');
}

// применение middleware для обработки ошибок
app.use(errorHandler);

// пример использования в маршруте
app.get('/error', (req, res, next) => {
    // генерация ошибки
    const err = new Error('Пример ошибки');
    next(err); // передача ошибки в обработчик ошибок
});
