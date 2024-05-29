import Input from "../Components/Input";
import Welcoming from "../Components/Welcoming";
import { useState, React } from "react";

const LogIn = () => {
  return (
    <div className="h-full flex">
      <div className=" w-full h-full bg-slate-500 items-center justify-center flex">
        <div className="w-[455px] h-[350px] bg-slate-100"></div>
      </div>
      <div className="w-full h-full items-center justify-center flex flex-col">
        <div className="w-full items-center  flex justify-center h-[50%] ">
          <Welcoming />
        </div>
        <div className="w-full items-center flex justify-center h-full ">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
