/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
    name: 'Мій плейліст',
    rating: 5,
    tracks: ['Death to stupid idiots', 'Fuck dumb fat bitches', 'Suck my dick'],
    getName: function (a) {
        // Функция также может быть свойством объекта
        console.log('getName: ', a);
    },
    changeName(newName) {
        console.log('this внутри функции changeName', this); // !! Используется ТОЛЬКО внутри метода объекта(в данном случае функции), а НЕ в свойстве
        this.name = newName; // !! this есть только у функций
    },
    addTrack(track) {
        // И эту функцию можно также записать как неявную
        this.tracks.push(track);
    },
    updateRating(newRating) {
        this.rating = newRating;
    },
    getTrackCount() {
        return this.tracks.length;
    },
};

playlist.changeName('New name');
console.log(playlist);

playlist.addTrack('New track');
console.log(playlist);

playlist.updateRating('4');
console.log(playlist);
