import React from "react";
import Header from "./Header";
import './styles.css';
import { Link } from "react-router-dom";

function Login_screen() {
  return (
    <div className="login_screen">
          <log className="login">
              <Header name="Welcome" />
              <body className="login-loginBackground">
               <h2>Login</h2>
               
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
                   <input type="submit" value="Submit" />
                  </form>

                  <body className="signupAddition">
                      <br />
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