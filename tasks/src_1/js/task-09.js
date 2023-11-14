function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const showColor = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('click', () => {
  const getRandomColor = getRandomHexColor();

  document.body.style.background = getRandomColor;
  showColor.textContent = getRandomColor;

  console.log(getRandomColor);
});
