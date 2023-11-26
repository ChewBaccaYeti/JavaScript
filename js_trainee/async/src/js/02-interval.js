import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */

const logger = time => {
  console.log(`Log every ${time} ms = ${Date.now()}`);
};

console.log('Log before setInterval()');
setInterval(logger, 2000, 2000); // Вторые 2000 миллисекунды это аргументы который передается logger в качестве параметра.
console.log('Log after setInterval()');

/*
 * Очистка интервала с clearInterval(intervalId)
 */

const intervalId = setInterval(logger, 2000, 2000);
const shouldCancelInterval = Math.random() > 0.3;
console.log(shouldCancelInterval);

if (shouldCancelInterval) {
  clearInterval(intervalId);
}
