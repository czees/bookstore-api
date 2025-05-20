const mongoose = require("mongoose");

//a schema is what your database will hold.
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book Title is required"],
    trim: true,
    MaxLength: [100, "Book title can not exceed 100 characters"],
  },
  author: {
    type: String,
    required: [true, `Author's name  is required`],
    trim: true,
  },
  year: {
    type: Number,
    required: true,
    min: [1000, "Year must be atleast 1000"],
    max: [new Date().getFullYear(), "Year can not be in the future"],
  },
  createdat: { type: Date, default: Date.now },
});




module.exports = mongoose.model('Book', BookSchema)
//book - is the name of the model. it will be used to work on the database. eg book.find({}).