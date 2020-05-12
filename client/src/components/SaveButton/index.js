import React from "react";
import "./style.css";

function SaveButton (props) {
  return (
    <button type="button" className="btn btn-warning" id="saveBtn" data-id={props.id}>Save</button>
  );
}

export default SaveButton;