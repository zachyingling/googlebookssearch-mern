const path = require("path");
const router = require("express").Router();
const db = require("../models");

// Uses react application when built
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.route("/api/saved").post(function (req, res) {
  console.log("made it to route");
  db.BookID.create();
});

module.exports = router;