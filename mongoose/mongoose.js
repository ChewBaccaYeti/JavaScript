const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const cats = new Schema({
    nickname: {
        type: String,
        index: 1,
        minlength: 2,
        maxlength: 7,
        required: [true, 'Nickname is required.'],
    },
    age: {
        type: Number,
        index: 2,
        min: 1,
        max: 50,
    },
    owner: {
        name: String,
        index: 3,
        address: [String],
        birthday: Date,
    },
});
cats.index({ nickname: 1 }) // Второй метод присваивания индекса

const Cat = mongoose.model('cat', cats);

const cat = new Cat({
    nickname: 'Lebowski',
    age: 1,
});

Cat.create({
    nickname: 'Barsik',
    age: 2,
});

const result = cat.save();
console.log('Кіт збережений у базу! ', result);

const users = new Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: { type: String, unique: true },
});

users.methods.fullName = function () {
    return `${this.firstname} ${this.lastname}`
};

// CRUD методы

create({}); // C - Create

find([query], [options]); // R - Read
findOne([query], [options]);

update([query], [update], [options]); // U - Update
findOneAndUpdate([query], [update], [options]);

remove([query], [options]); // D - Delete
findOneAndRemove([query], [options]);