//! Методы доступа к свойствам:
// Object.keys(): Возвращает массив строк, представляющих ключи свойств объекта.
// Object.values(): Возвращает массив значений свойств объекта.
// Object.entries(): Возвращает массив пар [ключ, значение] для каждого свойства объекта / возвращает массив пар ключ/значение объекта на котором был вызван и не изменяет оригинал
// Object.fromEntries(): creates an object from a list of keys/values. . ожидает итерируемый объект в качестве аргумента, который должен быть в формате массива пар ключ-значение

//! Методы проверки свойств:
// hasOwnProperty(): Возвращает логическое значение, указывающее, содержит ли объект указанное свойство как собственное (не унаследованное).
// Object.hasOwn(obj, key): ES2022 — безопасная замена hasOwnProperty (см. функцию hasOwn ниже).
// in: Оператор in возвращает true, если указанное свойство существует в объекте или его прототипе.

//! Методы работы с прототипами (чтение):
// Object.getPrototypeOf(): Возвращает прототип ([[Prototype]]) объекта — пара к Object.setPrototypeOf().

//! Глубокое клонирование:
// structuredClone(obj): глубокая копия (spread/Object.assign копируют поверхностно — вложенные объекты по ссылке).

//! Методы работы с прототипами:
// Object.create(): Создает новый объект с указанным прототипом и опциональными свойствами. / creates an object from an existing object
// Object.setPrototypeOf(): Устанавливает прототип (т.е. внутреннее свойство [[Prototype]]) указанного объекта на другой объект или null.
// метод constructor: используется в классах для создания и инициализации объектов при создании экземпляра класса.
// Object.defineProperties(): позволяет добавлять и изменять свойства объекта, изменять свойства метаданных и добавить геттеры и сеттеры
// Object.defineProperty(): делает все тоже самое, но с одним свойством (смотри строку 26)

//! Методы клонирования и слияния объектов:
// Object.assign(): Копирует значения всех перечисляемых свойств из одного или нескольких исходных объектов в целевой объект. / copies properties from a source object to a target object
// При помощи spread оператора ... также можно клонировать объекты: const clonedObj = { ...originalObj }.
// Object.create(): создает объект из уже существующего объекта

//! Другие методы:
// Object.freeze(): Замораживает объект, предотвращая добавление, удаление или изменение его свойств.
// Object.seal(): Запечатывает объект, предотвращая добавление или удаление свойств из объекта, но позволяет изменять существующие свойства.
// Object.defineProperty(): Определяет новое свойство непосредственно на объекте или изменяет существующее свойство, и возвращает объект, который был изменен.
// Object.getOwnPropertyNames(): Возвращает массив имен всех собственных (не унаследованных) свойств объекта.
// Object.getOwnPropertyDescriptor() method returns the property descriptors of an object / method does not change the original object.
// Object.getOwnPropertyDescriptors(): Возвращает все свойства объекта, включая их атрибуты.
// Object.getOwnPropertyNames() method returns an array with the properties of an object / method does not change the original object.
// Object.groupBy() method groups elements of an object according to string values returned from a callback function / method does not change the original object.

function proto() {
    const obj = {
        speak() {
            console.log(`${this.name} is barking!`);
        },
        createdAt: '2024-02-15T14:13:49.569Z',
        name: 'Michael Ledner',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/296.jpg',
        job: 'Lead Interactions Associate',
        year: '1956-08-23T05:57:51.705Z',
        id: '1',
    };

    const job = 'job' in obj;
    for (const key in obj) {
        console.log(`Ключ: ${key}, Значение: ${obj[key]}`);
    }

    console.log(Object.keys(obj)); // [ 'createdAt', 'name', 'avatar', 'job', 'year', 'id' ]
    console.log(Object.values(obj)); // ['2024-02-15T14:13:49.569Z','Michael Ledner','https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/296.jpg','Lead Interactions Associate','1956-08-23T05:57:51.705Z','1']
    console.log(Object.entries(obj)); // [key, value], [key, value], [key, value], ...etc
    console.log(obj.hasOwnProperty('name')); // true
    console.log(job); // true

    const proto_user = Object.create(obj);
    proto_user.code = 'Wazowski';
    console.log(proto_user); // { code: 'Wazowski' }

    const proto_animal = Object.create(obj);
    proto_animal.name = 'Dog';
    proto_animal.speak(); // Dog makes a sound.
    const animal = {
        speak() {
            console.log(`${this.name} meowing on walk.`);
        },
    };
    animal.name = 'Cat';
    Object.setPrototypeOf(proto_animal, animal); // Меняет прототип с obj на animal у proto_animal
    animal.speak(); // Cat meowing on walk.
}
proto();

