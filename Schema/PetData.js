const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    inputBreed: { type: String, required: true },
    age: { type: Number, required: true },
    inputVar: { type: String, required: true },
    ownerfullname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    lookfor: { type: String, required: true },

})

module.exports = mongoose.model('Pets', petSchema);