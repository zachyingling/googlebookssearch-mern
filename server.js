require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios").default;
const key = require("./keys.js");
const PORT = process.env.PORT || 3001;

// const db = require("./app/models");
const app = express();


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/populatedb", { useNewUrlParser: true });

app.get("/", (req, res) => {
  res.send("Home route");
});

app.get("/:title", (req, res) => {
  axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:&key=" + key)
  .then((response) => {
    console.log(response);
  }).finally(() => {
    res.send("<h1>Hello node.js</h1>");
  });
});

app.listen(PORT, () => {
  console.log("App running on port " + PORT + "!");
});