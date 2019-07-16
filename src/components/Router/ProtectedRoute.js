import React from "react";
import { Route, Redirect } from "react-router-dom";
export const ProtectedRoute = ({ isAllowed, ...props }) =>
  isAllowed ? <Route {...props} /> : <Redirect to="/" />;
