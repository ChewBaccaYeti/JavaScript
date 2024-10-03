/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

const makeOrder = dish => {
  const DELAY = 1000;

  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve(`✅ Вот ваш заказ: ${dish}`);
      }
      reject('❌ Упс, у нас закончились продукты');
    }, DELAY);
  });
};

makeOrder('Pirozhok').then(onMakeOrderSuccess).catch(onMakeOrderError);

function onMakeOrderSuccess(result) {
  console.log(onMakeOrderSuccess);
  console.log(result);
}
function onMakeOrderError(error) {
  console.log(onMakeOrderError);
  console.log(error);
}

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

//! Мгновенно,
// без задержки

const makeQuickOrder = dish => {
  return Promise.resolve(`✅ Вот ваш заказ: ${dish}`);
};

makeQuickOrder('Pirozhok')
  .then(onmakeQuickOrderSuccess)
  .catch(onmakeQuickOrderError);

function onmakeQuickOrderSuccess(result) {
  console.log(onmakeQuickOrderSuccess);
  console.log(result);
}
function onmakeQuickOrderError(error) {
  console.log(onmakeQuickOrderError);
  console.log(error);
}

/*
 * Покемоны с https://pokeapi.co/
 */

const fetchPokemonByID = id => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(result => result.json())
    .finally(() => console.log('Picka-Picka!'));
};

fetchPokemonByID(1).then(onFetchSuccess).catch(onFetchError);
fetchPokemonByID(2).then(onFetchSuccess).catch(onFetchError);
fetchPokemonByID(3).then(onFetchSuccess).catch(onFetchError);

function onFetchSuccess(pokemon) {
  console.log('onFetchSuccess ->', onFetchSuccess);
  console.log(pokemon);
}

function onFetchError(error) {
  console.log('onFetchError ->', onFetchError);
  console.log(error);
}

//! <!--!!--!>

const makePromise = () => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve('✅ Кчау!');
      }

      reject('❌ Bruuuh');
    }, 2000);
  });
};

makePromise()
  .then(result => console.log(result))
  .catch(error => console.log(error));
