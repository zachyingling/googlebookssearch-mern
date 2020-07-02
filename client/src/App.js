import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav/index";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Jumbotron from "./components/Jumbotron/index";

class App extends React.Component {
  render () { 
    return (
      <Router>
        <div>
          <Nav path={window.location.pathname}/>
          <Jumbotron/>
          <Route exact path="/" component={Search} />
          <Route path="/saved" component={Saved} />
        </div>
      </Router>
    );
  }
}

export default App;
