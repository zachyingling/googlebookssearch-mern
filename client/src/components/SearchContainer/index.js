import React from "react";
import "./style.css";
import API from "../../utils/API";

class SearchContainer extends React.Component {
  state = {
    title: "",
    results: {}
  };
  
  searchBooks = query => {
    API.apiCall(query)
      .then(res => console.log("done"))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.title);
  };

  render () {
    return (
      <div className="container" id="mainContainer">
        <h1 className="text">Search Book</h1>
        <form className="container">
          <label htmlFor="bookName" className="text">Enter book name: </label>
          <input type="text" id="bookName" name="title" value={this.state.title} onChange={this.handleInputChange}/>
          <input type="submit" id="searchBook" value="Search" onClick={this.handleFormSubmit} />
        </form>
      </div>
    );
  }
}

export default SearchContainer;