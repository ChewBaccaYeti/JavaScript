const textEl = document.querySelector('.article-text');
textEl.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
console.log(textEl.textContent); // text inside p.article-text
const titleEl = document.querySelector('.article-title');
titleEl.textContent = 'Welcome to Bahamas!';

const link = document.querySelector('.link');
console.log(link.classList);
const hasActiveClass = link.classList.contains('is-active');
console.log(`hasActiveClass - ${hasActiveClass}`);
link.classList.add('special');
console.log(link.classList);
link.classList.remove('is-active');
console.log(link.classList);
link.classList.toggle('is-active');
console.log(link.classList);
link.classList.replace('special', 'regular');
console.log(link.classList);

const button = document.querySelector('.btn');
button.style.backgroundColor = 'teal';
button.style.fontSize = '24px';
button.style.textAlign = 'center';
console.log(button.style); // inline styles object

const image = document.querySelector('.image');
console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}
console.log(image.hasAttribute('src')); // true
console.log(image.getAttribute('alt')); // "Mountain"
image.setAttribute('alt', 'Amazing nature');
console.log(image.getAttribute('alt')); // Amazing nature
image.style.width = '15rem';

const openBtn = document.querySelector('button[data-action="open"]');
console.log(openBtn.dataset.action); // "open"
const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"

const heading = document.createElement('h2');
heading.textContent = 'This is a heading';
console.log(heading);

const list = document.querySelector('.usernames');
// Adds an item to the end of the list
const lastItem = document.createElement('li');
lastItem.textContent = 'Poly';
list.append(lastItem);
// Adds an item to the beginning of the list
const firstItem = document.createElement('li');
firstItem.textContent = 'Ajax';
list.prepend(firstItem);
// Adds a title before the list
const title = document.createElement('h2');
title.textContent = 'USERNAMES';
list.before(title);
// Adds a paragraph after the list
const text = document.createElement('p');
text.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!';
list.after(text);

const itemToRemove = document.createElement('div');
itemToRemove.textContent = 'Remove this div';
list.append(itemToRemove);
itemToRemove.remove();

/*
* Repaint - происходит, когда изменения затронули стили влияющие на внешний вид элемента, но не на геометрию. 
Например opacity, background-color, visibility и outline. 
Браузер отрисовывает элемент заново, с учётом нового стиля. 
Также проверяется видимость других элементов, один или более могут оказаться скрыты под изменившим внешний вид.

* Reflow - происходит когда изменения затрагивают содержимое, структуру документа, положение элементов. 
Идет пересчет позиционирования и размеров, что ведет к перерисовке части или всего документа. 
Изменение размера одного родительского контейнера повлияет на всех его детей и предков. 
Имеет значительно большее влияние на производительность, чем repaint.

! Все вышеперечисленные операции блокируют браузер. Страница не может выполнять никакие другие операции в то время, когда происходит reflow или repaint.
*/

//* Чтение: Свойство innerHTML хранит содержимое элемента, включая теги, в виде строки. Возвращаемое значение это всегда валидный HTML-код.

const article = document.querySelector('.article');
console.log(article.innerHTML);

const article_Title = document.querySelector('.article .article_Title');
console.log(article_Title.innerHTML);

const article_Text = document.querySelector('.article .article_Text');
console.log(article_Text.innerHTML);

const article_Link = document.querySelector('.article .article_Link');
console.log(article_Link.innerHTML);

/* 
* Изменение: Свойство innerHTML доступно как для чтения, так и для записи.
Если записать в него строку с HTML-тегами, то браузер во время парсинга строки превратит их в валидные элементы и добавит в DOM-дерево.
*/

article_Title.innerHTML = 'New and <span class="accent">improved</span> title';
const accent = document.querySelector('.accent');
accent.style.color = 'tomato';
accent.style.textDecoration = 'underline';
/* 
Если в свойство innerHTML записать пустую строку, то содержимое элемента будет очищено.
Это простой и быстрый способ удаления всего содержимого.

Однотипная (шаблонная) разметка создается из массива данных. 
Приём заключается в переборе этого массива и составлении одной строки с HTML тегами, которую потом записываем в innerHTML элемента.
*/

const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const technologiesList = document.querySelector('.technologiesList');

const markup = technologies
    .map((technology) => `<li class="list-item">${technology}</li>`)
    .join('');
console.log(markup);
technologiesList.innerHTML = markup;

/* 
* Добавление: Изменение elem.innerHTML полностью удалит и пересоздаст всех потомков элемента elem. 
Если элемент изначально не пустой, то будут дополнительные затраты на сериализацию уже существующей разметки, а это плохо.
*/

const article_replace = document.querySelector('.article_replace');
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
<a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference?
// Article title is lost because we overwrite element content.
article_replace.innerHTML += htmlString;

/*
* Метод insertAdjacentHTML()
Современный метод для добавления строки с HTML-тегами до, после или внутрь элемента. 
Решает проблему innerHTML с повторной сериализацией содержимого элемента при добавлении разметки к уже существующей.

? elem.insertAdjacentHTML(position, string);
Аргумент position - это строка, позиция относительно элемента elem. Принимает одно из четырёх значений.

"beforebegin" - перед elem
"afterbegin" - внутри elem, перед всеми детьми
"beforeend" - внутри elem, после всех детей
"afterend" - после elem
*/

const newTechnologies = ['React', 'TypeScript', 'Node.js'];
const newMarkup = newTechnologies
    .map((technology) => `<li class="list-item new">${technology}</li>`)
    .join('');

technologiesList.insertAdjacentHTML('beforeend', markup);
technologiesList.insertAdjacentHTML(
    'beforebegin',
    '<h2>Popular technologies</h2>'
);

//! "beforebegin" и "afterend" работают только в том случае, если elem уже находится в DOM-дереве.
