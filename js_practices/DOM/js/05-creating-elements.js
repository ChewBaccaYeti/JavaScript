/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок, параграф и контейнер
 */
const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Это заголовок страницы :)';
console.log(titleEl);

const ulEl = document.createElement('ul');
ulEl.classList.add('page-list');
ulEl.textContent = 'Это список страницы';
console.log(ulEl);

const listItemEl = document.createElement('li');
listItemEl.classList.add('page-list_item');
listItemEl.textContent = 'Это пункт списка страницы 1';

const listItemEl_1 = document.createElement('li');
listItemEl_1.classList.add('page-list_item');
listItemEl_1.textContent = 'Это пункт списка страницы 2';

const listItemEl_2 = document.createElement('li');
listItemEl_2.classList.add('page-list_item');
listItemEl_2.textContent = 'Это пункт списка страницы 3';

ulEl.append(listItemEl, listItemEl_1, listItemEl_2);

const divEl = document.createElement('div');
divEl.classList.add('page-div');
divEl.textContent = 'Это контейнер страницы';
console.log(divEl);

const paragraphEl = document.createElement('p');
paragraphEl.classList.add('page-paragraph');
paragraphEl.textContent = 'Это параграф старницы 1';

const paragraphEl_1 = document.createElement('p');
paragraphEl_1.classList.add('page-paragraph');
paragraphEl_1.textContent = 'Это параграф старницы 2';

const paragraphEl_2 = document.createElement('p');
paragraphEl_2.classList.add('page-paragraph');
paragraphEl_2.textContent = 'Это параграф старницы 3';

divEl.append(paragraphEl, paragraphEl_1, paragraphEl_2);

document.body.appendChild(titleEl);
document.body.appendChild(divEl);
document.body.appendChild(ulEl);

// document.body.append(titleEl, divEl, ulEl); альтернатива

/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');
imageEl.src =
    'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.width = 320;
console.log('imageEl', imageEl);

const heroEl = document.querySelector('.hero');
heroEl.append(titleEl, imageEl);

/*
 * Создаём и добавляем новый пункт меню
 */
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile';

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');
navEl.insertBefore(navItemEl, navEl.firstElementChild);
