const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
];

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
paletteContainer.addEventListener('click', optimazedPalette);

function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
      <div class="color-card">
        <div><div><div> <div
        class="color-swatch"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style="background-color: ${hex}"
      ></div></div></div></div>
        <div class="color-meta">
          <p>HEX: ${hex}</p>
          <p>RGB: ${rgb}</p>
        </div>
      </div>
      `;
    })
    .join('');
}

function onPaletteContainerClick() {
  const swatchEl = event.target;
  const isColorSwatchEl = swatchEl.classList.contains('color-swatch');
  const parentColorCard = swatchEl.closest('.color-card');
  const currentActiveColor = document.querySelector('.color-card.is-active');
  const backgroundHex = swatchEl.dataset.hex;

  if (!isColorSwatchEl) {
    return;
  }

  parentColorCard.classList.add('is-active');

  if (currentActiveColor) {
    currentActiveColor.classList.remove('is-active');
  }

  document.body.style.background = backgroundHex;

  console.log(isColorSwatchEl);
  console.log(parentColorCard);
}

function optimazedPalette() {
  const isColorSwatchEl = event.target.classList.contains('color-swatch');

  if (!isColorSwatchEl) {
    return;
  }

  const swatchEl = event.target;
  const parentColorCard = swatchEl.closest('.color-card');

  setBodyBgColor(swatchEl.dataset.hex);
  removeActiveColorClass();
  addACtiveColorClass(parentColorCard);
}

function setBodyBgColor(color) {
  document.body.style.background = color;
}

function removeActiveColorClass() {
  const currentActiveColor = document.querySelector('.color-card.is-active');

  if (currentActiveColor) {
    currentActiveColor.classList.remove('is-active');
  }
}

function addACtiveColorClass(card) {
  card.classList.add('is-active');
}
