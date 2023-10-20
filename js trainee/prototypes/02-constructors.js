/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */
console.dir([]);
/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

const Car = function (config = {}) {
    //! 2. Функция вызывается в контексте созданного объекта,
    //! то есть в this записывается ссылка на него
    this.brand = config.brand;
    this.model = config.model;
    this.price = config.price;
    this.a = config.value;
    //! 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
    //! тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)
    //! 4. Ссылка на обьект возвращается в место вызова new Car
}; //* class, constructor, с большой буквы, существительное в одиночном числе

//! 1. Если функция вызывается через new, создаётся пустой объект
const myCar_1 = new Car({
    brand: 'BMW',
    model: 'X6',
    price: 50000,
    value: 5,
}); //* Создай новую машину, экземпляр
console.log(myCar_1);

const myCar_2 = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
    value: 10,
});
console.log(myCar_2);

const myCar_3 = new Car({});
console.log(myCar_3);
