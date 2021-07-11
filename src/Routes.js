import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import {
  HandleRoute,
  HandleLandingRoute,
} from "./components/RouteHandler/RouteHandler";

const Routes = () => {
  return (
    <Switch>
      <HandleRoute exact path="/" component={HomePage} />
      <HandleLandingRoute path="/login" component={LoginPage} />
      <Route render={() => <h1>404 Not found</h1>} />
    </Switch>
  );
};

export default Routes;
