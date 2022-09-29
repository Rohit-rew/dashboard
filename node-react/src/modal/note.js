const mongoose = require("mongoose");

const scheema = new mongoose.Schema({
  text: String,
  id: String,
  checked: Boolean,
});

module.exports = mongoose.model("notes", scheema , "notes");
