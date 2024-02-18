//! Методы доступа к свойствам:
// Object.keys(): Возвращает массив строк, представляющих ключи свойств объекта.
// Object.values(): Возвращает массив значений свойств объекта.
// Object.entries(): Возвращает массив пар [ключ, значение] для каждого свойства объекта.

//! Методы проверки свойств:
// hasOwnProperty(): Возвращает логическое значение, указывающее, содержит ли объект указанное свойство как собственное (не унаследованное).
// in: Оператор in возвращает true, если указанное свойство существует в объекте или его прототипе.

//! Методы работы с прототипами:
// Object.create(): Создает новый объект с указанным прототипом и опциональными свойствами.
// Object.setPrototypeOf(): Устанавливает прототип (т.е. внутреннее свойство [[Prototype]]) указанного объекта на другой объект или null.

//! Методы клонирования и слияния объектов:
// Object.assign(): Копирует значения всех перечисляемых свойств из одного или нескольких исходных объектов в целевой объект.
// При помощи spread оператора ... также можно клонировать объекты: const clonedObj = { ...originalObj }.

//! Другие методы:
// Object.freeze(): Замораживает объект, предотвращая добавление, удаление или изменение его свойств.
// Object.seal(): Запечатывает объект, предотвращая добавление или удаление свойств из объекта, но позволяет изменять существующие свойства.
// Object.defineProperty(): Определяет новое свойство непосредственно на объекте или изменяет существующее свойство, и возвращает объект, который был изменен.
// Object.getOwnPropertyNames(): Возвращает массив имен всех собственных (не унаследованных) свойств объекта.
// Object.getOwnPropertyDescriptors(): Возвращает все свойства объекта, включая их атрибуты.

const obj = {
    speak() {
        console.log(`${this.name} is barking!`);
    },
    'createdAt': '2024-02-15T14:13:49.569Z',
    'name': 'Michael Ledner',
    'avatar': 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/296.jpg',
    'job': 'Lead Interactions Associate',
    'year': '1956-08-23T05:57:51.705Z',
    'id': '1',
}

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
    }
};
animal.name = 'Cat';
Object.setPrototypeOf(proto_animal, animal); // Меняет прототип с obj на animal у proto_animal
animal.speak(); // Cat meowing on walk.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 4, c: 5 }

const cloned_result = { ...result };
console.log(cloned_result); // { a: 1, b: 4, c: 5 }

const ice_cube = {
    'createdAt': '2024-02-15T13:53:37.529Z',
    'title': 'Tempora deleniti fugiat ex nesciunt.',
    'link': 'https://lawful-toilet.biz',
    'id': '1',
    unfreezable: {

        'createdAt': '2024-02-15T17:35:36.224Z',
        'name': 'Carol Cummerata',
        'avatar': 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/902.jpg',
        'Job': 'Direct Response Designer',
        'Company': 'Senger - Armstrong',
        'Section': 'Infrastructure',
        'Degree': {
            'name': 'second',
            'symbol': 's'
        },
        'Role': 'Human',
        'Bank': '11052455',
        'Override': 'CSV',
        'Address': 'Janesville',
        'id': '5'

    }
}
Object.freeze(ice_cube);

// Попытка добавить новое свойство
ice_cube.new_key = 'new value'; // Это будет проигнорировано

// Попытка изменить значение существующего свойства
ice_cube.id = 2; // Это будет проигнорировано

// Попытка удалить существующее свойство
delete ice_cube.title; // Это будет проигнорировано

// Попытка добавить новое свойство в ключ unfreezable который является вложенным объектом
ice_cube.unfreezable.car = 'Volvo' // Будет записано новое свойство car: 'Volvo'

console.log(ice_cube);

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    gender: "male",
    interests: ["music", "skiing"],
    bio: function () {
        alert(
            this.name[0] +
            " " +
            this.name[1] +
            " is " +
            this.age +
            " years old. He likes " +
            this.interests[0] +
            " and " +
            this.interests[1] +
            ".",
        );
    },
    greeting: function () {
        alert("Hi! I'm " + this.name[0] + ".");
    },
};
console.log(person);
// Bob Smith is 32 years old. He likes music and skiing.
console.log(person.name[0] + " " + person.name[1] + " is " + person.age + " years old. He likes " + person.interests[0] + " and " + person.interests[1] + ".",);