require("dotenv").config();
const path = require("path")
const router = require("express").Router();
const db = require("../models");
const axios = require("axios");

router.route("/search/:title").get((req, res) => {
  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=intitle:" +
        req.params.title +
        "&key=" +
        (process.env.GOOGLE_KEY ||
          process.env.REACT_APP_GOOGLE_KEY ||
          process.env.DEV_GOOGLE_KEY)
    )
    .then((response) => {
      res.json(response.data.items);
    });
});

router.route("/api/saved/:id").post((req, res) => {
  let bookID = db.BookID;

  bookID
    .find({ book_id: req.params.id })
    .then((response) => {
      if (response.length === 0) {
        bookID
          .create({ book_id: req.params.id })
          .then(() => {
            res.send(true);
          })
          .catch((err) => res.send(false));
      } else {
        res.send(false);
      }
    })
    .catch((err) => res.send(false));
});

router.route("/api/saved").get((req, res) => {
  let tempBookArr = [];
  db.BookID.find()
    .then((response) => {
      for (let i = 0; i < response.length; i++) {
        axios
          .get(
            "https://www.googleapis.com/books/v1/volumes/" +
              response[i].book_id +
              "?key=" +
              (process.env.GOOGLE_KEY ||
                process.env.REACT_APP_GOOGLE_KEY ||
                process.env.DEV_GOOGLE_KEY)
          )
          .then((responseBook) => {
            let tempBookObj = {};
            tempBookObj.title = responseBook.data.volumeInfo.title;
            tempBookObj.description = responseBook.data.volumeInfo.description;
            // This gets rid of <>'s and all text inbetween them
            if (tempBookObj.description) {
              tempBookObj.description = tempBookObj.description.replace(
                / *\<[^]*\> */g,
                ""
              );
            } else {
              tempBookObj.description = "No description found for book.";
            }

            // Some descriptions were inbetween <> from start to finish leaving description to be an empty string so i check for this again
            if(!tempBookObj.description){
              tempBookObj.description = "No description found for book.";
            }
            tempBookObj.id = responseBook.data.id;
            tempBookObj.authors = responseBook.data.volumeInfo.authors;
            tempBookObj.image =
              responseBook.data.volumeInfo.imageLinks.thumbnail;
            tempBookObj.view = responseBook.data.volumeInfo.canonicalVolumeLink;
            tempBookArr.push(tempBookObj);
            if (tempBookArr.length === response.length) {
              res.send(tempBookArr);
            }
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => res.send(err));
});

router.route("/api/unsaved/:id").post((req, res) => {
  let tempBookID = req.params.id;

  db.BookID.deleteOne({ id: tempBookID })
    .then(() => {
      res.send("unsaved");
    })
    .catch((err) => res.send("error"));
});

module.exports = router;
