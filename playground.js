// =============================================================================
// JAVASCRIPT PLAYGROUND — Practice & Experimentation Sandbox
// =============================================================================
// Полигон для практики всех аспектов JS. Каждая секция — отдельный топик.
// Раскомментируй нужные блоки, экспериментируй, запускай: node playground.js
// =============================================================================

console.log('\n' + '='.repeat(80) + '\n');

// =============================================================================
// SECTION 1: Data Types & Variables
// =============================================================================

function s1_dataTypes() {
    console.log('▶ SECTION 1: Data Types & Variables\n');

    // Primitives
    const num = 42;
    const str = 'hello';
    const bool = true;
    const undef = undefined;
    const nil = null;
    const sym = Symbol('unique');
    const bigint = 100n;

    console.log('typeof num:', typeof num);
    console.log('typeof str:', typeof str);
    console.log('typeof bool:', typeof bool);
    console.log('typeof undef:', typeof undef);
    console.log('typeof nil:', typeof nil); // ❌ bug: "object" not null
    console.log('typeof sym:', typeof sym);
    console.log('typeof bigint:', typeof bigint);

    // Coercion
    console.log('\n→ Coercion:');
    console.log('"5" + 3 =', '5' + 3); // "53" (string concat)
    console.log('"5" - 3 =', '5' - 3); // 2 (numeric coercion)
    console.log('true + 1 =', true + 1); // 2 (true → 1)
    console.log('false + 1 =', false + 1); // 1 (false → 0)
    console.log('"" == false =', '' == false); // true (loose equal)
    console.log('"" === false =', '' === false); // false (strict equal)

    // var vs let vs const
    console.log('\n→ var vs let vs const:');
    var a = 1;
    let b = 2;
    const c = 3;
    console.log('var a:', a, '(function scoped, hoisted, redeclarable)');
    console.log('let b:', b, '(block scoped, TDZ, not redeclarable)');
    console.log(
        'const c:',
        c,
        '(block scoped, must initialize, immutable ref)',
    );

    // var trap in loop
    console.log('\n→ var vs let в цикле:');
    var results_var = [];
    for (var i = 0; i < 3; i++) {
        results_var.push(() => i);
    }
    console.log(
        'var loop:',
        results_var.map(f => f()),
    ); // [3, 3, 3] ❌

    let results_let = [];
    for (let j = 0; j < 3; j++) {
        results_let.push(() => j);
    }
    console.log(
        'let loop:',
        results_let.map(f => f()),
    ); // [0, 1, 2] ✓

    // Optional chaining & Nullish coalescing
    console.log('\n→ ?. and ??:');
    const user = { name: 'Alice', address: { street: 'Main' } };
    console.log('user.address?.street:', user.address?.street); // "Main"
    console.log('user.phone?.number:', user.phone?.number); // undefined (no error)
    console.log('user.email ?? "no-email":', user.email ?? 'no-email'); // "no-email"
    console.log('user.name ?? "unknown":', user.name ?? 'unknown'); // "Alice"
}

// s1_dataTypes(); // ← раскомментируй для запуска

// =============================================================================
// SECTION 2: Control Flow & Operators
// =============================================================================

function s2_controlFlow() {
    console.log('▶ SECTION 2: Control Flow & Operators\n');

    // if/else vs switch
    const status = 'pending';

    console.log('→ if/else:');
    if (status === 'pending') {
        console.log('  Waiting...');
    } else if (status === 'done') {
        console.log('  Completed!');
    } else {
        console.log('  Unknown');
    }

    console.log('\n→ switch:');
    switch (status) {
        case 'pending':
            console.log('  Waiting...');
            break;
        case 'done':
            console.log('  Completed!');
            break;
        default:
            console.log('  Unknown');
    }

    // Logical operators
    console.log('\n→ Logical operators:');
    const x = 5;
    console.log('x > 3 && x < 10:', x > 3 && x < 10); // true
    console.log('x > 10 || x < 0:', x > 10 || x < 0); // false
    console.log('!true:', !true); // false

    // Truthy vs Falsy
    console.log('\n→ Truthy vs Falsy:');
    const falsy = [false, 0, '', null, undefined, NaN];
    console.log(
        'Falsy values:',
        falsy.map(v => `"${v}" →`, !!v),
    );
}

// s2_controlFlow(); // ← раскомментируй для запуска

