import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./state/state";

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App
          state={state}
          addPost={store.addPost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
          updateMessageText={store.updateMessageText.bind(store)}
          addMessage={store.addMessage.bind(store)}
        />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);