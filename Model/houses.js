
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let houseSchema = new Schema({
    Type: {
        type: String
    },
    Year: {
        type: Number
    },
    Area: {
        type: Number
    },
    Rooms: {
        type: Number
    }, Price: {
        type: Number
    }
}, {
    collection: 'house_details'
})

module.exports = mongoose.model('House', houseSchema )