// =============================================================================
// SECTION 3: Loops & Iteration
// =============================================================================

function s3_loops() {
    console.log('▶ SECTION 3: Loops & Iteration\n');

    // for loop
    console.log('→ for loop (1 to 5):');
    for (let i = 1; i <= 5; i++) {
        console.log('  ', i);
    }

    // while loop
    console.log('\n→ while loop (powers of 2, ≤ 1000):');
    let n = 1;
    while (n <= 1000) {
        console.log('  ', n);
        n *= 2;
    }

    // for...of (массивы, строки)
    console.log('\n→ for...of (массив):');
    for (const num of [10, 20, 30]) {
        console.log('  ', num);
    }

    console.log('\n→ for...of (строка):');
    for (const char of 'hello') {
        console.log('  ', char);
    }

    // for...in (объекты)
    console.log('\n→ for...in (объект):');
    const person = { name: 'Alice', age: 30, city: 'NYC' };
    for (const key in person) {
        console.log(`  ${key}: ${person[key]}`);
    }

    // break & continue
    console.log('\n→ break (первое четное число > 50):');
    for (let i = 50; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log('  Found:', i);
            break;
        }
    }

    console.log('\n→ continue (пропускаем четные):');
    for (let i = 1; i <= 5; i++) {
        if (i % 2 === 0) continue;
        console.log('  ', i);
    }
}

// s3_loops(); // ← раскомментируй для запуска

// =============================================================================
// SECTION 4: Arrays (Deep Dive)
// =============================================================================

function s4_arrays() {
    console.log('▶ SECTION 4: Arrays\n');

    const nums = [1, 2, 3, 4, 5];
    const words = ['hello', 'world', 'js'];

    // Creation & Access
    console.log('→ Create & Access:');
    console.log('nums:', nums);
    console.log('nums[0]:', nums[0]);
    console.log('nums.length:', nums.length);
    console.log('nums[-1]:', nums[-1]); // undefined (JS не поддерживает negative indexing)

    // Mutating methods
    console.log('\n→ Mutating methods:');
    const arr1 = [1, 2, 3];
    arr1.push(4);
    console.log('push(4):', arr1); // [1, 2, 3, 4]
    arr1.pop();
    console.log('pop():', arr1); // [1, 2, 3]
    arr1.unshift(0);
    console.log('unshift(0):', arr1); // [0, 1, 2, 3]

    // Non-mutating methods
    console.log('\n→ Non-mutating (immutable):');
    console.log('slice(1, 3):', nums.slice(1, 3)); // [2, 3]
    console.log('concat([6, 7]):', nums.concat([6, 7])); // [1, 2, 3, 4, 5, 6, 7]
    console.log('spread:', [...nums, 6, 7]); // [1, 2, 3, 4, 5, 6, 7]

    // Iteration methods
    console.log('\n→ Iteration methods:');
    console.log(
        'forEach:',
        nums.forEach(n => console.log('  ', n)),
    );
    console.log(
        'map x2:',
        nums.map(n => n * 2),
    ); // [2, 4, 6, 8, 10]
    console.log(
        'filter (>2):',
        nums.filter(n => n > 2),
    ); // [3, 4, 5]
    console.log(
        'find (>3):',
        nums.find(n => n > 3),
    ); // 4
    console.log(
        'some (>3):',
        nums.some(n => n > 3),
    ); // true
    console.log(
        'every (>0):',
        nums.every(n => n > 0),
    ); // true

    // Reduce
    console.log('\n→ Reduce:');
    const sum = nums.reduce((acc, n) => acc + n, 0);
    console.log('sum:', sum); // 15
    const product = nums.reduce((acc, n) => acc * n, 1);
    console.log('product:', product); // 120

    // Sort
    console.log('\n→ Sort:');
    const unsorted = [3, 1, 4, 1, 5, 9, 2];
    console.log('default sort:', unsorted.sort()); // [1, 1, 2, 3, 4, 5, 9]
    const sorted = unsorted.sort((a, b) => b - a);
    console.log('descending:', sorted); // [9, 5, 4, 3, 2, 1, 1]

    // Flat & FlatMap
    console.log('\n→ Flat & FlatMap:');
    const nested = [1, [2, [3, 4]], 5];
    console.log('flat(1):', nested.flat(1)); // [1, 2, [3, 4], 5]
    console.log('flat(Infinity):', nested.flat(Infinity)); // [1, 2, 3, 4, 5]
    console.log(
        'flatMap(*2):',
        [1, 2, 3].flatMap(n => [n, n * 2]),
    ); // [1, 2, 2, 4, 3, 6]

    // Chaining
    console.log('\n→ Chaining:');
    const result = nums
        .filter(n => n % 2 === 0)
        .map(n => n * 10)
        .reduce((acc, n) => acc + n, 0);
    console.log('filter → map → reduce:', result); // (2*10 + 4*10) = 60
}

