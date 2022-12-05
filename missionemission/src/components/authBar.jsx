import React from 'react';
import AuthButton from './authButton';
import { Auth0Provider , useAuth0 } from "@auth0/auth0-react";
import Navigation from './Navigation';

function AuthBar()
{
    return (
        
            <div className="navbar navbar-expand-sm navbar-dark navbar-color">
                <AuthButton/>
            </div>
        
    );
}
export default AuthBar;