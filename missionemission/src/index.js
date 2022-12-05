import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  LOGIN_SCREEN,
  Recommendations,
    Survey,

} from "./components";
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <Router>
    <div className="page-container">
            <div className="content-wrap">
                <Auth0Provider
                    //domain={process.env.REACT_APP_AUTH0_DOMAIN}
                    //clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
                    domain="dev-rbh55tcb1jt0r6eo.us.auth0.com"
                    clientId="SpBpMIBvswlwv8HyyTfD3HEGJZj4DfnZ"
                    redirectUri={window.location.origin}
                >
                    <Navigation />

                </Auth0Provider>
        
        <Routes>
          <Route path="/" element={<LOGIN_SCREEN />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/Survey" element={<Survey />} />          
          <Route path="*" element={<h1> ERROR 404: PAGE NOT FOUND </ h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();