import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isACtive) {
      return;
    }

    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = getTimeComponents(deltaTime);

      updateClockface(time);

      console.log(time);
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    console.log('stop');
  },
};

timer.start();

/*
 * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
 */
function pad(value) {
  return String(value).padStart(2, '0');
}

/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается часов/минут/секунд
 * - Возвращает обьект со свойствами hours, mins, secs
 * - Адская копипаста со стека 💩
 */
function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (10000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, minutes, seconds };
}

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается часов/минут/секунд
 * - Рисует интерфейс
 */
function updateClockface({ hours, minutes, seconds }) {
  refs.clockface.textContent = `${hours}:${minutes}:${seconds}`;
}
