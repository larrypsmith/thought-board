const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    Board: {
        type: Schema.Types.ObjectId,
        ref: 'boards'
    },
    caption: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Board = mongoose.model('board', BoardSchema);

module.exports = Board;