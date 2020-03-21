const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema ({
    noteId: {
        type: Schema.Types.ObjectId,
        ref: "note"
    },
    photoUrl: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Photo = mongoose.model('photo', PhotoSchema);

module.exports = Photo