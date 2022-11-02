import React from "react";
import { NavLink } from "react-router-dom";
import './styles.css';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-sm navbar-dark navbar-color">
        <a class="navbar-brand" href="/#">
          <img src="https://tinyurl.com/4bvayy4e" height="40" alt="Mission Emission"/>
        </a>
        <a href="/" class="navbar-brand">Mission Emission</a>
        <div class="container">
            <ul class="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Login
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/progress">
                    Progress
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/recommendations">
                    Recommendations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/survey">
                    Survey
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/friends">
                  Friends
                </NavLink>
              </li>
            </ul>
        </div>
    </nav>
    </div>
  );
}

export default Navigation;