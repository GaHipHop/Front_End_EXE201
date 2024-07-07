import { Button } from "@nextui-org/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa token từ localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    
    navigate("/login");
  };

  return (
    <div className="h-screen bg-gradient-to-b from-pink-200 to-purple-200 flex flex-col items-center py-10 px-8">
      <div className="flex flex-col items-center">
        <img
          src="/src/assets/image/logo.png"
          alt="Logo"
          className="w-20 h-20 mb-5"
        />
        <h1 className="text-xl font-semibold text-gray-700 font-poiret-one">
          GaHipHop
        </h1>
      </div>
      <div className="flex flex-col mt-10 space-y-4 w-full">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `py-3 px-6 rounded-xl font-medium font-plus-jakarta w-full text-left transition duration-300 ease-in-out ${
              isActive
                ? "bg-pink-300 text-white"
                : "bg-white text-black hover:bg-pink-300 hover:text-white"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/admin/transaction"
          className={({ isActive }) =>
            `py-3 px-6 rounded-xl font-medium font-plus-jakarta w-full text-left transition duration-300 ease-in-out ${
              isActive
                ? "bg-pink-300 text-white"
                : "bg-white text-black hover:bg-pink-300 hover:text-white"
            }`
          }
        >
          Transaction
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            `py-3 px-6 rounded-xl font-medium font-plus-jakarta w-full text-left transition duration-300 ease-in-out ${
              isActive
                ? "bg-pink-300 text-white"
                : "bg-white text-black hover:bg-pink-300 hover:text-white"
            }`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/admin/categories"
          className={({ isActive }) =>
            `py-3 px-6 rounded-xl font-medium font-plus-jakarta w-full text-left transition duration-300 ease-in-out ${
              isActive
                ? "bg-pink-300 text-white"
                : "bg-white text-black hover:bg-pink-300 hover:text-white"
            }`
          }
        >
          Categories
        </NavLink>
      </div>
      <Button
        className="mt-auto bg-gradient-to-r from-pink-500 to-purple-500 py-3 px-6 rounded-xl text-white font-medium w-full"
        onClick={handleLogout} // Gọi hàm handleLogout khi nhấn nút Log out
      >
        Log out
      </Button>
    </div>
  );
};

export default Sidebar;
