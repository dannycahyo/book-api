const bookModel = require("./bookModel");

const getAllBooks = () => {
  return bookModel.find();
};

const createBook = (book) => {
  return new bookModel(book).save();
};

const updateBook = (bookId, book) => {
  return bookModel.findByIdAndUpdate(bookId, book);
};

const deleteBook = (bookId) => {
  return bookModel.findByIdAndDelete(bookId);
};

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};
