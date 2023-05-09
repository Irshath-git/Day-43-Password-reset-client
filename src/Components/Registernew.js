import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/87718-waiting-register.json";
import { Link } from "react-router-dom";
import axios from "axios";

function Registernew() {
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
        "https://password-reset-new-l7ss.onrender.com/api/register",
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
      <div class="w-2/3 h-auto mx-auto flex min-h-screen bg-white">
        <div class="w-1/2 bg-cover md:block hidden mt-20 overflow-hidden">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>

        <div class="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          <div class="text-left p-0 font-sans">
            <h1 class=" text-gray-800 text-3xl font-medium">
              Create an account for free
            </h1>
            <h3 class="p-1 text-gray-700">Free forever. No payment needed.</h3>
          </div>
          <form onSubmit={handleSignUp}>
            {message && (
              <p className="text-red-600 font-bold">{"Invalid Credantials"}</p>
            )}
            <div class="mt-5">
              <input
                className="w-full my-2 h-8 rounded-lg border border-gray-300 hover:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter User Name"
                required
              />
            </div>
            <div class="mt-5">
              <input
                className="w-full my-2 h-8 rounded-lg border border-gray-300 hover:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type={"email"}
                placeholder="Enter Email"
                required
              />
            </div>
            <div class="mt-5">
              <input
                className="w-full my-2 h-8 rounded-lg border border-gray-300 hover:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={"password"}
                placeholder="Enter Password"
                required
              />
            </div>

            <div class="mt-6 block p-5 text-sm md:font-sans  text-gray-800">
              <input type="checkbox" class="inline-block border-0  " />
              <span display="inline" class="">
                By creating an account you are agreeing to our
                <a class="" href="/s/terms" target="_blank" data-test="Link">
                  <span class="underline ">Terms and Conditions</span>{" "}
                </a>{" "}
                and
                <a class="" href="/s/privacy" target="_blank" data-test="Link">
                  <span class="underline">Privacy Policy</span>{" "}
                </a>
              </span>
            </div>

            <div class="mt-10">
              <input
                type="submit"
                value="Sign up"
                class="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600 cursor-pointer"
              />
            </div>
          </form>
          <Link class="" to="/" data-test="Link">
            <span class="block  p-5 text-center text-gray-800  text-md ">
              Already have an account?
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Registernew;
