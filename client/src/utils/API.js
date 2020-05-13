import axios from "axios";

export default { 
  apiCall: (title) => {
    // console.log("title: " + title);
    // console.log("key: " +process.env.REACT_APP_GOOGLE_KEY);
    return axios.get("/search/" + title + "/" + process.env.REACT_APP_GOOGLE_KEY);
  },
  postRoute: (id) => {
    return axios.post("/api/saved", id);
  }
};