const monggose = require("mongoose");
const Schema = monggose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    isBuyed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Book = monggose.model("Book", bookSchema);
module.exports = Book;
