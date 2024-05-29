import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../Context.js/context";
import LogIn from "../Pages.js/LogIn";
import { login } from "../api/auth";

const Input = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };
  return (
    <div className="w-[400px] ">
      <div className="py-3">
        <div className="py-3">username</div>
        <input
          type="text"
          placeholder="username"
          className="rounded-md px-1 w-full  border-solid border-2 border-black opacity-50"
        />
      </div>

      <div className="py-3">
        <div className="py-3 flex gap-40">
          <div>Password forget</div>
        </div>
        <input
          type="text"
          placeholder="Password"
          className="rounded-md px-1 w-full border-solid border-2 border-black opacity-50"
        />
        <div>Forget Password?</div>
      </div>

      <div className=" border-solid border-2 border-gray-400 w-20 rounded-md flex items-center justify-center">
        <button
          className=" bg-green-600 w-full border-none flex justify-center items-center"
          onClick={handleSubmit}
        >
          LogIn
        </button>
      </div>
    </div>
  );
};

export default Input;
