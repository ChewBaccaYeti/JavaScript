const readline = require('readline');

class User {
    constructor(name, rank) {
        this.name = name;
        this.rank = rank;
    }
}
let user = new User('Wazowski', 106);
console.log(user.name, user.rank);
console.log(user);

//! <->

let _user = new (function () {
    this.name = 'Lebowski';
    this.rank = 92;

    class Good {
        constructor(smash, pass) {
            this.smash = smash;
            this.pass = pass;
        }
    }

    class Bad {
        constructor(smash, pass) {
            this.smash = smash;
            this.pass = pass;
        }
    }

    class Evil {
        constructor(smash, pass) {
            this.smash = smash;
            this.pass = pass;
        }
    }

    let good = new Good('fuck yes', 'nuh uh');
    let bad = new Bad('I am drunk', 'where am I');
    let evil = new Evil('kill them', 'mercy them');
    console.log(good);
    console.log(bad);
    console.log(evil);
})();
console.log(_user.name, _user.rank);
console.log(_user);

//! <->

function Construct(name) {
    this.name = name;

    this.sayHi = function () {
        console.log('My name is: ' + this.name);
    };
}
let isaac = new Construct('Isaac');
isaac.sayHi();

//! <->

let task = {};

function A() {
    return task;
}

function B() {
    return task;
}

let a = new A();
let b = new B();

console.log(a == b); // true

//! <->

class Calculator {
    constructor() {
        this.read = function () {
            this.a = 0;
            this.b = 0;

            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });

            rl.question('a? ', inputA => {
                this.a = +inputA;

                rl.question('b? ', inputB => {
                    this.b = +inputB;
                    rl.close();
                });

                console.log('Sum=' + this.sum());
                console.log('Mul=' + this.mul());
            });
        };
    }

    sum() {
        return this.a + this.b;
    }

    mul() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

console.log('Sum=' + calculator.sum());
console.log('Mul=' + calculator.mul());

//! <->
