import React from "react";
import { BrowserRouter as Route, Switch} from "react-router-dom";
import Nav from "./components/Nav/index";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Jumbotron from "./components/Jumbotron/index";

class App extends React.Component {
  render () { 
    return (
      <div>
        <Nav path={window.location.pathname}/>
        <Jumbotron/>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    );
  }
}

export default App;
