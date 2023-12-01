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
    console.log(`✅ ${result}`); // value
  },
  error => {
    console.log(`❌ ${error}`); // reason
  },
);

// OR

promise.then(onFulfilled, onRejected);
function onFulfilled(result) {
  console.log(`✅ ${result}`);
}
function onRejected(error) {
  console.log(`❌ ${error}`);
}

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

promise
  .then(resolve => {
    console.log(resolve);

    return 5;
  })
  .then(result => {
    console.log(result);

    return 10;
  })
  .then(success => {
    console.log(success);

    return 15;
  })
  .then(value => {
    console.log(value);
  })
  .catch(error => console.log(error))
  .finally(() => {
    console.log('I will be completed in any case.');
  });

//! <--!-!-->

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

//! Static methods

// Promise.all()

const promiseAll = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promise_A = promiseAll('promise_A value', 1000);
const promise_B = promiseAll('promise_B value', 3000);

Promise.all([promise_A, promise_B])
  .then(value => console.log(value)) //["promise_A value", "promise_B value"]
  .catch(error => console.log(error));

// Promise.race()

const promiseRace = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promise_1 = promiseRace('promise_1 value', 1000);
const promise_2 = promiseRace('promise_2 value', 3000);

Promise.race([promise_1, promise_2])
  .then(value => console.log(value)) // "promise_1 value"
  .catch(error => console.log(error));

//? Promise.resolve() & Promise.reject()

// Fulfilled promise
new Promise(resolve => resolve('success value')).then(value =>
  console.log(value),
);

Promise.resolve('success value').then(value => console.log(value));

// Rejected promise
new Promise((resolve, reject) => reject('error')).catch(error =>
  console.error(error),
);

Promise.reject('error').catch(error => console.error(error));
