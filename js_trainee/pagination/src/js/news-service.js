export default class NewsApiServices {
  constructor() {}

  fetchArticles(searchQuery) {
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
}
