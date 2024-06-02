import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import UserContext from "../Context.js/context";
import { useContext } from "react";
import { logout } from "../api/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [user, setUser] = useContext(UserContext);
  const nav = useNavigate();
  const handelLogOut = () => {
    setUser(false);
    logout();
    nav("/");
  };

  return (
    // NavBar components for top part of home, transaction, profile ,user
    <div className="w-full h-full flex justify-center items-center bg-[#F7F8F1]">
      <div className="h-full">
        <Logo />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className=" flex w-53 h-12 items-center justify-evenly">
          <div className=" p-3">
            <button className="px-4 py-2 text-sm font-medium text-black hover:bg-green-700  focus:relative rounded-lg">
              <Link to="/Home"> Home</Link>
            </button>
          </div>
          <div className="p-3">
            <button className="px-4 py-2 text-sm font-medium text-black hover:bg-green-700  focus:relative rounded-lg">
              <Link to="/transaction"> transaction </Link>
            </button>
          </div>
          <div className="p-3">
            <button className="px-4 py-2 text-sm font-medium text-black hover:bg-green-700 focus:relative rounded-lg">
              {" "}
              users{" "}
            </button>
          </div>
          <div className="p-3">
            <button className="px-4 py-2 text-sm font-medium text-black hover:bg-green-700 focus:relative rounded-lg">
              profile
            </button>
          </div>
        </div>
      </div>
      <div className="w-[25%] h-9 justify-center items-center">
        <button
          onClick={handelLogOut}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-red-500 focus:relative rounded-lg"
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default NavBar;
