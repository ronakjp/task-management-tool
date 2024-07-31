import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Box from "@mui/material/Box";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Box sx={{ m: 1, border: "1px dashed grey", height: "100vh" }}>
        <Outlet />
      </Box>
    </>
  );
};

export default AppLayout;
