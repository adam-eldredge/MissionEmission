import React from "react";
import Header from "./Header";
import './styles.css';

function SignUp() {
    return (
        <div className="SignUp">
            <log className="signup">
                <Header name="WELCOME" />
                <body className="login-loginBackground">
                    <h2>Sign Up (New User)</h2>

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

export default SignUp;
