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
  newsApiServices.fetchArticles().then(articles => {
    clearArticlesContainer();
    appendArticlesMarkup(articles);
  });
}

function onLoadMore() {
  newsApiServices.fetchArticles().then(appendArticlesMarkup);
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTmp(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