// s4_arrays(); // ← раскомментируй для запуска

// =============================================================================
// SECTION 5: Objects (Deep Dive)
// =============================================================================

function s5_objects() {
    console.log('▶ SECTION 5: Objects\n');

    // Create & Access
    console.log('→ Create & Access:');
    const person = { name: 'Alice', age: 30 };
    console.log('person:', person);
    console.log('person.name:', person.name);
    console.log('person["age"]:', person['age']);

    // Add & Modify
    console.log('\n→ Add & Modify:');
    person.email = 'alice@example.com';
    person['phone'] = '555-1234';
    console.log('after add:', person);
    person.age = 31;
    console.log('after modify:', person);

    // Object statics
    console.log('\n→ Object.keys/values/entries:');
    console.log('keys:', Object.keys(person)); // ['name', 'age', 'email', 'phone']
    console.log('values:', Object.values(person)); // ['Alice', 31, 'alice@example.com', '555-1234']
    console.log('entries:', Object.entries(person)); // [['name', 'Alice'], ...]

    // Iteration
    console.log('\n→ Iteration (for...in):');
    for (const key in person) {
        console.log(`  ${key}: ${person[key]}`);
    }

    // Clone (shallow vs structuredClone)
    console.log('\n→ Clone:');
    const original = { user: { name: 'Bob' }, tags: [1, 2] };
    const shallow = { ...original };
    shallow.user.name = 'Charlie'; // ❌ affects original
    console.log(
        'shallow clone - original modified:',
        original.user.name === 'Charlie',
    );

    const original2 = { user: { name: 'Bob' }, tags: [1, 2] };
    const deep = structuredClone(original2);
    deep.user.name = 'Charlie'; // ✓ doesn't affect original
    console.log('deep clone - original safe:', original2.user.name === 'Bob');

    // freeze & seal
    console.log('\n→ freeze vs seal:');
    const frozen = Object.freeze({ x: 1 });
    frozen.x = 2; // no error, but ignored
    console.log('frozen.x (attempted to set to 2):', frozen.x); // 1

    const sealed = Object.seal({ y: 1 });
    sealed.y = 2; // ✓ ok
    sealed.z = 3; // ❌ fails silently
    console.log('sealed.y (set to 2):', sealed.y); // 2
    console.log('sealed.z (tried to add):', sealed.z); // undefined

    // Property descriptors
    console.log('\n→ Property Descriptors:');
    const obj = {};
    Object.defineProperty(obj, 'readonly', {
        value: 42,
        writable: false, // can't change
        enumerable: true, // shows in for...in
        configurable: false, // can't redefine
    });
    console.log('readonly:', obj.readonly); // 42
    obj.readonly = 100; // fails silently
    console.log('after attempt to change:', obj.readonly); // 42
}

// s5_objects(); // ← раскомментируй для запуска

// =============================================================================
// SECTION 6: Functions (Basics)
// =============================================================================

