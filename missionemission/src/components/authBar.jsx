import React from 'react';
import AuthButton from './authButton';

function AuthBar()
{
    return (
            <div className="navbar navbar-expand-sm navbar-dark navbar-color">
                <AuthButton/>
            </div>
    );
}
export default AuthBar;