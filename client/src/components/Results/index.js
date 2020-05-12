import React from "react";
import "./style.css";

function Results(props) {
  console.log(props);
  
  return (
  <div className="h-100 container">
    <h1>{props.bookName}</h1>
    {/* two buttons */}
    <h2>{props.bookAuthor}</h2>
    <img src={props.image} id="bookImage" alt="bookcover" />
    <p id="bio">{props.bookBio}</p>
    <br id="clear" />
  </div>);
};


export default Results;