function s6_functions() {
    console.log('▶ SECTION 6: Functions\n');

    // Function declaration
    console.log('→ Function Declaration:');
    function add(a, b) {
        return a + b;
    }
    console.log('add(2, 3):', add(2, 3)); // 5

    // Function expression
    console.log('\n→ Function Expression:');
    const multiply = function (a, b) {
        return a * b;
    };
    console.log('multiply(4, 5):', multiply(4, 5)); // 20

    // Arrow function
    console.log('\n→ Arrow Function:');
    const divide = (a, b) => a / b;
    console.log('divide(10, 2):', divide(10, 2)); // 5

    // Arrow with multiple lines
    const greet = name => {
        const msg = `Hello, ${name}!`;
        return msg;
    };
    console.log('greet("Alice"):', greet('Alice')); // "Hello, Alice!"

    // Default parameters
    console.log('\n→ Default Parameters:');
    function welcome(name = 'Guest') {
        return `Welcome, ${name}!`;
    }
    console.log('welcome():', welcome()); // "Welcome, Guest!"
    console.log('welcome("Bob"):', welcome('Bob')); // "Welcome, Bob!"

    // Rest parameters
    console.log('\n→ Rest Parameters:');
    const sum = (...nums) => nums.reduce((acc, n) => acc + n, 0);
    console.log('sum(1, 2, 3, 4):', sum(1, 2, 3, 4)); // 10

    // Spread operator
    console.log('\n→ Spread Operator:');
    const arr = [1, 2, 3];
    const arr2 = [0, ...arr, 4];
    console.log('spread in array:', arr2); // [0, 1, 2, 3, 4]

    const obj1 = { a: 1, b: 2 };
    const obj2 = { ...obj1, c: 3 };
    console.log('spread in object:', obj2); // { a: 1, b: 2, c: 3 }

    // Hoisting
    console.log('\n→ Hoisting:');
    console.log('sayHi() before declaration:', sayHi()); // "Hi!" (declaration hoisted)
    function sayHi() {
        return 'Hi!';
    }

    try {
        console.log('sayHello() before declaration:', sayHello()); // ReferenceError
    } catch (e) {
        console.log('  ↳ Error (expression not hoisted):', e.message);
    }
    const sayHello = () => 'Hello!';
}

// s6_functions(); // ← раскомментируй для запуска

// =============================================================================
// SECTION 7: Closures & Advanced Functions
// =============================================================================

function s7_closures() {
    console.log('▶ SECTION 7: Closures & Advanced Functions\n');

    // Closure: Counter
    console.log('→ Closure: Counter');
    function makeCounter() {
        let count = 0;
        return () => ++count;
    }
    const counter = makeCounter();
    console.log('counter():', counter()); // 1
    console.log('counter():', counter()); // 2
    console.log('counter():', counter()); // 3

    // Closure: Private Data
    console.log('\n→ Closure: Private Data (Bank Account)');
    function createAccount(initialBalance) {
        let balance = initialBalance;

        return {
            deposit(amount) {
                balance += amount;
                return balance;
            },
            withdraw(amount) {
                if (amount > balance) return 'Insufficient funds';
                balance -= amount;
                return balance;
            },
            getBalance() {
                return balance;
            },
        };
    }
    const account = createAccount(1000);
    console.log('initial:', account.getBalance()); // 1000
    console.log('deposit(500):', account.deposit(500)); // 1500
    console.log('withdraw(200):', account.withdraw(200)); // 1300
    console.log('balance:', account.getBalance()); // 1300

    // Factory
    console.log('\n→ Factory: Create Users');
    function createUser(name, role) {
        return {
            name,
            role,
            canDelete() {
                return this.role === 'admin';
            },
        };
    }
    const admin = createUser('Alice', 'admin');
    const guest = createUser('Bob', 'guest');
    console.log(`${admin.name} can delete:`, admin.canDelete()); // true
    console.log(`${guest.name} can delete:`, guest.canDelete()); // false

    // Currying
    console.log('\n→ Currying');
    const add = a => b => a + b;
    const add5 = add(5);
    console.log('add(5)(3):', add5(3)); // 8
    console.log('add(2)(8):', add(2)(8)); // 10

    // Memoization
    console.log('\n→ Memoization (Fibonacci)');
    function createFibMemo() {
        const cache = {};
        return function fib(n) {
            if (n in cache) return cache[n];
            if (n <= 1) return n;
            cache[n] = fib(n - 1) + fib(n - 2);
            return cache[n];
        };
    }
    const fib = createFibMemo();
    console.log('fib(10):', fib(10)); // 55
    console.log('fib(20):', fib(20)); // 6765 (much faster with memoization)
}

// s7_closures(); // ← раскомментируй для запуска

// =============================================================================
// SECTION 8: this & Context
// =============================================================================

