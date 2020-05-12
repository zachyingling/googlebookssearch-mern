import React from "react";
import "./style.css";

function SearchContainer () {
  return (
    <div className="container" id="mainContainer">
      <h1 className="text">Search Book</h1>
      <form className="container">
        <label for="bookName" className="text">Enter book name: </label>
        <input type="text" id="bookName" name="bookName"/>
        <input type="submit" id="searchBook" name="searchBook" value="Search" />
      </form>
    </div>
  );
}

export default SearchContainer;