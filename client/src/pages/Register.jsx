import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const registerUser = async e => {
    e.preventDefault();
    const { firstName, lastName, email, password } = data;
    try {
      const { data } = await axios.post("/user/register", {
        firstName,
        lastName,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success(`Welcome ${firstName}! You can login now`);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full h-screen py-40 shadow-xl shadow-gray-400 rounded-xl">
      <div className="container mx-auto">
        <div className="flex flex-col w-10/12 mx-auto overflow-hidden shadow-lg lg:flex-row lg:w-8/12 rounded-xl">
          <div className="flex flex-col items-center justify-center w-full p-12 bg-center bg-no-repeat bg-cover lg:w-1/2">
            <h1 className="mb-3 text-3xl text-gray-900">Welcome</h1>
            <div>
              <p className="text-gray-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam
                varius rutrum purus maecenas ac{" "}
                <a href="#" className="font-semibold text-purple-500">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="w-full px-12 pb-16 lg:w-1/2 lg:py-16">
            <h2 className="mb-4 text-3xl">Register</h2>
            <p className="mb-4">Create your account. It’s free and only take a minute</p>
            <form onSubmit={registerUser}>
              <div className="grid grid-cols-2 gap-5">
                <label className="hidden" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={data.firstName}
                  onChange={e => setData({ ...data, firstName: e.target.value })}
                  className="px-2 py-1 border border-gray-400"
                />
                <label className="hidden" htmlFor="lastName">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={data.lastName}
                  onChange={e => setData({ ...data, lastName: e.target.value })}
                  className="px-2 py-1 border border-gray-400"
                />
              </div>
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
                  type="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={e => setData({ ...data, password: e.target.value })}
                  className="w-full px-2 py-1 border border-gray-400"
                />
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full p-4 mt-4 text-gray-100 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
