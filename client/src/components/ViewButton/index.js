import React from "react";
import "./style.css";

function ViewButton (props) {
  return (
    <a role="button" className="btn btn-success" href={props.href} target="_blank" rel="noopener noreferrer" id="viewBtn">View</a>
  );
}

export default ViewButton;