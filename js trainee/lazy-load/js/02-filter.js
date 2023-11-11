const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', onFilterChange);

const listItemMarkup = createListItemMarkup(tech);

refs.list.innerHTML = listItemMarkup;
populateList(listItemMarkup);

function createListItemMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

function onFilterChange(event) {
  const filter = event.target.value.toLowerCase();

  const filteredItems = tech.filter(tech =>
    tech.label.toLowerCase().includes(filter),
  );

  const listItemsMarkup = createListItemMarkup(filteredItems);
  refs.list.innerHTML = listItemsMarkup;

  console.log(filteredItems);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
