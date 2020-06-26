import React from "react";
import "./style.css";

function Jumbotron () {
  return (
    <div className="jumbotron text-center" id="backgroundJumbo">
      <h1 className="display-4" id="headerText">Google Books Search (React)</h1>
      <p className="lead" id="descriptionText">This application searchs for books and you are able to save them for viewing it at a later time.</p>
    </div>
  );
}

export default Jumbotron;