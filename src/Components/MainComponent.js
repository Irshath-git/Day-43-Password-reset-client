import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MainComponent() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("https://password-reset-p5hw.onrender.com/api/logout");
      navigate("/");
      alert("Session Logging Out");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {" "}
      <button
        onClick={handleLogout}
        className="float-right my-3 mx-3 border-2 border-red-400 p-1 rounded-lg hover:text-white hover:bg-red-400 text-sm font-normal"
      >
        Logout
      </button>
      <div class="min-h-screen bg-gray-100 flex flex-col justify-center">
        <div class="relative m-3 flex flex-wrap mx-auto justify-center">
          <div class="min-w-[340px]flex flex-col group">
            <div class="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">
              <img
                src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"
                class="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                alt=""
              />

              <div class="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"></div>
            </div>
            <a
              href="./single_post.html"
              class=" block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1"
            >
              Wild West Hoodie
            </a>

            <p class="mb-4 font-light  text-sm md:text-sm text-center text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>

            <div class="flex justify-center gap-x-3">
              <a
                href="/track_order.html"
                class=" px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold"
              >
                Add
              </a>
              <a
                href="/track_order.html"
                class="px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-white border-black text-black hover:text-white hover:bg-black font-bold"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
