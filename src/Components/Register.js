import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/87718-waiting-register.json";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://zen-portal-clone.onrender.com/api/signup",
        {
          name,
          email,
          password,
        }
      );
      setMessage(response.data.message);
      window.location.href = "/";
      alert("User created successfully");
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <>
      <div className="container flex justify-center content-center">
        <div className="w-2/3 h-full mx-auto flex gap-4 justify-center shadow-2xl mt-10 ">
          <div className="w-1/2  flex-row hidden md:block lg:block p-5">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          <div className="w-1/2 flex flex-col m-5">
            <form onSubmit={handleSignUp}>
              <label for="Name">Name</label>
              <br />
              <input
                className="w-full my-2 h-8 rounded-lg border border-gray-300 hover:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label for="Email">Email</label>
              <br />
              <input
                className="w-full my-2 h-8 rounded-lg border border-gray-300 hover:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type={"email"}
              />
              <br />
              <label for="password">Password</label>
              <br />
              <input
                className="w-full my-2 h-8 rounded-lg border border-gray-300 hover:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={"password"}
              />
              <br />
              <input
                type="submit"
                value="Register"
                className="mt-2 cursor-pointer inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              />
              {message && (
                <p className="text-red-600 font-bold">
                  {"Invalid Credantials"}
                </p>
              )}
              {localStorage.getItem("token") && <div></div>}
              <div className="link my-4">
                <Link to="/">
                  Already Register ? <b>Click Here to Login</b>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
