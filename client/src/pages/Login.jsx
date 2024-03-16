import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async e => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/user/login", { email, password });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen py-40 shadow-xl shadow-gray-400 rounded-xl">
      <div className="container mx-auto">
        <div className="flex flex-col w-10/12 mx-auto overflow-hidden shadow-lg lg:flex-row lg:w-8/12 rounded-xl">
          <div className="flex flex-col items-center justify-center w-full px-12 pt-12 bg-center bg-no-repeat bg-cover lg:w-1/2 lg:p-12">
            <h2 className="mb-3 text-3xl text-gray-900">Welcome</h2>
          </div>
          <div className="w-full px-12 py-16 lg:w-1/2">
            <h2 className="mb-4 text-3xl">Sign In</h2>
            <p className="mb-4">Log into your account</p>
            <form onSubmit={loginUser}>
              <div className="mt-5">
                <label className="hidden" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={e => setData({ ...data, email: e.target.value })}
                  placeholder="Email"
                  className="w-full px-2 py-1 border border-gray-400"
                />
              </div>
              <div className="mt-5">
                <label className="hidden" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={data.password}
                  onChange={e => setData({ ...data, password: e.target.value })}
                  placeholder="Password"
                  className="w-full px-2 py-1 border border-gray-400"
                />
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full p-4 mt-4 text-gray-100 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
