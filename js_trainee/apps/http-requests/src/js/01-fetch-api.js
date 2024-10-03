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
import API from './api-service';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function onFetchError(error) {
  console.dir(error);
  alert('We did not find your pokemon :(');
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

// =============================================

fetchPokemon();

function fetchPokemon() {
  const searchPokemonParams = new URLSearchParams({
    limit: 20,
    offset: 50,
  });

  fetch(`https://pokeapi.co/api/v2/pokemon?${searchPokemonParams}`)
    .then(response => response.json())
    .then(console.log);
}

fetchNews();

function fetchNews() {
  const NEWS_API_KEY = `9f9f313f44e84c20bf98fd54e39e4d8b`;

  fetch(`https://newsapi.org/v2/everything?q=redneck&apiKey=${NEWS_API_KEY}`)
    .then(response => response.json())
    .then(console.log);
}
