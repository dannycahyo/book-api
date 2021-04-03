const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bookRoute = require("./api/book/bookRouter");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    isSucces: true,
    message: "This is book server",
  });
});

app.use("/book", bookRoute);

const dbURI =
  "mongodb://dannygg:ggwp123@nodeapp-shard-00-00.la8gg.mongodb.net:27017,nodeapp-shard-00-01.la8gg.mongodb.net:27017,nodeapp-shard-00-02.la8gg.mongodb.net:27017/book_management?ssl=true&replicaSet=atlas-sdo70z-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

module.exports = app;
