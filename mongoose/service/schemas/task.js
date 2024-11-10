const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const task = new Schema(
    {
        title: {
            type: String,
            index: 1,
            minlength: 2,
            maxlength: 70,
            required: [true, 'title is required'],
        },
        text: {
            type: String,
            index: 2,
            minlength: 3,
            maxlength: 170,
            required: [true, 'text is required'],
        },
        isDone: {
            type: Boolean,
            default: false,
        },
    },
    // Отключение версификаций и мониторинг времени createdAt && updatedAt
    { versionKey: false, timestamps: true },
);

const Task = mongoose.model('task', task);

module.exports = Task;
