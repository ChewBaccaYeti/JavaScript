/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */
// console.dir([]);
/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

const Car = function ({ brand, model, price, fuel }) {
    //! 2. Функция вызывается в контексте созданного объекта, то есть в this записывается ссылка на него

    this.brand = brand;
    this.model = model;
    this.price = price;
    this.fuel = fuel;

    //! 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
    //! тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

    //! 4. Ссылка на обьект возвращается в место вызова new Car
}; //* class, constructor, с большой буквы, существительное в одиночном числе

Car.prototype.sayHi = function () {
    console.log('Car.prototype.sayHi -> thsi', this);
    console.log('Hello :)');
};
console.log(Car.prototype);

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
};

//! 1. Если функция вызывается через new, создаётся пустой объект

const myCar_1 = new Car({
    brand: 'BMW',
    model: 'X6',
    price: 50000,
    fuel: 5,
}); //* Создай новую машину, экземпляр
console.log(myCar_1);
myCar_1.sayHi();
myCar_1.changePrice(40000);
console.log(myCar_1);

const myCar_2 = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
    fuel: 10,
});
console.log(myCar_2);
myCar_2.sayHi();
myCar_2.changePrice(25000);
console.log(myCar_2);

const TimeMachine = new Car({
    brand: 'DeLorean',
    model: 'DMC-12',
    price: '88 miles per hour',
    fuel: '1.21 gigawatts',
});
console.log(TimeMachine);
TimeMachine.sayHi();
TimeMachine.changePrice('1985 year');
console.log(TimeMachine);

const User = function ({ email, password } = {}) {
    this.email = email;
    this.password = password;
};
console.log(User);
console.log(User.prototype);

User.prototype.changeEmail = function (newEmail) {
    this.email = newEmail;
};
User.prototype.changePassword = function (newPassword) {
    this.password = newPassword;
};

const wazowski = new User({
    email: 'wazowski@gmail.com',
    password: 192837465,
});
wazowski.changeEmail('GREEN-EYE@gmail.com');
console.log(wazowski);

const lebowski = new User({
    email: 'lebowski@gmail.com',
    password: 564738291,
});
lebowski.changePassword('dudeISgood');
console.log(lebowski);

/*
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен this
 */

User.message =
    'Я статическое свойство, меня нет на экземплярах или в прототипе.';

User.logInfo = function (obj) {
    console.log('User.logInfo -> obj', obj);
    console.log('Почта: ', obj.email);
    console.log('Пароль: ', obj.password);
};

User.logInfo(wazowski);

/*  
    Прототипное наследование

    1. У каждого обьекта есть свойство __proto__
    2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
    3. При создании литерала обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
    4. Функция-конструктор это просто функция :)
    5. Всю магию делает оператор new
    6. Если функция вызывается через new, создаётся пустой объект
    7. Функция вызывается в контексте созданного объекта
    8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
    9. Ссылка на обьект возвращается в место вызова new Фунукция()
*/
