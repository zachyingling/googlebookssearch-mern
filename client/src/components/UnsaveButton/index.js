import React from "react";
import "./style.css";
import API from "../../utils/API";

function UnsaveButton(props) {
  return (
    <button
      type="button"
      className="btn btn-warning"
      id="unsaveBtn"
      onClick={() => {
        API.unsaveBook(props.id)
          .then((response) => {
            if (response.data === "unsaved") {
              alert("Unsaved book");
            } else {
              alert("Error unsaving book");
            }
          })
          .catch((err) => alert(err));
      }}
    >
      Unsave
    </button>
  );
}

export default UnsaveButton;
