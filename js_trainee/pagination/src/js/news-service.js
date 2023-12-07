const API_KEY = '9f9f313f44e84c20bf98fd54e39e4d8b';
const BASE_URL = 'https://newsapi.org/v2';

export default class NewsApiServices {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchArticles() {
    console.log('Before request', this);
    const options = {
      headers: {
        Authorization: API_KEY,
      },
    };
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=10&page=${this.page}`;

    const response = await fetch(url, options);
    const { articles } = await response.json();
    this.incrementPage();
    return articles;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
