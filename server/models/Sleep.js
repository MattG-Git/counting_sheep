const { Schema, model } = require('mongoose');

const sleepSchema = new Schema({
    date: {
        type: Date,
        required: true,
        trim: true,
    },
    hours: {
        type: Number,
        required: true,
        trim: true,
    },
    quality: {
        type: Number,
        required: true,
        trim: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Sleep = model('Sleep', sleepSchema);

module.exports = Sleep;