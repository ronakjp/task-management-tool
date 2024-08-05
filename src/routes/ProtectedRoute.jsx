import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { loginStatusActions } from "../store/loginStatusSlice";
const ProtectedRoute = ({ element }) => {
  const location = useLocation();

  console.log("Protected Route", localStorage.getItem("isLoggedIn"));

  const existingLoginStatus = localStorage.getItem("isLoggedIn");
  const loginStatus = useSelector((state) => state.reducer2.isLoggedIn);
  const dispatch = useDispatch();
  console.log("existingLoginStatus", existingLoginStatus);
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
