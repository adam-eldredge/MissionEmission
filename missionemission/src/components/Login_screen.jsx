import React from "react";
import Header from "./Header";
import './styles.css';
import { Link } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from '@auth0/auth0-react'

function Login_screen() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="login_screen">
          <log className="login">
               
              <Auth0Provider
                domain="dev-rbh55tcb1jt0r6eo.us.auth0.com"
                clientId="SpBpMIBvswlwv8HyyTfD3HEGJZj4DfnZ"
                redirectUri={window.location.origin}
              >
                 <LoginButton/>
                 <Profile/>
                 <LogoutButton/>
              </Auth0Provider>

        </log>
    </div>
  );
}

export default Login_screen;