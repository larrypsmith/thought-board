const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConnectionSchema = new Schema({
    note1: {
        type: Schema.Types.ObjectId,
        ref: 'notes'
    },
    note2: {
        type: Schema.Types.ObjectId,
        ref: 'notes'
    }
})

const Connection = mongoose.model('connections', ConnectionSchema);

module.exports = Connection;