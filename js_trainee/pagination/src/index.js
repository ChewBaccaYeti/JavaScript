/*
 * - Пагинация
 *   - страница и кол-во на странице
 * - Загружаем статьи при сабмите формы
 * - Загружаем статьи при нажатии на кнопку «Загрузить еще»
 * - Обновляем страницу в параметрах запроса
 * - Рисуем статьи
 * - Сброс значения при поиске по новому критерию
 *
 * https://newsapi.org/
 * 4330ebfabc654a6992c2aa792f3173a3
 * http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 */

import './css/common.css';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

let searchQuery = '';

function onSearch(e) {
  e.preventDefault();

  searchQuery = e.currentTarget.elements.query.value;
  // in index.html this input has attribute 'name=query'

  const options = {
    headers: {
      Authorization: '9f9f313f44e84c20bf98fd54e39e4d8b',
    },
  };
  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=10&page=1`;

  fetch(url, options)
    .then(response => response.json())
    .then(console.log);
}

function onLoadMore() {
  const options = {
    headers: {
      Authorization: '9f9f313f44e84c20bf98fd54e39e4d8b',
    },
  };
  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=10&page=1`;

  fetch(url, options)
    .then(response => response.json())
    .then(console.log);
}
