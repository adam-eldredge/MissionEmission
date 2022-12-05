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
              <Header name="Welcome"/>
              <body className="login-loginBackground">
               
              <Auth0Provider
                domain="dev-rbh55tcb1jt0r6eo.us.auth0.com"
                clientId="SpBpMIBvswlwv8HyyTfD3HEGJZj4DfnZ"
                redirectUri={window.location.origin}
              >
                 <LoginButton/>
                 <Profile/>
                 <LogoutButton/>
              </Auth0Provider>,

              <form>
                   <label>
                         Username   :{" "}
                     <input type="text" name="username" />
                   </label>
                   <br />
                   <label>
                         Password &nbsp;:{" "}
                     <input type="text" name="password" />
                   </label>
                   <br />
                   <input type="submit" value="Submit" class="btn btn-primary btn-lg"/>
                  </form>

                  <body className="signupAddition">
                      
                      <ul>
                          <li style={{ listStyleType: "none" }}>
                              New User? &nbsp;
                              <Link to="/signup">Sign Up</ Link>
                          </ li>
                      </ ul>

                  </ body>

              </body>

              
        </log>
    </div>
  );
}

export default Login_screen;