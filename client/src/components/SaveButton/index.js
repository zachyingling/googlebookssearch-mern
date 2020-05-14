import React from "react";
import "./style.css";
import API from "../../utils/API";

function SaveButton (props) {
  return (
    <button type="button" className="btn btn-warning" id="saveBtn" onClick={() => {API.postRoute(props.id)}}>Save</button>
  );
}

export default SaveButton;