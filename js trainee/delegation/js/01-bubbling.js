/*
 * Всплытие событий
 * event.target - целевой (исходный) элемент
 * event.currentTarget - текущий элемент, на слушателе которого поймали событие
 */

const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child'),
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerChildClick);

function onParentClick(event) {
  console.log('onParentClick');
  console.log('onParentClick -> event.target', event.target);
  console.log('onParentClick -> event.currentTarget', event.currentTarget);
}

function onChildClick(event) {
  console.log('onChildClick');
  console.log('onChildClick -> event.target', event.target);
  console.log('onChildClick -> event.currentTarget', event.currentTarget);
}

function onInnerChildClick(event) {
  console.log('onInnerChildClick');
  console.log('onInnerChildClick -> event.target', event.target);
  console.log('onInnerChildClick -> event.currentTarget', event.currentTarget);
}
