const BookService = require("./bookService");

const getAllBooks = (req, res) => {
  BookService.getAllBooks()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createBook = (req, res) => {
  BookService.createBook(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateBook = (req, res) => {
  const bookId = req.params.id;
  const book = req.body;
  BookService.updateBook(bookId, book)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const deleteBook = (req, res) => {
  const bookId = req.params.id;
  BookService.deleteBook(bookId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};
