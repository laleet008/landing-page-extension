import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AnimatePresence>
        <App />
      </AnimatePresence>
    </React.StrictMode>
  </BrowserRouter>
);
