/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Promise has been succesfully completed (fulfilled)');
    }

    reject('Promise has error (rejected)');
  }, 2000);
});

promise.then(
  result => {
    console.log(result); // value
  },
  error => {
    console.log(error); // reason
  },
);
