/*
 * Деструктуризация объекта (распаковка\разархивация)
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */
const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
};

const { name, rating, tracks, trackCount } = playlist; // Операция деструктуризации

console.log(name, rating, tracks, trackCount);
