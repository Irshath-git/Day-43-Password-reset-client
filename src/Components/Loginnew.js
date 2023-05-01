import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import animationData from "../assets/111594-login.json";
import Lottie from "react-lottie";

function Loginnew() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://password-reset-p5hw.onrender.com/api/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      setMessage("");
      window.location.href = "/";
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <>
      <div class="py-6 my-10">
        <div class="flex w-3/4 bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div class="hidden lg:block lg:w-1/2 bg-cover">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          <div class="w-full p-8 lg:w-1/2">
            <h2 class="text-2xl font-semibold text-gray-700 text-center">
              Password-Reset
            </h2>
            <p class="text-xl text-gray-600 text-center">Welcome back!</p>
            <form className="form-control" onSubmit={handleLogin}>
              {message && (
                <p className="text-red-600 ">
                  {"Invalid username or password"}
                </p>
              )}
              <div class="mt-4 flex items-center justify-between">
                <span class="border-b w-1/5 lg:w-1/4"></span>
                <p class="text-xs text-center text-gray-500 uppercase">
                  login with email
                </p>
                <span class="border-b w-1/5 lg:w-1/4"></span>
              </div>
              <div class="mt-4">
                <div className="flex justify-between">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Email Address
                  </label>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full my-2 h-8 rounded-lg border border-gray-300 hover:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div class="mt-4">
                <div class="flex justify-between">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <Link
                    to={"/forgotpassword"}
                    class="text-xs text-gray-500 hover:text-blue-600"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full my-2 h-8 rounded-lg border border-gray-300 hover:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div class="mt-8">
                <button class="bg-gray-700 text-white rounded-xl font-bold py-2 px-4 w-full  hover:bg-blue-600">
                  Login
                </button>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="border-b w-1/5 md:w-1/4"></span>
                <Link
                  to={"/register"}
                  class="text-xs text-gray-800 uppercase hover:text-blue-700"
                >
                  or sign up
                </Link>
                <span class="border-b w-1/5 md:w-1/4"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginnew;
