const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bookRoute = require("./src/api/book/bookRouter");
require("dotenv/config");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    isSucces: true,
    message: "This is book server",
  });
});

app.use("/book", bookRoute);

const PORT = process.env.PORT || 3000;

const dbURI = process.env.DB_URI;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(PORT, () => {
      console.log(`App listening on http://localhost:${PORT}`);
    })
  )
  .catch((err) => console.log(err));
