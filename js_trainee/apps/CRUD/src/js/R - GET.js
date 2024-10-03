const BASE_URL = 'http://localhost:3001/books';

function fetchBooks() {
    return fetch(BASE_URL).then(response => response.json())
}

function fetchBooksById(bookId) {
    return fetch(`${BASE_URL}/${bookId}`).then(response => response.json())
}

console.log(fetchBooks(), fetchBooksById(2), fetchBooksById(4));
