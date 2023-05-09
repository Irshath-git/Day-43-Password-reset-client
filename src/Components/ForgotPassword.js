import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://password-reset-new-l7ss.onrender.com/api/password-reset-link",
        {
          email,
        }
      );
      setMessage(response.data.message);
      window.location.href = "/";
      alert("Email Sent to Your Registered Email");
      setEmail("");
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <>
      <div className="w-3/4 justify-center mx-auto ">
        <div class="container mx-auto">
          <div class="flex justify-center px-6 my-12">
            <div class="w-full xl:w-3/4 lg:w-11/12 flex shadow-2xl">
              <div class="w-full h-full  hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                <img
                  src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  className="w-full h-auto"
                />
              </div>
              <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                <div class="px-8 mb-4 text-center">
                  <h3 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                  <p class="mb-4 text-sm text-gray-700">
                    We get it, stuff happens. Just enter your email address
                    below and we'll send you a link to reset your password!
                  </p>
                </div>
                <form
                  class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                  onSubmit={handleForgot}
                >
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full my-2 h-8 rounded-lg border border-gray-300 hover:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type={"email"}
                      placeholder="Enter Email"
                      required
                    />
                  </div>
                  <div class="mb-6 text-center">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                      type="submit"
                      // to={"/changepassword"}
                    >
                      Send Verification Mail
                    </button>
                  </div>
                  <hr class="mb-6 border-t" />
                  <div class="text-center">
                    <Link
                      class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      to={"/register"}
                    >
                      Create an Account!
                    </Link>
                  </div>
                  <div class="text-center">
                    <Link
                      class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      to={"/"}
                    >
                      Already have an account? Login!
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
