import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../Context.js/context";
import LogIn from "../Pages.js/LogIn";
import { login } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Input = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const nav = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      nav("/Home");
    },
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
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
          name="username"
          onChange={handleChange}
          placeholder="username"
          className="rounded-md px-1 w-full  border-solid border-2 border-black opacity-50"
        />
      </div>

      <div className="py-3">
        <div className="py-3 flex gap-40">
          <div>Password</div>
        </div>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="Password"
          className="rounded-md px-1 w-full border-solid border-2 border-black opacity-50"
        />
        <div>Forget Password?</div>
      </div>

      <div className=" border-none  rounded-md flex items-center justify-center">
        <button
          className=" bg-green-600  rounded-md w-full h-full flex justify-center items-center border-none"
          onClick={handleSubmit}
        >
          login
        </button>
      </div>
    </div>
  );
};

export default Input;
