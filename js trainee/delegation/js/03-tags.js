/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

const tagsContainer = document.querySelector('.js-tags');
let selectedTag = null;
const selectedTagsArray = [];
const selectedTagsSet = new Set();

tagsContainer.addEventListener('click', onTagsContainerToggleSet);

function onTagsContainerClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveBtn = document.querySelector('.tags__btn--active');

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('tags__btn--active');
  }

  const nextActiveButton = event.target;
  nextActiveButton.classList.add('tags__btn--active');
  selectedTag = nextActiveButton.dataset.value;

  console.log(selectedTag);

  console.log('event.target', event.target);
}

function onTagsContainerToggle(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const nextActiveButton = event.target;
  nextActiveButton.classList.toggle('tags__btn--active');

  selectedTagsArray.push(nextActiveButton.dataset.value);
  console.log(nextActiveButton.classList.contains('tags__btn--active'));
  console.log(selectedTagsArray);
}

function onTagsContainerToggleSet(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = event.target;
  const tag = btn.dataset.value;
  const isContains = btn.classList.contains('tags__btn--active');
  const isToggle = btn.classList.toggle('tags__btn--active');

  if (isContains) {
    selectedTagsSet.delete(tag);
  } else {
    selectedTagsSet.add(tag);
  }

  isToggle;

  console.log(selectedTagsSet);
}
