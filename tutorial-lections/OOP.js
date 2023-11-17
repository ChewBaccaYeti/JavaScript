//* функции конструкторы

const john = {
    name: 'John',
    sales: 10,
    sell: function (thing) {
        this.sales += 1;
        return 'Manager ' + this.name + ' sold ' + thing;
    },
};
console.dir(john);
console.log(john.sales); // 10
john.sell('Apple'); // Manager John sold Apple
john.sell('Pomegrade'); // Manager John sold Pomegrade
console.log(john.sales); // 12

const mary = {
    name: 'Mary',
    sales: 120,
    sell: function (thing) {
        this.sales += 1;
        return 'Manager ' + this.name + ' sold ' + thing;
    },
};
console.dir(mary);
console.log(mary.sales); // 10

// У каждого менеджера есть свой метод sell.
// В том, что он у всех будет разным можно убедиться с помощью сравнения:
console.log(john.sell === mary.sell); // false

// каждый объект содержит свою собственную копию функции
// под которую выделяется место для ячейки в памяти
//* чтобы не создавать метод для каждой существуют функции конструкторы,
//* вызванные с помощью оператора new всегда возвращают объект.

//? функция, которая будет возвращать объект со всеми указанными мною свойствами и методами
//! НЕ функция-конструктор
const manager = function (name, sales) {
    return {
        name: name,
        sales: sales,
        sell: function (thing) {
            this.sales += 1;
            return 'Manager ' + this.name + ' sold ' + thing;
        },
    };
};
console.dir(manager);

// объекты для двух наших менеджеров
const johnny = manager('John', 10);
const marry = manager('Mary', 120);

console.log(johnny.sales, marry.sales); // 10 120
johnny.sell('Apple'); // Manager John sold Apple
marry.sell('Pomegrade'); // Manager Mary sold Pomegrade
console.log(johnny.sales, marry.sales); // 11 121

//! Функция-конструктор
const Manager = function (name, sales) {
    this.name = name;
    this.sales = sales;
    this.sell = function (thing) {
        this.sales += 1;
        return 'Manager ' + this.name + ' sold ' + thing;
    };
    // return {prop: 'Prop of new object'}; можно, но при условиях
};

const V = new Manager('V', 10);
const Geralt = new Manager('Geralt', 120);

// внутри функции Manager мы можем пользоваться ключевым словом this,
// которое содержит ссылку на новый объект
//! При вызове функций с оператором new - будет создан новый объект
//! к которому можно обратиться с помощью ключевого слова this внутри функции.

// Создавая объект с помощью функции-конструктора,
// я автоматически присваиваю объекту свойство: constructor,
// которое содержит ссылку на функцию-конструктор,
// с помощью которой был создан объект:

const Hektor = new Manager('Hektor', 10);

console.log(Hektor.constructor); // function Manager(name, sales) { ... };
console.log(Hektor.constructor.name); // Manager
console.log(Hektor instanceof Manager); // true

const Boss = function (name, sales) {
    this.name = name;
    this.sales = sales;
};

Boss.prototype.sell = function (thing) {
    this.sales += 1;
    return 'Boss ' + this.name + ' sold ' + thing;
};

const Jay = new Boss('Jay', 10);
const Bob = new Boss('Bob', 120);

console.log(Jay.sales, Bob.sales); // 10 120
Jay.sell('Apple'); // Manager John sold Apple
Bob.sell('Pomegrade'); // Manager Mary sold Pomegrade
console.log(Jay.sales, Bob.sales); // 11 121

//* Когда вы используете какой-либо метод массивов,
//* например, map или forEach, то вы подразумеваете,
//* что этот метод будет взят из прототипа функции-конструктора Array.
//* Любой массив может использовать все методы, записанные в прототип конструктора Array,
//* хотя у самого массива нет ни одного метода.
//* Таким образом, любой объект получает возможность использовать все методы,
//* записанные в прототипе его функции-конструктора.

// Само свойство prototype является не более чем обычным объектом, поэтому,
// если вы хотите сразу же записать несколько методов в прототип,
// то пример выше можно переписать следующим образом:

const protoManager = function (name, sales) {
    this.name = name;
    this.sales = sales;
};

protoManager.prototype = {
    sell: function (thing) {
        this.sales += 1;
        return 'protoManager ' + this.name + ' sold ' + thing;
    },
    speak: function (word) {
        return this.name + ' says ' + word;
    },
};

const Brad = new protoManager('Brad', 10);
const Manny = new protoManager('Manny', 120);

Brad.sell('Apple'); // Manager Brad sold Apple
Manny.speak('Hello!'); // Manny says Hello!

console.log(Brad.sell === Manny.sell); // true
console.log(Brad.speak === Manny.speak); // true

// Подобным образом мы можем создать любое количество объектов
// с помощью функции конструктора Manager и оператора new
// и всем им будут доступны методы из прототипа protoManager.
