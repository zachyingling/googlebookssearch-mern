const router = require("express").Router();
const db = require("../models");
const axios = require("axios");

router.route("/search/:title/:key").get((req, res) => {
  console.log("made it to search;");
  axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + req.params.title + "&key=" + req.params.key).then(response => {
    console.log(response.data.items);
    res.json(response.data.items);
  });
});

router.route("/api/saved").post((req, res) => {
  console.log("made it to route");
  db.BookID.create();
});

module.exports = router;