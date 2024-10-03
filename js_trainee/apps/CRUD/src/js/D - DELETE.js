const BASE_URL = 'http://localhost:3001/books';

function removeBook(bookId) {
    const url = `${BASE_URL}/${bookId}`;
    const options = {
        method: "DELETE",
    };

    return fetch(url, options).then(res => res.json());
}

removeBook(11);
removeBook(12);