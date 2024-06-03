import React from "react";
import { Button, Input } from "@nextui-org/react";

function Login() {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 min-h-screen max-md:px-5">
      <img
        loading="lazy"
        src="/src/assets/image/loginBG.png"
        alt=""
        className="object-cover absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }} // Set z-index to push the image to the background
      />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-3xl bg-pink-100 bg-opacity-80 p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
          <img
            src="/src/assets/image/logo.png"
            alt="Ga Hiphop Logo"
            className="w-40 h-40 mb-10"
          />
          <h1 className="text-5xl font-poiret-one font-medium">Ga Hiphop</h1>
        </div>
        <div className="h-1 w-full md:h-full md:w-1 bg-black my-4 md:my-0"></div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-plus-jakarta font-semibold mb-4">
            Login Here
          </h2>
          <input
            type="text"
            placeholder="Username"
            className="mb-5 p-4 pl-7 border rounded-full w-full max-w-sm shadow"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-5 p-4 pl-7 border rounded-full w-full max-w-sm shadow"
          />
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-8 rounded-full shadow transition duration-300 ease-in-out transform hover:scale-105">
            Login
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Login;
