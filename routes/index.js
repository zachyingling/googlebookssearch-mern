const router = require("express").Router();
const db = require("../models");

router.route("/search").get((req, res) => {
  console.log("made it to search;");
  // return axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + title + "&key=" + process.env.REACT_APP_GOOGLE_KEY);
  res.end();
});

router.route("/api/saved").post((req, res) => {
  console.log("made it to route");
  db.BookID.create();
});

module.exports = router;