function spread() {
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };
    const result = Object.assign(target, source);
    console.log(result); // { a: 1, b: 4, c: 5 }

    const cloned_result = { ...result };
    console.log(cloned_result); // { a: 1, b: 4, c: 5 }
}
spread();

const ice_cube = {
    createdAt: '2024-02-15T13:53:37.529Z',
    title: 'Tempora deleniti fugiat ex nesciunt.',
    link: 'https://lawful-toilet.biz',
    id: '1',
    unfreezable: {
        createdAt: '2024-02-15T17:35:36.224Z',
        name: 'Carol Cummerata',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/902.jpg',
        Job: 'Direct Response Designer',
        Company: 'Senger - Armstrong',
        Section: 'Infrastructure',
        Degree: {
            name: 'second',
            symbol: 's',
        },
        Role: 'Human',
        Bank: '11052455',
        Override: 'CSV',
        Address: 'Janesville',
        id: '5',
    },
};
Object.freeze(ice_cube);

// Попытка добавить новое свойство
ice_cube.new_key = 'new value'; // Это будет проигнорировано

// Попытка изменить значение существующего свойства
ice_cube.id = 2; // Это будет проигнорировано

// Попытка удалить существующее свойство
delete ice_cube.title; // Это будет проигнорировано

// Попытка добавить новое свойство в ключ unfreezable который является вложенным объектом
ice_cube.unfreezable.car = 'Volvo'; // Будет записано новое свойство car: 'Volvo'

console.log(ice_cube);

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function () {
        alert(
            this.name[0] +
                ' ' +
                this.name[1] +
                ' is ' +
                this.age +
                ' years old. He likes ' +
                this.interests[0] +
                ' and ' +
                this.interests[1] +
                '.',
        );
    },
    greeting: function () {
        alert("Hi! I'm " + this.name[0] + '.');
    },
};
console.log(person);
// Bob Smith is 32 years old. He likes music and skiing.
console.log(
    person.name[0] +
        ' ' +
        person.name[1] +
        ' is ' +
        person.age +
        ' years old. He likes ' +
        person.interests[0] +
        ' and ' +
        person.interests[1] +
        '.',
);

/**
 * В JavaScript все объекты имеют свойство constructor, которое ссылается на функцию, создавшую этот объект.
 *  В случае объекта, созданного через литерал (как person), его constructor будет Object, потому что он создан стандартным конструктором Object
 */
const person_constructor = person.constructor;
console.log(person_constructor);

console.log('     !<=========>!     ');

class Person {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    bio() {
        console.log(
            `${this.name[0]} ${this.name[1]} is ${this.age} years old.He likes ${this.interests[0]} and ${this.interests[1]}.`,
        );
    }
    greeting() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    }
}

// Создаем экземпляр класса Person
const Bob = new Person(['Bob', 'Smith'], 32, 'male', ['music', 'skiing']);
console.log(Bob);

// Выводим информацию о Bob Smith
Bob.bio(); // Будет показывать alert с биографией

// Приветствие
Bob.greeting(); // Будет показывать alert с приветствием

// Демонстрация использования constructor
const Bob_constructor = Bob.constructor;
console.log(Bob_constructor); // Выведет саму функцию конструктора Bob [class Person]

// Create an Object:
function createObject() {
    const person = {
        firstName: 'John',
        lastName: 'Doe',
        status: 'YES',
    };

    // Create new Object
    const man = Object.create(person);
    man.firstName = 'Peter';

    // Add Properties
    Object.defineProperties(person, {
        language: { value: 'en', enumerable: true }, // Делаем свойство перечисляемым с enumerable,
        // так как по дефолту стоит false, а значит не будет видимым для логов и циклов, а также при работе с JSON,
        year: { value: 'Hello', enumerable: true, configurable: true }, // Добавлено свойство configurable(дефолту стоит false)
        // для возможности изменять или переопределять в дальнейшем
    });

    // Add a new Property
    Object.defineProperty(person, 'year', { value: '2008' });

    // Change a property
    Object.defineProperty(person, 'status', { value: 'NO' });

    console.log(person);
}
createObject();

// Object.entries() makes it simpler to use objects in loops:
function entriesObject() {
    const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

    let bucket = '';
    for (let [fruit, value] of Object.entries(fruits)) {
        bucket += fruit + ': ' + value + ' <br> ';
    }
    console.log(bucket);
}
entriesObject();

