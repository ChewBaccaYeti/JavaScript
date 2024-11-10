function f(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        }
    };
}

class User extends f('Hello! Hi!') {}

new User().sayHi();
