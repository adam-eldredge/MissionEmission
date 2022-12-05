import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import AuthButton from './authButton';
import { NavLink, redirect } from "react-router-dom";
import './styles.css';
import AuthBar from './authBar';
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {
    const { logout,loginWithRedirect,isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        return (
            <div className="navigation">
                <nav className="navbar navbar-expand-sm navbar-dark navbar-color">
                    <a class="navbar-brand" href="/#">
                        <img src="https://tinyurl.com/4bvayy4e" height="40" alt="Mission Emission" />
                    </a>
                    <a href="/" class="navbar-brand"><h1>Mission Emission</h1></a>
                    <div class="container">
                        <ul class="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <h5>Welcome</h5>
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li><li className="nav-item">
                                <NavLink className="nav-link" to="/recommendations">
                                    <h5>Recommendations</h5>
                                </NavLink>
                            </li><li className="nav-item">
                                <NavLink className="nav-link" to="/survey">
                                    <h5>Survey</h5>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => logout({ returnTo: window.location.origin })} class="btn btn-primary btn-lg">Log Out</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
    else {
        return (
            <div className="navigation">
                <nav className="navbar navbar-expand-sm navbar-dark navbar-color">
                    <a class="navbar-brand" href="/#">
                        <img src="https://tinyurl.com/4bvayy4e" height="40" alt="Mission Emission" />
                    </a>
                    <a href="/" class="navbar-brand"><h1>Mission Emission</h1></a>
                    <div class="container">
                        <ul class="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <h5>Welcome</h5>
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => loginWithRedirect()} class="btn btn-primary btn-lg">Log In</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
        
}

export default Navigation;