/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

const tagsContainer = document.querySelector('.js-tags');
let selectedTag = null;

tagsContainer.addEventListener('click', onTagsContainerClick);

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

  //   console.log('event', event);
  //   console.log('event.target', event.target);
  //   console.log('event.currentTarget', event.currentTarget);
}
