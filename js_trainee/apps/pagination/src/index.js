import './css/common.css';
import NewsApiServices from './js/news-service';
import articlesTmp from './templates/articles.hbs';
import LoadMoreBtn from './js/components/load-more-btn';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
};

const newsApiServices = new NewsApiServices();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
  e.preventDefault();

  newsApiServices.query = e.currentTarget.elements.query.value;

  if (newsApiServices.query === '') {
    return alert('Write something...');
  }

  loadMoreBtn.show();
  newsApiServices.resetPage();
  newsApiServices.fetchArticles().then(articles => {
    clearArticlesContainer();
  });
  fetchArticles();
}

function fetchArticles() {
  loadMoreBtn.disable();
  newsApiServices.fetchArticles().then(articles => {
    appendArticlesMarkup(articles);
    loadMoreBtn.enable();
  });
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTmp(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
