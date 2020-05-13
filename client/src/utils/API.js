import axios from "axios";

export default { 
  apiCall: (title) => {
    return axios.get("/search/" + title + "/" + process.env.REACT_APP_GOOGLE_KEY);
  },
  postRoute: (id) => {
    return axios.post("/api/saved/" + id);
  }
};