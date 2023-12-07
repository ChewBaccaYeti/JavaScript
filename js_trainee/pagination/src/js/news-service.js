export default class NewsApiServices {
  constructor() {
    this.searchQuery = '';
  }

  fetchArticles() {
    console.log(this);
    const options = {
      headers: {
        Authorization: '9f9f313f44e84c20bf98fd54e39e4d8b',
      },
    };
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=10&page=1`;

    fetch(url, options)
      .then(response => response.json())
      .then(console.log);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
