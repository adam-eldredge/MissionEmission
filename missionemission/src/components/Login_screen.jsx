import React from "react";
import Header from "./Header";
import './styles.css';

function Login_screen() {
  return (
    <div className="login_screen">
          <log className="login">
              <Header name="WELCOME" />
              <body className="login-loginBackground">
               <h2>Login (Existing User)</h2>
               
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
              </body>

        </log>
    </div>
  );
}

export default Login_screen;