const Book = require('../models/books');

// Get all books
exports.getAllBooks = (req, res) => {
  Book.find()
    .then(books => {
      res.json(books);
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};

// Get a single book by ID
exports.getBookById = (req, res) => {
  const bookId = req.params.id;
  Book.findById(bookId)
    .then(book => {
      res.json(book);
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};

// Create a new book
exports.createBook = (req, res) => {
  const bookData = req.body;
  const newBook = new Book(bookData);
  newBook.save()
    .then(book => {
      res.json(book);
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};

// Update a book by ID
exports.updateBook = (req, res) => {
  const bookId = req.params.id;
  const updatedBookData = req.body;
  Book.findByIdAndUpdate(bookId, updatedBookData, { new: true })
    .then(book => {
      res.json(book);
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};

// Delete a book by ID
exports.deleteBook = (req, res) => {
  const bookId = req.params.id;
  Book.findByIdAndRemove(bookId)
    .then(() => {
      res.json({ message: 'Book deleted successfully' });
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};
