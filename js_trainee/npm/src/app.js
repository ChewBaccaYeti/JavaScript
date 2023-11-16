const sum = (a, b) => a + b;

sum(4, 7);

class Hero {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const hero = new Hero('Wazowski');

console.log(Hero);
console.log(hero);
