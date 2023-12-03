import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const datePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

const time = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  mins: document.querySelector('[data-minutes]'),
  secs: document.querySelector('[data-seconds]'),
};

function pad(value) {
  return String(value).padStart(2, '0');
}

const timer = {
  timestamp: null,
  interval: null,

  ready(stamp) {
    this.timestamp = stamp;
    startBtn.addEventListener('click', timer.start);
  },

  start() {
    startBtn.disabled = true;
    timer.interval = setInterval(() => {
      let diff = timer.timestamp - Date.now();

      if (diff < 1000) {
        timer.stop();
        Notify.failure('Time is up');
      }

      time.days.textContent = pad(Math.floor(diff / 86400000));
      time.hours.textContent = pad(Math.floor((diff % 86400000) / 3600000));
      time.mins.textContent = pad(
        Math.floor(((diff % 86400000) % 3600000) / 60000)
      );
      time.secs.textContetn = pad(Math.floor((diff % 60000) / 1000));
    }, 1000);
  },

  stop() {
    clearInterval(timer.interval);
    startBtn.removeEventListener('click', timer.start);
  },
};

flatpickr(datePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      startBtn.disabled = false;

      timer.stop();
      timer.ready(selectedDates[0]);
      return;
    }

    startBtn.disabled = true;
    Notify.failure('Please choose a date in the future');
  },
});
