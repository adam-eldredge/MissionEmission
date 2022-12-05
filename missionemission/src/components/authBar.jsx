import React from 'react';
import AuthButton from './authButton';
import { Auth0Provider } from "@auth0/auth0-react";

const AuthBar = () => (
    <Auth0Provider
        domain="dev-rbh55tcb1jt0r6eo.us.auth0.com"
        clientId="SpBpMIBvswlwv8HyyTfD3HEGJZj4DfnZ"
        redirectUri={window.location.origin}
        >
        <div className="navbar navbar-expand-sm navbar-dark navbar-color">
            <AuthButton />
        </div>
        </Auth0Provider>
);

export default AuthBar;