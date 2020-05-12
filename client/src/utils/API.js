import axios from "axios";
import key from "./keys";

export default { 
  apiCall: (title) => {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + title + "&key=" + key);
  }
};