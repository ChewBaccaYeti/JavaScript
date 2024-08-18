//* middleware функция
function logger(req, res, next) {
    console.log(`${req.method} request for ${req.url}`);
    next(); // передать управление следующему middleware
}

// применение middleware к приложению Express
const express = require('express');
const app = express();
const port = 6001

// использование middleware для всех запросов
app.use(logger)
    .get('/', (req, res) => { // обработка маршрутов
        res.send('Привет, мир!');
    }).listen(port, () => {
        console.log('Сервер запущен на порте 6001');
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

const PORT = 3000;

// Middleware для логирования запросов
function requestLogger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); // Передаем управление следующему middleware
}

// Middleware для проверки авторизации
function checkAuth(req, res, next) {
    const auth = req.headers.authorization;
    if (auth === 'Bearer secret-token') {
        next(); // Если авторизация прошла, передаем управление следующему middleware
    } else {
        res.status(403).send('Forbidden'); // Если нет, отвечаем 403 Forbidden
    }
}

// Основной обработчик маршрута
app.get('/', (req, res) => {
    res.send('Welcome to the home page!'); // Применение middleware в приложении
}).use(requestLogger) // Логирование будет выполнено для каждого запроса
    .use(checkAuth) // Авторизация будет проверяться для каждого запроса
    // Применение middleware к конкретному маршруту
    .get('/protected', (req, res) => {
        res.send('This is a protected route.');
    })
    .listen(PORT, () => { // Запуск сервера
        console.log(`Server is running on http://localhost:${PORT}`);
    });