import React from "react";
import API from "../../utils/API";
import ResultsSaved from "../ResultsSaved/index";
import "./style.css";

class SavedContainer extends React.Component {
  state = {
    saved: null,
  };

  componentDidMount() {
    API.grabSaved()
      .then((response) => {
        this.setState({ saved: response.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container" id="mainContainer">
        <h4 className="text" id="savedBookText">Saved Books</h4>
        <div className="container" id="savedContainer">
          {this.state.saved ? (
            this.state.saved.map((value, index) => (
              <ResultsSaved key={index} data={value} />
            ))
          ) : (
            <h1>No Saved Articles</h1>
          )}
        </div>
      </div>
    );
  }
}

export default SavedContainer;
