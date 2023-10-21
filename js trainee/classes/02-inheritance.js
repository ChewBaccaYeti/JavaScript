/*
 * Наследование
 *  - extends
 *  - super()
 */

class Character {
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
}

const Stranger = new Character({ name: 'Brut', story: 'Prisoner', xp: 1000 });

console.log('New Character: Stranger', Stranger);
Stranger.gainXp(1000);

class Warrior extends Character {
    constructor(config) {
        super(config);
    }

    attack() {
        console.log(`${this.name} атакует используя ${this.weapon}`);
    }
}

const Knight = new Warrior({
    name: 'Dante',
    story: 'Crusader',
    xp: 2000,
    skills: [''],
    weapon: 'Long Sword',
    armor: 'Silver Shell',
});

console.log('New Character: Knight', Knight);
Knight.attack();
Knight.gainXp(2500);

console.log(
    'Warrior.prototype:',
    Warrior.prototype,
    Warrior.prototype.__proto__ === Character.prototype,
    Knight.__proto__ === Warrior.prototype
);

class Mage extends Character {
    constructor({ spells = [], ...restProps } = {}) {
        super(restProps);

        this.spells = spells;
    }

    castSpell() {
        console.log(`${this.name} кастует заклинания ${this.spells}`);
    }
}

const Cleric = new Mage({
    name: 'Duncan',
    story: 'Warden',
    xp: 2300,
    spells: ['Heal, FireBall'],
    weapon: 'Mace',
    armor: 'Ring of Barriers',
});

console.log('New Character: Cleric', Cleric);
Cleric.castSpell();
Cleric.gainXp(1800);

class BattleMage extends Mage {
    constructor({ ...restProps } = {}) {
        super(restProps);
    }
}

const Destroyer = new BattleMage({
    name: 'Gorgon',
    story: 'Undead',
    xp: 3000,
    spells: ['Lava river, Cursed weapon'],
    weapon: 'Magic Hammer',
    armor: 'Magic Stones',
});

console.log('New Character: Destroyer', Destroyer);
Destroyer.castSpell();
Destroyer.gainXp(3600);
