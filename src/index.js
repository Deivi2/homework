import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import GlobalStyles from "./global-styles";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
