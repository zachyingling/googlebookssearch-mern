import axios from "axios";

export default { 
  apiCall: (title) => {
    return axios.get("/books/v1/volumes?q=intitle:" + title + "&key=" + process.env.REACT_APP_GOOGLE_KEY);
  },
  postRoute: (id) => {
    return axios.post("/api/saved", id);
  }
};