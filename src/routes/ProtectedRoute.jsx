import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { loginStatusActions } from "../store/loginStatusSlice";

const ProtectedRoute = ({ element }) => {
  const location = useLocation();
  const existingLoginStatus = localStorage.getItem("isLoggedIn");
  const loginStatus = useSelector((state) => state.reducer2.isLoggedIn);
  const dispatch = useDispatch();

  if (existingLoginStatus) {
    if (!loginStatus) {
      dispatch(loginStatusActions.doLogin());
    }
  }

  if (!existingLoginStatus) {
    dispatch(loginStatusActions.doLogout());
  }

  return existingLoginStatus !== null ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoute;
