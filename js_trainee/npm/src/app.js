export const sum = (a, b) => a + b;

sum(4, 7);

export class Hero {
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

export const hero = new Hero('Wazowski');

console.dir(Hero);
console.log(hero);
