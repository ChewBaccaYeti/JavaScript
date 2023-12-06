/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Вкладка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('sumbit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function onFetchError() {
  error => {
    console.dir(error);
    alert('We did not find your pokemon :(');
  };
}

function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    response => response.json(),
  );
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}
