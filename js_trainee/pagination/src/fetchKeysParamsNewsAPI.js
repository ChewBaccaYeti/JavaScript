const options = {
  headers: {
    Authorization: '9f9f313f44e84c20bf98fd54e39e4d8b',
  },
};

const searchQuery = e.currentTarget.elements.query.value;
const baseUrl = 'https://newsapi.org/v2/everything';

// Параметры запроса
const queryParams = {
  q: searchQuery,
  language: 'en',
  pageSize: 10,
  page: 1,
};

// Преобразование объекта параметров в строку запроса
const queryString = Object.keys(queryParams)
  .map(key => `${key}=${encodeURIComponent(queryParams[key])}`)
  .join('&');

// Формирование конечного URL
const url = `${baseUrl}?${queryString}`;

fetch(url, options)
  .then(response => response.json())
  .then(console.log);
