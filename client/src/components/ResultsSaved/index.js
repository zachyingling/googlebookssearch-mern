import React from "react";
import ViewButton from "../ViewButton/index";
import UnsaveButton from "../UnsaveButton/index";

function ResultsSaved(props) {
  console.log(props.data);
  return (
    <div className="h-100 container" id="resultContainer">
      <h1>{props.data.title}</h1>
      <div className="container" id="buttonContainer">
        <ViewButton href={props.data.view} />
        <UnsaveButton id={props.data.id} />
      </div>
      <h2>{props.data.authors[0]}</h2>
      <img src={props.data.image} id="bookImage" alt="bookcover" />
      <span>{props.data.description}</span>
      <br id="clear" />
    </div>
  );
}

export default ResultsSaved;
