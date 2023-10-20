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

const Car = function (brand, model, price, value) {
    //! 2. Функция вызывается в контексте созданного объекта,
    //! то есть в this записывается ссылка на него
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.a = value;
    // console.log(this);

    //! 4. Ссылка на обьект возвращается в место вызова new Car
}; //class, constructor, с большой буквы, существительное в одиночном числе

//! 1. Если функция вызывается через new, создаётся пустой объект
const myCar_1 = new Car('BMW', 'X6', 40000, 5); // Создай новую машину, экземпляр
console.log(myCar_1);

const myCar_2 = new Car('Audi', 'Q3', 35000, 10);
console.log(myCar_2);
