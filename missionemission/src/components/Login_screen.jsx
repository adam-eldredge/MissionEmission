import React from "react";
import './styles.css';

function Login_screen() {
  return (
    <div className="login_screen">
      <log className="login">
             <body className="login-loginBackground">
               <h2>LOGIN</h2>
               
               <form>
                    <label>
                         Username:
                         <input type="text" name="username" />
                    </label>
                    <br />
                    <label>
                         Password: 
                         <input type="text" name="password" />
                    </label>
                    <br />
                         <input type="submit" value="Submit" />
                         
               </form>
               <br />
             </body>
        </log>
    </div>
    
  );
}

export default Login_screen;