const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const ingredientsItems = ingredients.map(name => {
  const item = document.createElement('li');
  item.textContent = name;
  item.classList.add('item');

  return item;
});

list.append(...ingredientsItems);
