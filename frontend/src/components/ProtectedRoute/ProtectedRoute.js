import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {
  if (props.isLoggedIn) return <Component {...props} />;
  else return <Navigate to="/" replace />;
};

export default ProtectedRoute;
