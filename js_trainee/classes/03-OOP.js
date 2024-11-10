const data = require('./data.json');
console.log(data);

class Prototype {
    constructor({
        name,
        role,
        avatar,
        species,
        citizenship,
        rank,
        directive,
        id,
    }) {
        this.name = name;
        this.role = role;
        this.avatar = avatar;
        this.species = species;
        this.citizenship = citizenship;
        this.rank = rank;
        this.directive = directive;
        this.id = id;
    }
    integration() {
        console.log(this);
    }
    strike() {}
    oath() {}
    guild() {}
    strategy() {}
}

const proto = new Prototype(data[0]);
proto.integration();

//! <-->

class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();

//! <-->

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} стоит неподвижно.`);
    }
}

let animal = new Animal('Animal');
console.log(animal);

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }
    hide() {
        console.log(`${this.name} прячется!`);
    }
    stop() {
        super.stop(); // parent's method stop() calling
        this.hide;
        console.log(`${this.name} остановился и прячется!`);
    }
}

let rabbit = new Rabbit('Rabbit', 10);
console.log(rabbit.run(5), rabbit.stop(), rabbit.hide());
console.log(rabbit.name, rabbit.earLength);
