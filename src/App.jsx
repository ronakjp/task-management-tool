import "./App.css";

import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import AppLayout from "./pages/AppLayout";
import Login, { handleLogin } from "./components/Login";
import AddTask, { handleOnAddTask } from "./components/AddTask";
import ViewTask, { handleEditedData } from "./components/ViewTask";
import ProtectedRoute from "./routes/ProtectedRoute";
export const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <ProtectedRoute element={<Home />} />,
      },
      {
        path: "/login",
        element: <Login />,
        action: handleLogin,
      },
      {
        path: "/addtask",
        element: <ProtectedRoute element={<AddTask />} />,

        action: handleOnAddTask,
      },
      {
        path: "/viewtask",
        element: <ProtectedRoute element={<ViewTask />} />,
        action: handleEditedData,
      },
    ],
  },
]);
