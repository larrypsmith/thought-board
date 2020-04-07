const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Board = mongoose.model('Board', BoardSchema);

module.exports = Board;