function s8_this() {
    console.log('▶ SECTION 8: this & Context\n');

    // Method context
    console.log('→ Method context:');
    const person = {
        name: 'Alice',
        sayName() {
            console.log('  this.name:', this.name); // "Alice"
        },
    };
    person.sayName(); // ✓ correct context

    // Lost context
    console.log('\n→ Lost context:');
    const obj = {
        x: 10,
        getX() {
            return this.x;
        },
    };
    const method = obj.getX;
    console.log('method():', method()); // undefined (this = global/undefined)

    // call, apply, bind
    console.log('\n→ call/apply/bind:');
    function greet(greeting, punctuation) {
        return `${greeting}, ${this.name}${punctuation}`;
    }
    const user = { name: 'Bob' };

    console.log('call:', greet.call(user, 'Hi', '!')); // "Hi, Bob!"
    console.log('apply:', greet.apply(user, ['Hello', '?'])); // "Hello, Bob?"

    const boundGreet = greet.bind(user, 'Hey');
    console.log('bind:', boundGreet('!!!')); // "Hey, Bob!!!"

    // Arrow function this
    console.log('\n→ Arrow function (lexical this):');
    const obj2 = {
        name: 'Charlie',
        regularFunc() {
            console.log('  regular:', this.name); // "Charlie"
        },
        arrowFunc: () => {
            console.log('  arrow:', this.name); // undefined (inherits global this)
        },
    };
    obj2.regularFunc();
    obj2.arrowFunc();
}

// s8_this(); // ← раскомментируй для запуска

// =============================================================================
// SECTION 9: Callbacks
// =============================================================================

function s9_callbacks() {
    console.log('▶ SECTION 9: Callbacks\n');

    // Simple callback
    console.log('→ Simple callback:');
    function processArray(arr, callback) {
        const results = [];
        for (const item of arr) {
            results.push(callback(item));
        }
        return results;
    }
    const doubled = processArray([1, 2, 3], n => n * 2);
    console.log('doubled:', doubled); // [2, 4, 6]

    // Error-first callbacks
    console.log('\n→ Error-first callbacks:');
    function readFile(path, callback) {
        setTimeout(() => {
            if (path === '/valid/file') {
                callback(null, 'file content here');
            } else {
                callback(new Error('File not found'), null);
            }
        }, 100);
    }
    readFile('/valid/file', (err, data) => {
        if (err) console.log('  ✗ Error:', err.message);
        else console.log('  ✓ Data:', data);
    });

    // Callback chain (callback hell)
    console.log('\n→ Callback chain:');
    function step1(callback) {
        setTimeout(() => {
            console.log('  Step 1 done');
            callback();
        }, 100);
    }
    function step2(callback) {
        setTimeout(() => {
            console.log('  Step 2 done');
            callback();
        }, 100);
    }
    step1(() => {
        step2(() => {
            console.log('  All steps complete');
        });
    });
}

// s9_callbacks(); // ← раскомментируй для запуска

// =============================================================================
// SECTION 10: Promises
// =============================================================================

function s10_promises() {
    console.log('▶ SECTION 10: Promises\n');

    // Create promise
    console.log('→ Create Promise:');
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('success!'), 100);
    });
    p1.then(result => console.log('  ✓ Result:', result));

    // Promise chain
    console.log('\n→ Promise chain:');
    const p2 = new Promise(resolve => {
        setTimeout(() => resolve(5), 50);
    });
    p2.then(x => {
        console.log('  x:', x); // 5
        return x * 2;
    })
        .then(y => {
            console.log('  y:', y); // 10
            return y + 3;
        })
        .then(z => {
            console.log('  z:', z); // 13
        });

    // Error handling
    console.log('\n→ Error handling:');
    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('something failed')), 100);
    });
    p3.then(x => console.log('success:', x)).catch(err =>
        console.log('  ✗ Caught:', err.message),
    );

    // Promise.all
    console.log('\n→ Promise.all (wait for all):');
    Promise.all([
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3),
    ]).then(results => {
        console.log('  all resolved:', results); // [1, 2, 3]
    });

    // Promise.race
    console.log('\n→ Promise.race (first wins):');
    Promise.race([
        new Promise(resolve => setTimeout(() => resolve('slow'), 200)),
        new Promise(resolve => setTimeout(() => resolve('fast'), 50)),
    ]).then(result => {
        console.log('  first result:', result); // "fast"
    });
}

// s10_promises(); // ← раскомментируй для запуска

// =============================================================================
// SECTION 11: Async/Await
// =============================================================================

