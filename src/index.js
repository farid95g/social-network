import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from './StoreContext';

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderEntireTree(store.getState());
store.subscribe(() => renderEntireTree(store.getState()));