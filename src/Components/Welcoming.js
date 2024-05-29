import React from "react";

const Welcoming = () => {
  return (
    <div className="flex justify-center w-full flex-col justify-items-end h-full items-center">
      <div className="py-4 text-green-500">Log in to your account</div>
      <div className="py-4">
        {" "}
        If you don't have account please, Register <a href="">here</a>
      </div>
    </div>
  );
};

export default Welcoming;
