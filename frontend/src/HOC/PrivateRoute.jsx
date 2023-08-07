import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log(token, "privateroute");

  if (!token) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};
