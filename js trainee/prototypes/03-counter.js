const CounterPlugin = function ({
    rootSelector,
    initialValue = 0,
    step = 1,
} = {}) {
    this._value = initialValue;
    this._step = step;

    this._refs = this._getRefs(rootSelector);

    this._bindEvents();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
    console.log(rootSelector);

    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector('[data-increment]');
    refs.decrementBtn = refs.container.querySelector('[data-decrement]');
    refs.value = refs.container.querySelector('[data-value]');

    return refs;
};

CounterPlugin.prototype.bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        this.increment();
    });
};
CounterPlugin.prototype.bindEvents = function () {
    this._refs.decrementBtn.addEventListener('click', () => {
        this.decrement();
    });
};

CounterPlugin.prototype.increment = function () {
    this._value += this._step;
};
CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
};

const counter_1 = new CounterPlugin({ rootSelector: '#counter-1', step: 10 });
console.log(counter_1);

const counter_2 = new CounterPlugin({ rootSelector: '#counter-2', step: 10 });
console.log(counter_2);
