const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const path = require("path");
const app = express();
const routes = require("./routes/index");
const cors = require("cors");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(express.static("public"));
app.use(cors());

// Connect to the Mongo DB
mongoose.connect("mongodb://zachyingling:upenn!2112@ds127646.mlab.com:27646/heroku_753r90kd"|| "mongodb://localhost/booksdb", { useNewUrlParser: true, useUnifiedTopology: true });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // Uses react application when build
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client", "/build", "/index.html"));
  });
}

app.listen(PORT, () => {
  console.log("App running on port " + PORT + "!");
});