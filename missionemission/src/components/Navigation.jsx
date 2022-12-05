import React from "react";
import { NavLink } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import AuthButton from './authButton';
import './styles.css';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-sm navbar-dark navbar-color">
        <a class="navbar-brand" href="/#">
          <img src="https://tinyurl.com/4bvayy4e" height="40" alt="Mission Emission"/>
        </a>
        <a href="/" class="navbar-brand"><h1>Mission Emission</h1></a>
        <div class="container">
            <ul class="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <h5>Login</h5>
                  <span className="sr-only">(current)</span>
                </NavLink>
               </li>
             
              <li className="nav-item">
                <NavLink className="nav-link" to="/recommendations">
                    <h5>Recommendations</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/survey">
                    <h5>Survey</h5>
                </NavLink>
              </li>

              <Auth0Provider
                domain="dev-rbh55tcb1jt0r6eo.us.auth0.com"
                clientId="SpBpMIBvswlwv8HyyTfD3HEGJZj4DfnZ"
                redirectUri={window.location.origin}
                >
                <div className="navbar navbar-expand-sm navbar-dark navbar-color">
                    <AuthButton />
                </div>
              </Auth0Provider>
              
            </ul>
        </div>
    </nav>
    </div>
  );
}

export default Navigation;