function fromEntries() {
    const fruits = [
        ['apples', 300],
        ['pears', 900],
        ['bananas', 500],
    ];

    const myObjFruits = Object.fromEntries(fruits);

    console.log(myObjFruits);

    const vegetables = {
        potato: 200,
        tomato: 600,
        cucumber: 800,
    };

    // Преобразуем объект vegetables в массив пар [ключ, значение]
    const vegetableEntries = Object.entries(vegetables);

    // Теперь создаем новый объект из массива пар с помощью Object.fromEntries
    const myObjVegetables = Object.fromEntries(vegetableEntries);

    console.log(myObjVegetables);
}
fromEntries();

function getOwnPropertyDescriptor() {
    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 50,
        eyeColor: 'blue',
    };

    let descriptor = Object.getOwnPropertyDescriptor(person, 'age');
    console.log(descriptor);
}
getOwnPropertyDescriptor();

function getOwnPropertyNames() {
    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 50,
        eyeColor: 'blue',
    };

    let props = Object.getOwnPropertyNames(person);
    console.log(props);
}
getOwnPropertyNames();

function groupByCustomFunction(array, callback) {
    return array.reduce((acc, item) => {
        // Получаем ключ группировки из коллбэк-функции
        const key = callback(item);

        // Инициализируем пустой массив, если ключ еще не существует
        if (!acc[key]) {
            acc[key] = [];
        }

        // Добавляем элемент в соответствующую группу
        acc[key].push(item);

        return acc;
    }, {});
}

function groupBy() {
    const fruits = [
        { name: 'apples', quantity: 300 },
        { name: 'bananas', quantity: 500 },
        { name: 'oranges', quantity: 200 },
        { name: 'kiwi', quantity: 150 },
    ];

    function myCallback({ quantity }) {
        return quantity > 200 ? 'ok' : 'low';
    }

    const fruits_bucket = Object.groupBy(fruits, myCallback);
    console.log(fruits_bucket);
}
groupBy();

function seal() {
    const car = { brand: 'Volvo', speed: 200 };
    Object.seal(car); // запрещает добавление/удаление свойств, но РАЗРЕШАЕТ менять существующие
    car.speed = 250; // ✓ изменится
    car.color = 'red'; // ✗ проигнорируется
    delete car.brand; // ✗ проигнорируется
    console.log(car); // { brand: 'Volvo', speed: 250 }
    console.log(Object.isSealed(car)); // true
    console.log(Object.isFrozen(Object.freeze({}))); // true
    console.log(Object.isExtensible(car)); // false — sealed => не расширяемый
}
seal();

function getPrototypeOf() {
    const animal = { eats: true };
    const rabbit = Object.create(animal);
    console.log(Object.getPrototypeOf(rabbit) === animal); // true — читает [[Prototype]]
    console.log(Object.getPrototypeOf(rabbit).eats); // true — наследуется
    console.log(Object.getPrototypeOf({}) === Object.prototype); // true
}
getPrototypeOf();

function hasOwn() {
    const proto = { inherited: 1 };
    const obj = Object.create(proto);
    obj.own = 2;
    // Object.hasOwn() (ES2022) — безопасная замена hasOwnProperty,
    // работает даже если объект создан через Object.create(null) или переопределил hasOwnProperty
    console.log(Object.hasOwn(obj, 'own')); // true
    console.log(Object.hasOwn(obj, 'inherited')); // false — унаследованное, не собственное
    console.log('inherited' in obj); // true — in видит цепочку прототипов
}
hasOwn();

function getOwnPropertyDescriptors() {
    const source = {};
    Object.defineProperty(source, 'hidden', { value: 42, enumerable: false });
    const descriptors = Object.getOwnPropertyDescriptors(source);
    console.log(descriptors); // { hidden: { value: 42, writable: false, enumerable: false, configurable: false } }
    // Правильное клонирование с геттерами/сеттерами и не-перечисляемыми свойствами:
    const clone = Object.create(
        Object.getPrototypeOf(source),
        Object.getOwnPropertyDescriptors(source),
    );
    console.log(clone.hidden); // 42 — spread {...source} потерял бы это свойство
}
getOwnPropertyDescriptors();

function shallowVsDeepClone() {
    const original = { a: 1, nested: { b: 2 } };
    const shallow = { ...original }; // вложенные объекты по ссылке!
    shallow.nested.b = 99;
    console.log(original.nested.b); // 99 — мутация просочилась (поверхностная копия)

    const data = { a: 1, nested: { b: 2 }, list: [1, 2, 3] };
    const deep = structuredClone(data); // глубокое копирование (Node 17+/современные браузеры)
    deep.nested.b = 99;
    console.log(data.nested.b); // 2 — оригинал защищён
}
shallowVsDeepClone();
