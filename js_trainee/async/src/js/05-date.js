import '../css/common.css';

/*
    - Создание
    - Unix-время
    - Методы
    - Разница времени
    - Date.now()
*/

const date_1 = Date.now();
console.dir(date_1);

setTimeout(() => {
  const date_2 = Date.now();

  console.log('date_1', date_1);
  console.log('date_2', date_2);

  console.log(date_2 - date_1);
}, 3000);
