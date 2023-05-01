import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import animationData from "../assets/111594-login.json";
import Lottie from "react-lottie";

function Login() {
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
      const response = await axios.post("", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setMessage("");
      window.location.href = "/portal/class";
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    // <div className="max-w-md mx-auto bg-white  shadow-md overflow-hidden md:max-w-full">
    //   <div className="flex flex-col w-full h-auto rounded-xl bg-white">
    //     <div className="flex flex-col w-40 h-40 bg-green-500"></div>
    //     <div className=""></div>
    //   </div>
    // </div>
    <>
      <div className="flex  justify-center">
        <div className="container mt-10">
          <div className="w-3/4 h-full mx-auto flex gap-4 justify-center shadow-2xl p-10">
            <div className="w-1/2  flex-row hidden md:block lg:block ">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className="w-1/2 flex flex-col m-8">
              <h1 className="text-center text-2xl p-2 font-bold">
                Welcome Back
              </h1>
              <form className="form-control" onSubmit={handleLogin}>
                {message && (
                  <p className="text-red-600 ">
                    {"Invalid username or password"}
                  </p>
                )}
                <label for="Email">Email</label>
                <br />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full my-2 h-8 rounded-lg border border-gray-300 hover:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <br />
                <label for="password">Password</label>
                <br />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full my-2 h-8 rounded-lg border border-gray-300 hover:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <br />
                <div className="hover:text-black text-center mt-3">
                  <a class="px-5 py-2.5 relative rounded group text-white font-medium inline-block">
                    <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <span class="relative">
                      <input
                        type={"submit"}
                        className=" cursor-pointer inline-flex items-center justify-center p-0 text-base font-medium leading-6 text-white whitespace-no-wrap   rounded-md shadow-sm hover:text-white"
                      />
                    </span>
                  </a>
                </div>

                <div className="link my-4 cursor-pointer text-center">
                  <Link to="/register">
                    Don't have an account? <b>Click Here</b>
                  </Link>
                  <br />
                  <Link to="/forgotpassword">
                    Forgot Password? <b>Click Here</b>
                  </Link>
                </div>
              </form>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
