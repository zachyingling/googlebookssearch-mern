const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/index");
const cors = require("cors");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);
app.use(cors());

// Connect to the Mongo DB
mongoose.connect((process.env.NODE_ENV || "mongodb://localhost/booksdb"), { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
  console.log("App running on port " + PORT + "!");
});