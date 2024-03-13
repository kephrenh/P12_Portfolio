import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
    </>
  );
};

export default Layout;
