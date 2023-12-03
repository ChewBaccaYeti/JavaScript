const buttons = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

const colorChanger = {
  interval: null,
  currentColor: null,

  start() {
    this.change();
    this.interval = setInterval(this.change, 1000);
  },

  stop() {
    clearInterval(this.interval);
  },

  change() {
    do {
      document.body.style.backgroundColor = getRandomHexColor();
    } while (this.currentColor === getRandomHexColor());

    this.currentColor = document.body.style.backgroundColor;
    console.log(
      `%c ${document.body.style.backgroundColor}`,
      `color: ${document.body.style.backgroundColor}`
    );
  },
};

buttons.start.addEventListener('click', e => {
  e.target.disabled = true;
  colorChanger.start();
});

buttons.stop.addEventListener('click', e => {
  buttons.start.disabled = false;
  colorChanger.stop();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
