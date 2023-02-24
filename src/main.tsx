import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./App/store";
import "./index.css";
// import * as dotenv from "dotenv";
// dotenv.config();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
