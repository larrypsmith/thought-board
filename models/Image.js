const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  board: {
    type: Schema.Types.ObjectId,
    ref: 'boards'
  },
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Image = mongoose.model('image', ImageSchema);

module.exports = Image;