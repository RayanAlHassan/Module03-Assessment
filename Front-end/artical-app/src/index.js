import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/*this as a router (to links all pages to a specific route), to keep track on all links which we have */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
