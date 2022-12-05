import React from "react";
import { NavLink, redirect } from "react-router-dom";
import './styles.css';
import AuthBar from "./authBar";

const RestrictedNavigation = () => {

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
                                <AuthButton />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
  
}

export default RestrictedNavigation;