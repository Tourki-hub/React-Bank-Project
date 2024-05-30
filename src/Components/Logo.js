import React from "react";
import bankLoogo from "../logo 1.png";

const Logo = () => {
  return (
    <div className=" bg-[#F7F8F1] w-[100%] h-[60px] p-[20px] flex items-center">
      <div className="w-[90px] flex ">
        <img src={bankLoogo} className="w-full h-full" />
      </div>
    </div>
  );
};

export default Logo;
