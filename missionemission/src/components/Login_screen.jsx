import React from "react";
import Header from "./Header";
import './styles.css';
import { Link } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function Login_screen() {
  return (
    <div className="login_screen">
          <log className="login">
              <Header name="Welcome" />
              <body className="login-loginBackground">
              <h2>Login</h2>
               
              <Auth0Provider
                //domain={process.env.REACT_APP_AUTH0_DOMAIN}
                //clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
                domain="dev-rbh55tcb1jt0r6eo.us.auth0.com"
                clientId="SpBpMIBvswlwv8HyyTfD3HEGJZj4DfnZ"
                redirectUri={window.location.origin}
              >
                 <LoginButton/>
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