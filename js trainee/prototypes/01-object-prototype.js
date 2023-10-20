/*
 * Прототип объекта
 * Прототипное наследование
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

const objC = {
    z: 5,
};
console.log(objC);

const objB = Object.create(objC); // Ссылка на objC в прототипе
objB.y = 3; // Запись нового свойства
console.log(objB);

console.log(objB.y); // Собсвтенное свойство
console.log(objB.z);

const objA = Object.create(objB);
objA.x = 4;

console.log(objA);
console.log(objA.z);

objA.z = 10;
console.log(objA.z);
console.log(objA.hasOwnProperty('z'));

const dummyObj = Object.create({ message: 'Это свойство объекта протортипа' });
dummyObj.message = 'Это собственное свойство объекта';
console.log('dummyObj', dummyObj);

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

const objD = Object.create({ z: 5 });
objD.y = 100;
console.log('objD', objD);

console.log(objD.x);
