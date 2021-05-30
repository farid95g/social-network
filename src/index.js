import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { addPost, subscribe, updateNewPostText } from './state/state';
import state from "./state/state";

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderEntireTree(state);
subscribe(renderEntireTree);