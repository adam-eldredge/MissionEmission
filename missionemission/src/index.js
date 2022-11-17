import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  LOGIN_SCREEN,
  SignUp,
  Recommendations,
  Progress,
  Survey
} from "./components";

ReactDOM.render(
  <Router>
    <div className="page-container">
      <div className="content-wrap">
        <Navigation />
        <Routes>
          <Route path="/" element={<LOGIN_SCREEN />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="*" element={<h1> ERROR 404: PAGE NOT FOUND </ h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();