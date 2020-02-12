import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from "./Store/configureStore";
import { Provider } from "react-redux";
import { startSetUsers } from "./Actions/usersAction";
import { startSetPosts } from "./Actions/postsAction";

const store = configureStore();

store.dispatch(startSetUsers());
store.dispatch(startSetPosts());
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
