/*
 * Свойство innerHTML
 * - чтение
 * - запись
 */

const titleEl = document.querySelector('.title');
console.log(titleEl.textContent);
console.log(titleEl.innerHTML);
// titleEl.innerHTML = '<a href="">Это ссылка</a>'; // Заменит строку
// titleEl.innerHTML = ''; // Очистит контент

/*
 * Вставка разметки с insertAdjacentHTML()
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 */

titleEl.insertAdjacentHTML('beforebegin', '<p>Это Haisenberg</p>');

titleEl.insertAdjacentHTML('afterbegin', '<p>Это Lebowski</p>');

titleEl.insertAdjacentHTML('beforeend', '<p>Это Wazowski</p>');

titleEl.insertAdjacentHTML(
    'afterend',
    '<a href="" class="title__link">Это ссылка</a>'
);
