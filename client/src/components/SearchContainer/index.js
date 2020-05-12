import React from "react";
import "./style.css";

class SearchContainer extends React.Component {
  state = {
    title: ""
  };
  
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render () {
    return (
      <div className="container" id="mainContainer">
        <h1 className="text">Search Book</h1>
        <form className="container">
          <label htmlFor="bookName" className="text">Enter book name: </label>
          <input type="text" id="bookName" name="title" value={this.state.title} onChange={this.handleInputChange}/>
          <input type="submit" id="searchBook" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchContainer;