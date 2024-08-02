import "./App.css";

import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import AppLayout from "./pages/AppLayout";
import Login from "./components/Login";
import AddTask, { handleOnAddTask } from "./components/AddTask";
import ViewTask from "./components/ViewTask";
import EditTask from "./components/EditTask";

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

        action: handleOnAddTask,
      },
      {
        path: "/viewtask",
        element: <ViewTask />,
      },
    ],
  },
]);
