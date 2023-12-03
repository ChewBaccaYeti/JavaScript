function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('[type="number"]');
const parentBox = document.querySelector('#boxes');

createBtn.addEventListener('click', () => createBoxes(input.value));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxesStorages = [];
  let elementSize = 40;

  for (let i = 0; i < amount; i++) {
    const element = document.createElement('div');
    element.style.background = getRandomHexColor();
    element.style.width = `${elementSize}px`;
    element.style.height = `${elementSize}px`;
    elementSize += 10;
    boxesStorages.push(element);
  }

  parentBox.append(...boxesStorages);
}

function destroyBoxes() {
  parentBox.innerHTML = '';
}
