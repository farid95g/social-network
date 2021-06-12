import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/redux-store";

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App state={state} dispatch={ store.dispatch.bind(store)} store={store} />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderEntireTree(store.getState());
store.subscribe(() => renderEntireTree(store.getState()));