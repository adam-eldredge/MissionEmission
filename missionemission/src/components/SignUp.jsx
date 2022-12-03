import React from "react";
import Header from "./Header";
import './styles.css';

function SignUp() {
    return (
        <div className="SignUp">
            <log className="signup">
                <Header name="Welcome" />
                <body className="login-loginBackground">
                    <h2>Sign Up</h2>

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
                        <input type="submit" value="Submit" class="btn btn-primary btn-lg" />
                    </form>
                </body>

            </log>
        </div>
    );
}

export default SignUp;
