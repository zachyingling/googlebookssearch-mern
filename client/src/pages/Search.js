import React from "react";
import SearchContainer from "../components/SearchContainer/index";
import Results from "../components/Results/index";

function Search () {
  return (
    <div className="wrapper">
      <SearchContainer/>
      <Results/>
    </div>
  );
}

export default Search;