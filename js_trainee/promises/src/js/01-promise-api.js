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

// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise_ex = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

// Will run first
console.log('Before promise.then()');

// Registering promise callbacks
promise_ex
  .then(
    // onResolve will run third or not at all
    value => {
      console.log('onResolve call inside promise.then()');
      console.log(value); // "Success! Value passed to resolve function"
    },
  )
  // onReject will run third or not at all
  .catch(reason => {
    console.log('onReject call inside promise.then()');
    console.log(reason); // "Error! Error passed to reject function"
  })
  .finally(() => console.log('Promise settled')); // "Promise settled"

// Will run second
console.log('After promise.then()');

// Цепочки промисов

const promise_num = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise_num
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('Final task');
  });

const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve('success value');
      } else {
        reject('error');
      }
    }, 2000);
  });
};

fetchUserFromServer('Mango')
  .then(user => console.log(user))
  .catch(error => console.error(error));
