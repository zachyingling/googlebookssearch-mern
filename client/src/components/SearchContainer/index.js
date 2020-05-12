import React from "react";
import "./style.css";
import API from "../../utils/API";
import Results from "../Results/index";

class SearchContainer extends React.Component {
  state = {
    title: "",
    results: []
  };
  
  searchBooks = query => {
    API.apiCall(query)
      .then(res => this.setState({results: res.data.items}))
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
        <div className="container">
          <h1 className="text">Search Book</h1>
          <form className="container">
            <label htmlFor="bookName" className="text">Enter book name: </label>
            <input type="text" id="bookName" name="title" value={this.state.title} onChange={this.handleInputChange}/>
            <input type="submit" id="searchBook" value="Search" onClick={this.handleFormSubmit} />
          </form>
        </div>
        <div className="container">
          <h2>Results: </h2>
          {this.state.results.length ? this.state.results.map(result => { return <Results
              bookName={result.volumeInfo.title}
              bookAuthor={result.volumeInfo.authors[0]}
              bookBio={result.volumeInfo.description}
              viewBtn={result.volumeInfo.canonicalVolumeLink}
              saveBtn={result.id}
              key={result.id}
              image={result.volumeInfo.imageLinks.thumbnail}
            />})
           : <h1>Nothing</h1>}
        </div>
      </div>
    );
  }
}

export default SearchContainer;