import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { Provider } from "react-redux"
import { store } from "./state/store"
const container = document.getElementById("root");
const Root = ReactDOM.createRoot(container);
const element = React.createElement('div', null, '2');

Root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {element}
  </React.StrictMode>
)