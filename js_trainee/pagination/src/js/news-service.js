export default class NewsApiServices {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    console.log('Before request', this);
    const options = {
      headers: {
        Authorization: '9f9f313f44e84c20bf98fd54e39e4d8b',
      },
    };
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=10&page=1`;

    return fetch(url, options)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();

        return data.articles;
      });
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
