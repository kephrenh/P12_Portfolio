import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserContextProvider } from "../context/userContext.jsx";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import "./index.css";
import CreatePage from "./pages/CreatePage.jsx";
import EditPage from "./pages/EditPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import Project from "./pages/Project.jsx";
import Register from "./pages/Register.jsx";
import Repository from "./pages/Repository.jsx";
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

axios.defaults.baseURL = VITE_BACKEND_URL;
axios.defaults.withCredentials = false;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/project/:id",
        element: <Project />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/repository",
        element: <Repository />,
      },
      {
        path: "/create",
        element: <CreatePage />,
      },
      {
        path: "/edit/:id",
        element: <EditPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
