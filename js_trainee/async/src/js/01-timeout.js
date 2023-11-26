import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

console.log('Log before setTimeout()');

const arg1 = 'Это первый аргумент';
const arg2 = 'Это второй аргумент';

setTimeout(() => {
  console.log('Inside callback for setTimeout()');
}, 2000);

setTimeout(
  arg2 => {
    console.log(arg2);
    console.log(2, ' - Second func');
  },
  4000,
  arg2,
);

setTimeout(
  arg1 => {
    console.log(arg1);
    console.log(1, ' - First func');
  },
  3000,
  arg1,
);

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
  console.log(`Log after ${time} ms, because of non-blocking setTimeout()`);
};

const timerId = setTimeout(logger, 2000);

const shouldCancelTimeout = Math.random() > 0.5;
console.log(shouldCancelTimeout);

if (shouldCancelTimeout) {
  clearTimeout(timerId);
}
