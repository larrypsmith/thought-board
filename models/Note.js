const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    boardId: {
        type: Schema.Types.ObjectId,
        ref: 'boards'
    },
    title: {
        type: String
    },
    caption: {
        type: String,
        required: true
    },
    url: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Note = mongoose.model('note', NoteSchema);

module.exports = Note;