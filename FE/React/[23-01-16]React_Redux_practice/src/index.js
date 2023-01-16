import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
const container = document.getElementById("root");
const Root = ReactDOM.createRoot(container);

Root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)