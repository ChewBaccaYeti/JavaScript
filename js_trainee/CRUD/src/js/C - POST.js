const BASE_URL = 'http://localhost:3001/books';
function addBook(book) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
        body: JSON.stringify(book),
    };

    return fetch(BASE_URL, options).then(response => response.json());
}

// addBook({
//     title: 'То, что портит жизнь всем вокруг.',
//     author: 'Я',
//     genres: ['React'],
//     rating: 7
// }).then(renderBook);

// addBook({
//     title: 'Маленькая книга о великих технологиях',
//     author: 'И опять Я',
//     genres: ['JS', 'Node'],
//     rating: 9
// }).then(renderBook);

function renderBook() {
    console.log("Пришел ответ от бекенда, можно отрисовывать книгу");
    console.log(book);
}