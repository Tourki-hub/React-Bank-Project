import React from "react";
import { Link, Router } from "react-router-dom";

const Welcoming = () => {
  return (
    <div className="flex justify-center w-full flex-col justify-items-end h-full items-center">
      <div className="py-4 text-green-500 font-sans text-3xl">
        Log in to your account
      </div>
      <div className="py-4">
        {" "}
        If you don't have account please, Register{" "}
        <Link to="/register" className="text-blue-600 underline">
          here
        </Link>
      </div>
    </div>
  );
};

export default Welcoming;
