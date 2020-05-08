import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";

function App () {
    return (
    <Router>
      <Nav/>
    </Router>
    );
}

export default App;
