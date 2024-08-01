import "./App.css";

import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import AppLayout from "./pages/AppLayout";
import Login from "./components/Login";
import AddTask from "./components/AddTask";
import ViewTask from "./components/ViewTask";

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
      {
        path: "/addtask",
        element: <AddTask />,
      },
      {
        path: "/viewtask",
        element: <ViewTask />,
      },
    ],
  },
]);
