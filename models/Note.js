const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ImageSchema = require('./Image');

const NoteSchema = new Schema({
    boardId: {
        type: Schema.Types.ObjectId,
        ref: 'boards'
    },
    image: ImageSchema,
    title: {
        type: String
    },
    caption: {
        type: String,
        required: true
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

const Note = mongoose.model('note', NoteSchema);

module.exports = Note;