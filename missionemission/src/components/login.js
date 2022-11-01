import "./login.css";
const Login = () => {
    return ( 
        <log className = "login">
             <body className = "login-loginBody">
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
       
     );
}
 
export default Login;