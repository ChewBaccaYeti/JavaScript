/*
 * - Пагинация
 *   - страница и кол-во на странице
 * - Загружаем статьи при сабмите формы
 * - Загружаем статьи при нажатии на кнопку «Загрузить еще»
 * - Обновляем страницу в параметрах запроса
 * - Сброс значения при поиске по новому критерию
 * - Рисуем статьи

 * https://newsapi.org/
 * 4330ebfabc654a6992c2aa792f3173a3
 * http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 */

import './css/common.css';
import NewsApiServices from './js/news-service';
import articlesTmp from './templates/articles.hbs';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

const newsApiServices = new NewsApiServices();

function onSearch(e) {
  e.preventDefault();

  newsApiServices.query = e.currentTarget.elements.query.value; //index.html / input / 'name=query'
  newsApiServices.resetPage();
  newsApiServices.fetchArticles().then(appendArticlesMarkup);
}

function onLoadMore() {
  newsApiServices.fetchArticles().then(appendArticlesMarkup);
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTmp(articles));
}
