import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import "./index.css";
import Project from "./pages/Project.jsx";
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

axios.defaults.baseURL = VITE_BACKEND_URL;
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/project/:id",
        element: <Project />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
