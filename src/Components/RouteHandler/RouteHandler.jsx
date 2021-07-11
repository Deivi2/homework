import React from "react";
import { Route, Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const HandleRoute = ({ component: Component, ...props }) => {
  const isLoggedIn = useSelector((state) => state.common.isLoggedIn);

  return (
    <Route
      {...props}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export const HandleLandingRoute = ({ component: Component, ...props }) => {
  const isLoggedIn = useSelector((state) => state.common.isLoggedIn);

  return (
    <Route
      {...props}
      render={(props) =>
        isLoggedIn ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
