const BASE_URL = 'http://localhost:3001/books';

// const newBook = {
//     title: 'Тестовая книга',
//     author: 'Я',
//     genres: ['JS'],
//     rating: 10
// };

function addBook(book) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
        body: JSON.stringify(book), // newBook
    };

    return fetch(BASE_URL, options)
        .then(response => response.json()).then(data => console.log(data));
}

// addBook(newBook);

addBook({
    title: 'Новая книга',
    author: 'Тоже Я',
    genres: ['Node'],
    rating: 8
}).then(renderBook);

addBook({
    title: 'Снова Новая книга',
    author: 'И опять Я',
    genres: ['CSS'],
    rating: 8
}).then(renderBook);

function renderBook() {
    console.log("Пришел ответ от бекенда, можно отрисовывать книгу");
    console.log(book);
}