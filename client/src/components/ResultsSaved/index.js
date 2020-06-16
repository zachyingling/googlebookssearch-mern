import React from "react";
import ViewButton from "../ViewButton/index";

function ResultsSaved(props) {
  console.log(props.data);
  return (
    <div className="h-100 container" id="resultContainer">
      <h1>{props.data.title}</h1>
      <div className="container" id="buttonContainer">
        <ViewButton href={props.data.view} />
        {/* <SaveButton id={props.saveBtn} /> */}
      </div>
      <h2>{props.data.authors[0]}</h2>
      <img src={props.data.image} id="bookImage" alt="bookcover" />
      <p id="bio">{props.data.description}</p>
      <br id="clear" />
    </div>
  );
}

export default ResultsSaved;
