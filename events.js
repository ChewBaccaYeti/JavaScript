//* Добавляет слушателя события на элемент.
//! element.addEventListener(event, handler, options);
/*
event - имя события, строка, например "click".
handler - коллбэк-функция которая будет вызвана при наступлении события.
? options - необязательный объект параметров с расширенными настройками.
*/

const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    console.log('Button was clicked!!! Amazing!!!');
});

// Для коллбэка можно (и желательно) использовать отдельную функцию и передавать на неё ссылку.
// Именованная функция повышает читаемость кода.

const handleClick = () => {
    console.log('Button was clicked by callback!!! Jesus!!!');
};
button.addEventListener('click', handleClick);

// На одном элементе может быть сколько угодно обработчиков событий, даже событий одного типа.
// Коллбэк-функции будут вызываться в порядке регистрации их в коде.

const singleBtn = document.querySelector('#single');

const handleClick_2 = () => {
    console.log('click event listener callback');
};

singleBtn.addEventListener('click', handleClick_2);

// ===============================================
const multiBtn = document.querySelector('#multiple');

const firstCallback = () => {
    console.log('First callback!');
};
const secondCallback = () => {
    console.log('Second callback!');
};
const thirdCallback = () => {
    console.log('Third callback!');
};

multiBtn.addEventListener('click', firstCallback);
multiBtn.addEventListener('click', secondCallback);
multiBtn.addEventListener('click', thirdCallback);

//* Удаляет слушателя события с элемента.
//! element.removeEventListener(event, handler, options);

// Для удаления нужно передать ссылку именно на ту коллбэк-функцию, которая была назначена в addEventListener().
// В таком случае для коллбэков используют отдельную функцию и передают её по имени (ссылку).
const addListenerBtn = document.querySelector('.js-add');
const removeListenerBtn = document.querySelector('.js-remove');
const btn = document.querySelector('.target-btn');

const handleClick_3 = () => {
    console.log('click event listener callback');
};

addListenerBtn.addEventListener('click', () => {
    btn.addEventListener('click', handleClick_3);
    console.log('click event listener was added to btn');
});

removeListenerBtn.addEventListener('click', () => {
    btn.removeEventListener('click', handleClick_3);
    console.log('click event listener was removed from btn');
});

// Если коллбэком будет функция которая использует this,
// по умолчанию контекст внутри неё будет ссылаться на DOM-элемент на котором висит слушатель.
const mango = {
    username: 'Mango',
    showUsername() {
        console.log(this);
        console.log(`My username is: ${this.username}`);
    },
};
const js_btn = document.querySelector('.js-btn');
mango.showUsername();
js_btn.addEventListener('click', mango.showUsername.bind(mango)); // Привязка контекста методов объекта

// Каждое событие представляет собой объект, который содержит информацию о деталях события и автоматически передается первым аргументом в обработчик события.
// Все события происходят от базового класса Event.
const eventButton = document.querySelector('.event-button');
const eventHandleClick = (event) => {
    console.log('event: ', event);
    console.log('event type: ', event.type);
    console.log('currentTarget: ', event.currentTarget);
};
eventButton.addEventListener('click', eventHandleClick);
// Параметр event это и есть обьект события, который автоматически передается первым аргументом при вызове коллбэк функции.
// Мы можем называть его как угодно, но обычно его объявляют как e, evt или event.

//! Некоторые свойства объекта события:

//? event.type - тип события.
//? event.currentTarget - элемент, на котором выполняется обработчик события.

//* Действия браузера по умолчанию и их отмена
// Для отмены действия браузера по умолчанию на объекте события есть стандартный метод preventDefault().

const form = document.querySelector('.register-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { username, password },
    } = event.currentTarget;
    console.log(username.value, password.value);
});
