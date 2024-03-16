import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4 text-indigo-600">
      <h1 className="text-9xl">404</h1>
      <p className="text-5xl">Page not found</p>
      <Link className="underline" to="/">
        Home
      </Link>
    </div>
  );
};
export default ErrorPage;
