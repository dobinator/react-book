const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
    required: false,
  },
  synopsis: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


const Books = mongoose.model("Books",bookSchema) 
module.exports = Books
