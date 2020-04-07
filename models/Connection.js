const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConnectionSchema = new Schema({
    note1: {
        type: Schema.Types.ObjectId,
        ref: 'Note'
    },
    note2: {
        type: Schema.Types.ObjectId,
        ref: 'Note'
    },
    board: {
        type: Schema.Types.ObjectId,
        ref: 'Board'
    }
})

const Connection = mongoose.model('Connection', ConnectionSchema);

module.exports = Connection;