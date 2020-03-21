const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema ({
    noteId: {
        type: Schema.Types.ObjectId,
        ref: "note"
    },
    imageUrl: {
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

const Image = mongoose.model('image', ImageSchema);

module.exports = Image