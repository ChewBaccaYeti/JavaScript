const CounterPlugin = function ({
    rootSelector,
    initialValue = 0,
    step = 1,
} = {}) {
    this._value = initialValue;
    this._step = step;
    this._refs = this._getRefs(rootSelector);

    this._bindEvents();
    this.updateUI();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector('[data-increment]');
    refs.decrementBtn = refs.container.querySelector('[data-decrement]');
    refs.value = refs.container.querySelector('[data-value]');

    return refs;
};

CounterPlugin.prototype._bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        console.log('CounterPlugin.prototype.bindEvents -> this', this);
        this.increment();
        this.updateUI();
    });
    this._refs.decrementBtn.addEventListener('click', () => {
        console.log('CounterPlugin.prototype.bindEvents -> this', this);
        this.decrement();
        this.updateUI();
    });
};

CounterPlugin.prototype.updateUI = function () {
    this._refs.value.textContent = this._value;
};
CounterPlugin.prototype.increment = function () {
    this._value += this._step;
};
CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
};

const counter_1 = new CounterPlugin({
    rootSelector: '#counter-1',
    step: 1,
    initialValue: 1,
});

const counter_2 = new CounterPlugin({
    rootSelector: '#counter-2',
    step: 2,
    initialValue: 2,
});