async function s11_asyncAwait() {
    console.log('▶ SECTION 11: Async/Await\n');

    // Basic async/await
    console.log('→ Basic async/await:');
    async function getData() {
        return 'data from server';
    }
    const data = await getData();
    console.log('  ', data);

    // Sequential requests
    console.log('\n→ Sequential (one after another):');
    async function getSequential() {
        const data1 = await new Promise(resolve =>
            setTimeout(() => resolve('data1'), 100),
        );
        console.log('  got data1:', data1);

        const data2 = await new Promise(resolve =>
            setTimeout(() => resolve('data2'), 100),
        );
        console.log('  got data2:', data2);

        return [data1, data2];
    }
    await getSequential();

    // Parallel requests
    console.log('\n→ Parallel (all at once):');
    async function getParallel() {
        const [r1, r2, r3] = await Promise.all([
            new Promise(resolve => setTimeout(() => resolve('result1'), 100)),
            new Promise(resolve => setTimeout(() => resolve('result2'), 100)),
            new Promise(resolve => setTimeout(() => resolve('result3'), 100)),
        ]);
        console.log('  all done:', [r1, r2, r3]);
    }
    await getParallel();

    // Error handling
    console.log('\n→ Error handling:');
    async function withError() {
        try {
            throw new Error('oops!');
        } catch (err) {
            console.log('  caught:', err.message);
        }
    }
    await withError();
}

// s11_asyncAwait(); // ← раскомментируй для запуска (async function)

// =============================================================================
// SECTION 12: Prototypes & Prototype Chain
// =============================================================================

function s12_prototypes() {
    console.log('▶ SECTION 12: Prototypes & Prototype Chain\n');

    // Constructor function
    console.log('→ Constructor function:');
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log(`  ${this.name} makes a sound`);
    };

    const dog = new Animal('Dog');
    console.log('dog.name:', dog.name); // "Dog"
    dog.speak(); // "Dog makes a sound"

    // Prototype chain
    console.log('\n→ Prototype chain:');
    function Dog(name, breed) {
        Animal.call(this, name); // call parent constructor
        this.breed = breed;
    }
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;
    Dog.prototype.bark = function () {
        console.log(`  ${this.name} barks!`);
    };

    const myDog = new Dog('Buddy', 'Labrador');
    console.log('myDog.name:', myDog.name); // "Buddy"
    console.log('myDog.breed:', myDog.breed); // "Labrador"
    myDog.speak(); // inherited from Animal
    myDog.bark(); // own method

    // instanceof
    console.log('\n→ instanceof:');
    console.log('myDog instanceof Dog:', myDog instanceof Dog); // true
    console.log('myDog instanceof Animal:', myDog instanceof Animal); // true
    console.log('myDog instanceof Object:', myDog instanceof Object); // true

    // Object.create
    console.log('\n→ Object.create:');
    const proto = {
        greet() {
            return `Hello from ${this.type}`;
        },
    };
    const obj = Object.create(proto);
    obj.type = 'custom object';
    console.log('obj.greet():', obj.greet()); // "Hello from custom object"
}

// s12_prototypes(); // ← раскомментируй для запуска

// =============================================================================
// SECTION 13: Classes & OOP
// =============================================================================

function s13_classes() {
    console.log('▶ SECTION 13: Classes & OOP\n');

    // Basic class
    console.log('→ Basic class:');
    class Vehicle {
        constructor(brand) {
            this.brand = brand;
        }

        start() {
            console.log(`  ${this.brand} engine started`);
        }
    }
    const car = new Vehicle('Toyota');
    car.start(); // "Toyota engine started"

    // Inheritance
    console.log('\n→ Inheritance:');
    class Car extends Vehicle {
        constructor(brand, model) {
            super(brand); // call parent constructor
            this.model = model;
        }

        start() {
            console.log(`  ${this.brand} ${this.model} engine started`);
        }

        honk() {
            console.log(`  ${this.model} goes beep beep!`);
        }
    }
    const myCar = new Car('Honda', 'Civic');
    myCar.start(); // "Honda Civic engine started"
    myCar.honk(); // "Civic goes beep beep!"

    // Getters & Setters
    console.log('\n→ Getters & Setters:');
    class Person {
        constructor(firstName, lastName) {
            this._firstName = firstName;
            this._lastName = lastName;
        }

        get fullName() {
            return `${this._firstName} ${this._lastName}`;
        }

        set fullName(name) {
            [this._firstName, this._lastName] = name.split(' ');
        }
    }
    const person = new Person('John', 'Doe');
    console.log('person.fullName:', person.fullName); // "John Doe"
    person.fullName = 'Jane Smith';
    console.log('after set:', person.fullName); // "Jane Smith"

    // Private fields
    console.log('\n→ Private fields:');
    class BankAccount {
        #balance;

        constructor(initial) {
            this.#balance = initial;
        }

        deposit(amount) {
            this.#balance += amount;
        }

        getBalance() {
            return this.#balance;
        }
    }
    const account = new BankAccount(1000);
    console.log('balance:', account.getBalance()); // 1000
    account.deposit(500);
    console.log('after deposit:', account.getBalance()); // 1500
    // console.log(account.#balance); // ❌ SyntaxError (private)

    // Static methods
    console.log('\n→ Static methods:');
    class Math2 {
        static add(a, b) {
            return a + b;
        }
    }
    console.log('Math2.add(3, 4):', Math2.add(3, 4)); // 7

    // instanceof
    console.log('\n→ instanceof:');
    console.log('myCar instanceof Car:', myCar instanceof Car); // true
    console.log('myCar instanceof Vehicle:', myCar instanceof Vehicle); // true
}

