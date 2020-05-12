import axios from "axios";
import key from "../../../keys";

function apiCall (title) {
  axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + title + "&key=" + key)
  .then((response) => {
    console.log(response);
  }).finally(() => {
    res.send("done");
  });
}

export default apiCall;