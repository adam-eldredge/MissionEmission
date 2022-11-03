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
  Progress,
  Survey
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<LOGIN_SCREEN />} />
      <Route path="/recommendations" element={<Recommendations />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/survey" element={<Survey />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();