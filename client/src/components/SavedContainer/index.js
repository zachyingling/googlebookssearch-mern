import React from "react";
import API from "../../utils/API";

class SavedContainer extends React.Component {
  state = {
    saved: null,
  };

  componentDidMount() {
    API.grabSaved()
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h4>Saved Books:</h4>
        <div className="container"></div>
      </div>
    );
  }
}

export default SavedContainer;
