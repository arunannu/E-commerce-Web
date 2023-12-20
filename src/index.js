import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./context/auth-context";

// import "../node_modules/react-bootstrap/dist/react-bootstrap";
// import "../node_modules/bootstrap/dist/js/bootstrap";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import { AppContext } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();