// s13_classes(); // ← раскомментируй для запуска

// =============================================================================
// SECTION 14: Recursion & Algorithms
// =============================================================================

function s14_recursion() {
    console.log('▶ SECTION 14: Recursion & Algorithms\n');

    // Factorial
    console.log('→ Factorial:');
    function factorial(n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    console.log('factorial(5):', factorial(5)); // 120

    // Fibonacci (naive)
    console.log('\n→ Fibonacci (naive - slow):');
    function fib(n) {
        if (n <= 1) return n;
        return fib(n - 1) + fib(n - 2);
    }
    console.log('fib(10):', fib(10)); // 55

    // Fibonacci (memoized - fast)
    console.log('\n→ Fibonacci (memoized - fast):');
    function createMemoFib() {
        const cache = {};
        return function fib(n) {
            if (n in cache) return cache[n];
            if (n <= 1) return n;
            cache[n] = fib(n - 1) + fib(n - 2);
            return cache[n];
        };
    }
    const memoFib = createMemoFib();
    console.log('memoFib(30):', memoFib(30)); // 832040 (instant)

    // Tree traversal
    console.log('\n→ Tree traversal (DFS):');
    function treeSum(node) {
        if (!node) return 0;
        return node.value + treeSum(node.left) + treeSum(node.right);
    }
    const tree = {
        value: 1,
        left: { value: 2, left: { value: 4 }, right: { value: 5 } },
        right: { value: 3 },
    };
    console.log('tree sum:', treeSum(tree)); // 15

    // Array reverse (no built-in reverse)
    console.log('\n→ Array reverse (recursive):');
    function reverse(arr, i = 0) {
        if (i >= arr.length) return [];
        return [arr[arr.length - 1 - i], ...reverse(arr, i + 1)];
    }
    console.log('reverse([1,2,3,4]):', reverse([1, 2, 3, 4])); // [4, 3, 2, 1]
}

// s14_recursion(); // ← раскомментируй для запуска

// =============================================================================
// SECTION 15: Functional Programming
// =============================================================================

function s15_functional() {
    console.log('▶ SECTION 15: Functional Programming\n');

    // Pure functions
    console.log('→ Pure functions:');
    const pure = (x, y) => x + y;
    console.log('pure(2, 3):', pure(2, 3)); // 5 (same input → same output, no side effects)

    // Composition
    console.log('\n→ Function composition:');
    const compose = (f, g) => x => f(g(x));
    const add1 = x => x + 1;
    const mul2 = x => x * 2;
    const addThenMul = compose(mul2, add1);
    console.log('compose(mul2, add1)(5):', addThenMul(5)); // (5+1)*2 = 12

    // Pipe (left-to-right)
    console.log('\n→ Pipe (left-to-right):');
    const pipe =
        (...fns) =>
        x =>
            fns.reduce((acc, fn) => fn(acc), x);
    const pipeline = pipe(add1, mul2);
    console.log('pipe(add1, mul2)(5):', pipeline(5)); // (5+1)*2 = 12

    // Immutability
    console.log('\n→ Immutability:');
    const original = { x: 1, y: 2 };
    const updated = { ...original, y: 3 };
    console.log('original:', original); // { x: 1, y: 2 } (unchanged)
    console.log('updated:', updated); // { x: 1, y: 3 }

    // Higher-order functions
    console.log('\n→ Higher-order functions:');
    const map = (fn, arr) => arr.map(fn);
    const filter = (pred, arr) => arr.filter(pred);
    const reduce = (fn, init, arr) => arr.reduce(fn, init);

    const nums = [1, 2, 3, 4, 5];
    console.log(
        'map(*2):',
        map(x => x * 2, nums),
    ); // [2, 4, 6, 8, 10]
    console.log(
        'filter(>2):',
        filter(x => x > 2, nums),
    ); // [3, 4, 5]
    console.log(
        'reduce(sum):',
        reduce((a, b) => a + b, 0, nums),
    ); // 15

    // Partial application
    console.log('\n→ Partial application:');
    const multiply = (a, b, c) => a * b * c;
    const partial =
        (fn, ...args) =>
        (...moreArgs) =>
            fn(...args, ...moreArgs);
    const mul2and3 = partial(multiply, 2, 3);
    console.log('mul2and3(4):', mul2and3(4)); // 2*3*4 = 24
}

// s15_functional(); // ← раскомментируй для запуска

// =============================================================================
// SECTION 16: Design Patterns
// =============================================================================

function s16_patterns() {
    console.log('▶ SECTION 16: Design Patterns\n');

    // Singleton
    console.log('→ Singleton (only one instance):');
    const Singleton = (() => {
        let instance;
        return {
            getInstance() {
                if (!instance) {
                    instance = { id: Math.random() };
                }
                return instance;
            },
        };
    })();
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();
    console.log('same instance?', s1 === s2); // true

    // Factory
    console.log('\n→ Factory (create objects):');
    function createButton(label, color) {
        return {
            label,
            color,
            render() {
                console.log(`  [${label}] (${color})`);
            },
        };
    }
    const btn1 = createButton('Submit', 'blue');
    const btn2 = createButton('Cancel', 'red');
    btn1.render();
    btn2.render();

    // Observer (pub/sub)
    console.log('\n→ Observer (pub/sub):');
    class EventEmitter {
        constructor() {
            this.listeners = {};
        }

        on(event, callback) {
            if (!this.listeners[event]) this.listeners[event] = [];
            this.listeners[event].push(callback);
        }

        emit(event, data) {
            if (this.listeners[event]) {
                this.listeners[event].forEach(cb => cb(data));
            }
        }
    }
    const emitter = new EventEmitter();
    emitter.on('click', data => console.log('  listener 1:', data));
    emitter.on('click', data => console.log('  listener 2:', data));
    emitter.emit('click', 'button clicked!');

    // Decorator (wrap function)
    console.log('\n→ Decorator (wrap function):');
    function log(fn) {
        return (...args) => {
            console.log(`  calling ${fn.name} with`, args);
            return fn(...args);
        };
    }
    const add = (a, b) => a + b;
    const loggedAdd = log(add);
    loggedAdd(3, 4); // logs call, returns 7

    // Strategy (swap algorithms)
    console.log('\n→ Strategy (swap algorithms):');
    class Sorter {
        constructor(strategy) {
            this.strategy = strategy;
        }

        sort(arr) {
            return this.strategy(arr);
        }
    }
    const quickSort = arr => arr.sort((a, b) => a - b);
    const bubbleSort = arr => arr; // simplified
    const sorter = new Sorter(quickSort);
    console.log('sort [3,1,2]:', sorter.sort([3, 1, 2])); // [1, 2, 3]
}

// s16_patterns(); // ← раскомментируй для запуска

// =============================================================================
// QUICK REFERENCE: Running Sections
// =============================================================================

const sections = {
    1: s1_dataTypes,
    2: s2_controlFlow,
    3: s3_loops,
    4: s4_arrays,
    5: s5_objects,
    6: s6_functions,
    7: s7_closures,
    8: s8_this,
    9: s9_callbacks,
    10: s10_promises,
    11: s11_asyncAwait,
    12: s12_prototypes,
    13: s13_classes,
    14: s14_recursion,
    15: s15_functional,
    16: s16_patterns,
};

// Usage: uncomment one section above, or run specific one here:
// sections[1](); // Run section 1
// sections[7](); // Run section 7
// etc.

// Or run all (warning: async section may interfere):
// Object.values(sections).forEach((fn, i) => {
//     if (i !== 10) fn(); // Skip async section
// });

console.log('\n' + '='.repeat(80));
console.log('PLAYGROUND READY');
console.log('Usage: uncomment section calls above to run');
console.log('Or: node playground.js (with calls uncommented)');
console.log('='.repeat(80) + '\n');
