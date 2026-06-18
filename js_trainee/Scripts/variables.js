//! Объявление переменных: var, let, const, using
// Сравнение по 5 осям: область видимости, всплытие (hoisting),
// повторное объявление, переприсваивание, привязка this/глобал.

//? ============ ОБЛАСТЬ ВИДИМОСТИ (scope) ============
// var  — функциональная (function-scoped): игнорирует блоки { }
// let  — блочная (block-scoped): живёт только внутри { }
// const— блочная
function scope() {
    if (true) {
        var functionScoped = 'var';
        let blockScoped = 'let';
        const alsoBlock = 'const';
    }
    console.log(functionScoped); // 'var' — утекает из блока if
    try {
        console.log(blockScoped); // ReferenceError — не существует снаружи { }
    } catch (e) {
        console.log('let вне блока:', e.constructor.name); // ReferenceError
    }
}
scope();

//? ============ HOISTING (всплытие) ============
// var  — всплывает и инициализируется как undefined (можно читать ДО объявления)
// let/const — всплывают, но в "temporal dead zone" (TDZ): чтение ДО строки объявления => ReferenceError
function hoisting() {
    console.log(early); // undefined — var поднят и проинициализирован
    var early = 1;

    try {
        console.log(late); // ReferenceError — TDZ, ещё не инициализирована
    } catch (e) {
        console.log('let в TDZ:', e.constructor.name); // ReferenceError
    }
    let late = 2;
}
hoisting();

//? ============ ПОВТОРНОЕ ОБЪЯВЛЕНИЕ ============
// var  — можно объявить повторно в той же области (тихо перезапишет)
// let/const — SyntaxError при повторном объявлении в той же области
function redeclare() {
    var x = 1;
    var x = 2; // ОК — никакой ошибки
    console.log('var redeclare:', x); // 2
    // let y = 1; let y = 2; // SyntaxError: Identifier 'y' has already been declared
}
redeclare();

//? ============ ПЕРЕПРИСВАИВАНИЕ ============
// var/let — можно переприсвоить
// const — НЕЛЬЗЯ переприсвоить саму привязку (но содержимое объекта/массива мутабельно!)
function reassign() {
    let counter = 0;
    counter = 5; // OK
    console.log(counter); // 5

    const PI = 3.14;
    try {
        // PI = 3.15; // TypeError: Assignment to constant variable
    } catch (e) {}

    // const замораживает ПРИВЯЗКУ, не значение. Объект остаётся изменяемым:
    const obj = { a: 1 };
    obj.a = 99; // OK — мутация содержимого разрешена
    obj.b = 2; // OK
    console.log(obj); // { a: 99, b: 2 }
    // obj = {};   // TypeError — переприсвоить нельзя
    // Чтобы запретить мутацию — Object.freeze(obj).
}
reassign();

//? ============ ГЛОБАЛЬНАЯ ПРИВЯЗКА ============
// var на верхнем уровне (в браузере, non-module) => свойство window/globalThis
// let/const на верхнем уровне => НЕ становятся свойствами globalThis
// var globalVar = 1; console.log(globalThis.globalVar); // 1 (в скрипте, не в модуле)
// let  globalLet = 1; console.log(globalThis.globalLet); // undefined

//? ============ var/let ЛОВУШКА В ЦИКЛЕ ============
// см. также callback_closures/02-closures.js
function loopTrap() {
    const withVar = [];
    for (var i = 0; i < 3; i++) withVar.push(() => i);
    console.log(withVar.map(f => f())); // [3, 3, 3] — одна общая i

    const withLet = [];
    for (let j = 0; j < 3; j++) withLet.push(() => j);
    console.log(withLet.map(f => f())); // [0, 1, 2] — новая привязка на итерацию
}
loopTrap();

//? ============ using / await using (ES2026, explicit resource management) ============
// Node 24+ / TypeScript 5.2+. Блочная привязка, как const, НО:
// при выходе из блока автоматически вызывает resource[Symbol.dispose]() (LIFO).
// Назначение: детерминированное освобождение ресурсов (файлы, сокеты, локи, транзакции)
// без ручного try/finally.

// Ресурс реализует [Symbol.dispose] (синхронно) или [Symbol.asyncDispose] (асинхронно):
function makeResource(name) {
    return {
        name,
        [Symbol.dispose]() {
            console.log(`dispose: ${name} закрыт`);
        },
    };
}

// ВНИМАНИЕ: синтаксис `using` НЕ парсится на Node < 24 (здесь Node 22) — держим
// в комментарии, иначе SyntaxError ломает запуск всего файла. Раскомментируй на Node 24+.
// function usingDemo() {
//     using a = makeResource('A');
//     using b = makeResource('B');
//     console.log('работаем с', a.name, b.name);
//     // Конец блока => вызовутся dispose в обратном порядке: B, затем A (LIFO).
// }
// usingDemo();
// Вывод: работаем с A B / dispose: B закрыт / dispose: A закрыт
void makeResource; // используется в закомментированном usingDemo выше

// await using — для асинхронной очистки ([Symbol.asyncDispose]), только в async-функции:
// async function asyncUsingDemo() {
//     await using conn = openConnection(); // освободится через await resource[Symbol.asyncDispose]()
// }

//? ============ ИТОГ — какую привязку выбирать ============
// const — по умолчанию (большинство переменных не переприсваиваются)
// let   — когда привязку нужно переприсвоить (счётчики, аккумуляторы)
// using — ресурс с детерминированной очисткой в конце блока
// var   — НЕ использовать в новом коде (функциональный scope + hoisting = баги)
