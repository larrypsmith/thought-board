const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema ({
    imageUrl: {
        type: String,
    },
    fileName: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = ImageSchema