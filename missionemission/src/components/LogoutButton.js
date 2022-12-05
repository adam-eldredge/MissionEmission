import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return isAuthenticated && (
      <button class="btn btn-light" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
      </button>
    );
};

export default LogoutButton;