const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    boardId: {
        type: Schema.Types.ObjectId,
        ref: 'Board'
    },
    title: {
        type: String
    },
    caption: {
        type: String,
    },
    url: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    xcoord: {
        type: Number,
    },
    ycoord: {
        type: Number
    }   
})

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;