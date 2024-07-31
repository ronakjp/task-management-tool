import "./App.css";

import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import AppLayout from "./pages/AppLayout";
import Login from "./components/Login";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
