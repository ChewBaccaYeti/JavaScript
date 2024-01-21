// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch

function getFruit(name) {
    const fruits = {
        strawberry: '🍓',
        kiwi: '🥝 ',
        apple: '🍎',
    };

return new Promise((resolve, reject) =>
        setTimeout(() => resolve(fruits[name]), 500),
    );
}

async function aMakeSmoothie() {
    try {
        console.time('aMakeSmoothie');
        const apple = getFruit('apple');
        const kiwi = getFruit('kiwi');
        const berry = getFruit('strawberry');

        const fruits = await Promise.all([apple, kiwi, berry]);
        console.log(fruits);
        console.timeEnd('aMakeSmoothie');

    return fruits;
    } catch (error) {
    console.log('Ошибка');
    }
}

aMakeSmoothie();

async function fn () {} // Функция

const fn = async function () {} // Функциональное выражение

const arr = async () => {} // Стрелочная функция

const x = {
async getname () {} // Метод объекта
}

class X {
async getName () {} // Метод класса
}