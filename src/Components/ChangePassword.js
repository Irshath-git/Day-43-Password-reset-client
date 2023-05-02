import React, { useState } from "react";
import axios from "axios";

function ChangePassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (e, userId, token) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://localhost:4000/api/password-reset/:${userId}/:${token}`,
        {
          password,
        }
      );
      setMessage(response.data.message);
      window.location.href = "/";
      alert("Password Changed Successfully");
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <>
      <section class="grid h-screen place-content-center bg-slate-900 text-slate-300">
        <div class="mb-10 text-center text-indigo-400">
          <h1 class="text-3xl font-bold tracking-widest">Reset Password</h1>
          <p>
            <span class="font-bold">Password</span> and{" "}
            <span class="font-bold">Confirm</span> validation.
          </p>
        </div>
        <form onSubmit={handleForgotPassword}>
          <div class="flex flex-col items-center justify-center space-y-6">
            <input
              type="password"
              id="password"
              name="password"
              // value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              class="w-80 appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500"
            />
            <div>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                placeholder="Confirm Password"
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="w-80 appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500"
              />
              <p
                id="validation"
                class="text-center text-orange-500 italic text-sm"
              ></p>
            </div>
            <button
              id="showPw"
              class="rounded-full bg-indigo-500 p-2 px-4 text-white hover:bg-orange-500"
              type="submit"
            >
              <span id="showHide">Change Password</span>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ChangePassword;
