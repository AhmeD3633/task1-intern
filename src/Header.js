import React from "react";
import { PiUserCircleLight } from "react-icons/pi";

const Header = () => {
  return (
    <div className="absolute z-10 top-0 left-0 w-full h-13 flex justify-end items-center space-x-8 px-4 py-3">
      <ul className="flex space-x-4">
        <a href="#">
          <li className="w-28 h-10 flex justify-center items-center rounded-full border border-[#0cffaa] text-white">
            تسجيل الخروج
          </li>
        </a>
        <a href="#">
          <li className="bg-[#0cffaa] w-28 h-10 flex justify-center items-center rounded-full">
            تسجيل الدخول
          </li>
        </a>
      </ul>

      <span className="text-[45px] text-[#0cffaa] cursor-pointer">
        <PiUserCircleLight />
      </span>
    </div>
  );
};

export default Header;
