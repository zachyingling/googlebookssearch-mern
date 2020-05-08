import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                Saved
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
