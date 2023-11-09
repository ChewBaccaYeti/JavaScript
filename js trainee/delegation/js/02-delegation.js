/*
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика
 */

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    // Логика от противного. Клик именно на этот элемент.
    return;
  }

  console.log('event', event);
  console.log('event.target', event.target);
  console.log('event.currentTarget', event.currentTarget);

  console.log('event.target', event.target.textContent);
  console.log('event.currentTarget', event.currentTarget.textContent);
}

/*
 * Код добавления кнопок
 */
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;
}
