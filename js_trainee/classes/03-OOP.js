const data = require('./data.json');
console.log(data);

class Prototype {
    constructor({ name, role, avatar, species, citizenship, rank, directive, id }) {
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
    strike() { }
    oath() { }
    guild() { }
    strategy() { }
}

// const { id, name, avatar, role, directive, species, citizenship, rank } = structure;

// const Schema = {
//     id,
//     name,
//     role,
//     avatar,
//     directive,
//     species,
//     citizenship,
//     rank
// }

const V_1 = new Prototype(data[0]);
V_1.integration();

// const champion = new Prototype('Hector', 89)
// champion.integration();