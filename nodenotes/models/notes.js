const mongoose = require('mongoose')

const NotesSchema = new mongoose.Schema({
    text: String,
    checked: Boolean,
})

module.exports = mongoose.model('Notes' , NotesSchema)