const express = require("express");
const bookController = require("./bookController");

const router = express.Router();

router.get("/", bookController.getAllBooks);
router.post("/", bookController.createBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
