import React, { useContext } from "react";
import { authContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  let { isAuth } = useContext(authContext);
  return <>{isAuth ? children : <Navigate to="/login" />}</>;
};
