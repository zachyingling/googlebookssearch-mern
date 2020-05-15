const router = require("express").Router();
const db = require("../models");
const axios = require("axios");

router.route("/search/:title/:key").get((req, res) => {
  axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + req.params.title + "&key=" + req.params.key).then(response => {
    res.json(response.data.items);
  });
});

router.route("/api/saved/:id").post((req, res) => {
  let bookID = db.BookID;

  bookID.find({ book_id: req.params.id }).then(response => {
    if(response.length === 0){
      bookID.create({ book_id: req.params.id }).then(() => { 
        res.send(true);
      }).catch(err => res.send(false));
    } else {
      res.send(false);
    }
  }).catch(err => res.send(false));
});

module.exports = router;