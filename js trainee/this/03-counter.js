const counter = {
    value: 0,
    decrement() {
        console.log('increment -> this', this);
        this.value -= 1;
    },
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
};

const decrementtBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');

const valueEl = document.querySelector('.js-value');

console.log(decrementtBtn);
console.log(incrementBtn);
console.log(valueEl);

decrementtBtn.textContent = 'Wazowski';
incrementBtn.textContent = 'Lebowski';

decrementtBtn.addEventListener('click', function () {
    console.log('Клик на декремент -1');

    counter.decrement();
    console.log(counter);

    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    console.log('Клик на инкремент +1');

    counter.increment();
    console.log(counter);

    valueEl.textContent = counter.value;
});
