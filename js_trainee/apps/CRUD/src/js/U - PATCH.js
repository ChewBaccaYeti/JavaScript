const BASE_URL = 'http://localhost:3001/books';

function updateBookById(update, bookId) {
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(update),
    };

    return fetch(`${BASE_URL}/${bookId}`, options).then(response => response.json());
}

// updateBookById({title: "Огромная книжка по маленьким вещам", author: "Wazowski", rating: 0}, 8);

// updateBookById({title: "Великая книга для маленьких дел", author: "Lebowski", rating: 5}, 9);