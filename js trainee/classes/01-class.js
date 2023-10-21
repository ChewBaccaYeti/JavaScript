/*
 * Классы
 * 🤖 - объявление
 * 🤖 - конструктор
 * 🤖 - методы
 * 🤖 - static
 * 🤖 - приватные свойства
 * 🤖 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры //! very important
 */

class Car {
    static Controls = 'Static control interface activated';

    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj: ' + carObj);
    }
    // Для инициализации экземпляра в классе есть метод constructor.
    constructor({ brand, model, speed, fuel, price } = {}) {
        console.log('Выполянется constructor, автоматически');
        console.log(this);

        this.brand = brand;
        this._model = model;
        this.speed = speed;
        this.fuel = fuel;
        this._price = price;

        this.A = 5;
        this.B = 10;
    }

    #privateProperty = 'Private.'; // Private property < for class Car only
    publicProperty = 'Public.'; // Public property < for new Car as well

    updatePrice(newPrice) {
        this.price = newPrice;
    }

    updateModel(newModel) {
        this.model = newModel;
    }

    get model() {
        return this._model;
    }

    set model(newModel) {
        this._model = newModel;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }
}
console.dir(Car);
console.log(Car.Controls);

const TimeMachine = new Car({
    brand: 'DeLorean',
    model: 'DMC-12',
    speed: '88 miles per hour',
    fuel: '1.21 gigawatts',
    price: 'none',
});
console.dir(TimeMachine); // get геттер выполянется только когда читается
console.log(TimeMachine);

TimeMachine.model = 'DMC-14'; // set сеттер выполняется при изменении и теперь вместо 'DMC-12' -> 'DMC-14'
TimeMachine.price = '100 apple pies';

Car.logInfo(TimeMachine); // 16 строка
console.log(Object.getPrototypeOf(TimeMachine));
console.log(Object.getPrototypeOf(TimeMachine) === Car.prototype);

const object = {
    _a: 100,
    get _a() {
        return this._a;
    },
    set _a(x) {
        this._a = x;
    },
    _b: 200,
    get _b() {
        return this._b;
    },
    set _b(y) {
        this._b = y;
    },
};
console.log(object);
