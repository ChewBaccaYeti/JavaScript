// Лексическое окружение (статическое)
let a = 'global';
function outer() {
    let b = 'outer';
    function inner() {
        let c = 'inner';
        console.log(c); // 'inner'
        console.log(b); // 'outer'
        console.log(a); // 'global'
    }
    console.log(a); // 'global'
    console.log(b); // 'outer'
    inner();
}
outer();
console.log(a); // 'global'
/*
 *Global {
 *    outer {
 *      inner
 *    }
 *  }
 */

//! Example 1

function person() {
    let name = 'Peter';

    return function displayName() {
        console.log(name);
    };
}
let peter = person();
peter(); // 'Peter'

//! Example 2

function getCounter() {
    let counter = 0;
    return function () {
        return counter++;
    };
}
let count = getCounter();

/* getCounterLexicalEnvironment = {
    environmentRecord: {
        counter: 0,
        <anonymous function> : < reference to function>
    }
    outer: <globalLexicalEnvironment>
}

countLexicalEnvironment = {
    environmentRecord: {

    }
    outer: <getCountLexicalEnvironment>
}
*/

console.log(count()); // 0
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
console.log(count()); // 4
console.log(count()); // 5

/*
* В результате лексическое окружение функции getCounter() после первого вызова функции count() будет выглядеть так:

getCounterLexicalEnvironment = {
    environmentRecord: {
        counter: 1, 2, 3, 4, 5 и т.д.
            <anonymous function> : < reference to function>
    }
    outer: <globalLexicalEnvironment>
}
*/

/*
 * Для того чтобы понять замыкания, нам нужно разобраться с двумя важнейшими концепциями JavaScript.
 * Это — контекст выполнения (Execution Context) и лексическое окружение (Lexical Environment).
 *
 * Контекст выполнения — это абстрактное окружение, в котором вычисляется и выполняется JavaScript-код.
 * Когда выполняется глобальный код, это происходит внутри глобального контекста выполнения. Код функции выполняется внутри контекста выполнения функции.
 * В некий момент времени может выполняться код лишь в одном контексте выполнения (JavaScript — однопоточный язык программирования).
 * Управление этими процессами ведётся с использованием так называемого стека вызовов (Call Stack).
 * Стек вызовов — это структура данных, устроенная по принципу LIFO (Last In, First Out — последним вошёл, первым вышел).
 * Новые элементы можно помещать только в верхнюю часть стека, и только из неё же элементы можно изымать.
 */

//! Call Stack

let globalExecutionContext = 'Hello World!';

function functionExecutionContext() {
    console.log('Inside function inner execution context');
}

functionExecutionContext();

console.log('Inside global execution context' + ' ' + globalExecutionContext);

/*
 * Лексическое окружение — это структура данных, которая хранит сведения о соответствии идентификаторов и переменных.
 * Здесь «идентификатор» — это имя переменной или функции,
 * а «переменная» — это ссылка на объект (сюда входят и функции) или значение примитивного типа.
 * Лексическое окружение содержит два компонента:
 * Запись окружения (environment record) — место, где хранятся объявления переменных и функций.
 * Ссылка на внешнее окружение (reference to the outer environment) — ссылка, позволяющая обращаться к внешнему (родительскому) лексическому окружению.
 * Это — самый важный компонент, с которым нужно разобраться для того, чтобы понять замыкания.
 */

/*
 * lexicalEnvironment = {
 *   environmentRecord: {
 *     <identifier> : <value>,
 *     <identifier> : <value>
 *   }
 *   outer: < Reference to the parent lexical environment>
 * }
 */

let x = 'Hello World!';
function first() {
    let y = 25;
    console.log('Inside first function (inner execution context)');
}
first();
console.log('Inside global execution context');

/*
 * globalLexicalEnvironment = {
 *      environmentRecord: {
 *          x : 'Hello World!',
 *         first : < reference to function object >
 *      }
 *      outer: null, так как у глобальной области видимости нет внешнего лексического окружения.
 * }
 */

/*
 * Когда движок создаёт контекст выполнения для функции first(),
 * он создаёт и лексическое окружение для хранения переменных,
 * объявленных в этой функции в ходе её выполнения.
 * В результате лексическое окружение функции будет выглядеть так:
 *
 * functionLexicalEnvironment = {
 *      environmentRecord: {
 *          b : 25,
 *      }
 *      outer: <globalLexicalEnvironment>
 * }
 */
