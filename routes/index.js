const path = require("path");
const router = require("express").Router();
const key = require("../keys");
const axios = require("axios").default;

// Uses react application when built
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;