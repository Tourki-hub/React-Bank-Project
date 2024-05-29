import Input from "../Components/Input";
import Welcoming from "../Components/Welcoming";
import { useState, React } from "react";
import bankLogo from "../ecoBankImage.webp";

const LogIn = () => {
  return (
    <div className="h-full flex">
      <div>
        <div>
          {" "}
          <img src={bankLogo} className="w-full h-full" />
        </div>
      </div>
      <div className=" bg-[#F7F8F1] w-full h-full items-center justify-center flex flex-col">
        <div className="w-full items-center  flex justify-center h-[50%] ">
          <Welcoming />
        </div>
        <div className=" bg-[#F7F8F1] w-full items-center flex justify-center h-full">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
