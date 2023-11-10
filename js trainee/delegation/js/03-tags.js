/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

const tagsContainer = document.querySelector('.js-tags');
let selectedTag = null;
const selectedTags = [];

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }

//   const nextActiveButton = event.target;
//   nextActiveButton.classList.add('tags__btn--active');
//   selectedTag = nextActiveButton.dataset.value;

//   console.log(selectedTag);

//   console.log('event.target', event.target);
// }

tagsContainer.addEventListener('click', onTagsContainerToggle);

function onTagsContainerToggle(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  event.target.classList.toggle('tags__btn--active');

  selectedTags.push(event.target.dataset.value);
  console.log(selectedTags);
}
