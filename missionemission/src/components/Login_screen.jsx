import React from "react";
import Header from "./Header";
import './styles.css';
import { Link } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import AuthButton from "./authButton";


function Login_screen() {
  return (
    <div className="login_screen">
          <log className="login">
              <Header name="Welcome" />


              
        </log>
    </div>
  );
}

export default Login_screen;