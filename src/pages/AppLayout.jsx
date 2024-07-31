import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import TextField from "@mui/material/TextField";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
