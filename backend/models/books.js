const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    bookTitle: { type: String, required: true },
    author: { type: String, required: true },
    publishedDate: { type: Date },
    filePath: { type: String, required: true }, // Path to the PDF file
    description: { type: String }
  });
  
  const Book = mongoose.model('Book', bookSchema);
  