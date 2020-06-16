import axios from "axios";

export default {
  apiCall: (title) => {
    return axios.get("/search/" + title);
  },
  postRoute: (id) => {
    return axios.post("/api/saved/" + id).then((response) => {
      if (response.data === true) {
        alert("Saved");
      } else {
        alert("Error saving, either book already saved or database is down.");
      }
    });
  },
  grabSaved: () => {
    return axios.get("/api/saved");
  },
  unsaveBook: (id) => {
    return axios.post("/api/unsaved/" + id);
  },
};
