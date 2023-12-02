import '../css/common.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

const promises = horses.map(run);
console.log(promises);

run(promises)
  .then(race => console.log(race))
  .catch(error => console.log(error));

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */

console.log(
  '%c🤖 Заезд начался, ставки не принимаются!',
  'color: red; font-size: 14px;',
);

Promise.race(promises).then(({ horse, time }) => {
  console.log(
    `%c🎉 Победил ${horse}, финишировав за ${time}
    времени`,
    'color: skyblue; font-size: 14px;',
  );
});

/*
 * Promise.all([]) для ожидания всех промисов
 */

Promise.all(promises).then(() => {
  console.log(
    '%c📝 Заезд окончен, принимаются ставки.',
    'color: yellow; font-size: 14px;',
  );
});
