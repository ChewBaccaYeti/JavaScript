/*
 * Наследование
 *  - extends
 *  - super()
 */

class Character { // prototype
    constructor({
        name = 'Hero',
        story = 'Unknown',
        xp = 0,
        skills = [],
        weapon = 'Fists',
        armor = 'None',
    } = {}) {
        this.name = name;
        this.story = story;
        this.xp = xp;
        this.skills = skills;
        this.weapon = weapon;
        this.armor = armor;
    }

    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта.`);
        this.xp += amount;
    }
    attack() {
        console.log(`${this.name} атакует используя ${this.weapon}`);
    }
    rage() {
        console.log('rage: ', this.warcry);
    }
    castSpell() {
        console.log(`${this.name} кастует заклинания ${this.spells}`);
    }
    labubuKiss() {
        console.log(`${this.name} целует Labubu!`);
    }
}
class Warrior extends Character {
    constructor(config) {
        super(config);
    }
}
class Berserk extends Warrior {
    constructor({ warcry, ...restProps } = {}) {
        super(restProps);
        this.warcry = warcry;
    }
}
class Mage extends Character {
    constructor({ spells = [], ...restProps } = {}) {
        super(restProps);
        this.spells = spells;
    }
}
class BattleMage extends Mage {
    constructor({ ...restProps } = {}) {
        super(restProps);
    }
}

const Stranger = new Character({ name: 'Brut', story: 'Prisoner', xp: 1000 });
const Knight = new Warrior({
    name: 'Dante',
    story: 'Crusader',
    xp: 2000,
    skills: [''],
    weapon: 'Long Sword',
    armor: 'Silver Shell',
});
const Demolisher = new Berserk({
    name: 'Grunter',
    story: 'Barbarian',
    xp: 3700,
    skills: ['Thunder Axr, Blood Rain'],
    warcry: 'Blood!!!',
    weapon: 'Bloody Axe',
    armor: 'Helmet of Depths',
});
const Cleric = new Mage({
    name: 'Duncan',
    story: 'Warden',
    xp: 2300,
    spells: ['Heal, FireBall'],
    weapon: 'Mace',
    armor: 'Ring of Barriers',
});
const Destroyer = new BattleMage({
    name: 'Gorgon',
    story: 'Undead',
    xp: 3000,
    spells: ['Lava river, Cursed weapon'],
    weapon: 'Magic Hammer',
    armor: 'Magic Stones',
});

console.log('New Character: Stranger', Stranger);
Stranger.gainXp(1000);

console.log('New Character: Knight', Knight);
Knight.attack();
Knight.gainXp(2500);

console.log('New Character: Demolisher', Demolisher);
Demolisher.rage();
Demolisher.attack();
Demolisher.gainXp(3700);

console.log('New Character: Cleric', Cleric);
Cleric.castSpell();
Cleric.gainXp(1800);

console.log('New Character: Destroyer', Destroyer);
Destroyer.castSpell();
Destroyer.gainXp(3600);

console.log(
    'Warrior.prototype:',
    Warrior.prototype,
    Warrior.prototype.__proto__ === Character.prototype,
    Knight.__proto__ === Warrior.prototype,
);

/*
 * instanceof проверяет всю цепочку прототипов, а не только прямой класс.
 */
console.log(Demolisher instanceof Berserk); // true — прямой класс
console.log(Demolisher instanceof Warrior); // true — родитель
console.log(Demolisher instanceof Character); // true — корень цепочки
console.log(Demolisher instanceof Mage); // false — другая ветка
console.log(Cleric instanceof Character); // true

/*
 * Переопределение метода + вызов родительского через super.method().
 * Paladin расширяет attack(), но переиспользует логику родителя.
 */
class Paladin extends Warrior {
    constructor({ holyPower = 100, ...restProps } = {}) {
        super(restProps);
        this.holyPower = holyPower;
    }
    // override: сначала зовём родительский attack, затем добавляем своё
    attack() {
        super.attack(); // вызов метода Character.attack в контексте this
        console.log(`${this.name} наносит священный урон (${this.holyPower})`);
    }
}

const Templar = new Paladin({
    name: 'Roland',
    weapon: 'Holy Blade',
    holyPower: 250,
});
Templar.attack();
// Roland атакует используя Holy Blade
// Roland наносит священный урон (250)
console.log(Templar instanceof Warrior, Templar instanceof Character); // true true
