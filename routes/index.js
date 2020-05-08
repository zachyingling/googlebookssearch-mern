const path = require("path");
const router = require("express").Router();
const key = require("../keys");
const axios = require("axios").default;

// Uses react application when built
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.get("/:title", (req, res) => {
  axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + "&key=" + key)
  .then((response) => {
    console.log(response);
  }).finally(() => {
    res.send("<h1>Hello node.js</h1>");
  });
});

module.exports = router;