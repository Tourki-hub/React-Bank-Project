import Input from "../Components/Input";
import Welcoming from "../Components/Welcoming";
import { useState, React, useContext } from "react";
import bankLogo from "../ecoBankImage.webp";
import { Link, useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
import { createContext } from "react";
import UserContext from "../Context.js/context";
import { register } from "../api/auth";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const nav = useNavigate();
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  //console.log(userInfo);

  const { mutate } = useMutation({
    mutationKey: [`register`],
    mutationFn: () => {
      register(userInfo);
    },
    onSuccess: () => {
      setUser(true);
      nav("/login");
    },
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
    mutate();
  };

  return (
    <div className="h-full flex ">
      <div>
        <div>
          {" "}
          <img src={bankLogo} className="w-full h-full" />
        </div>
      </div>
      <div className=" bg-[#F7F8F1] w-full h-full items-center justify-center flex flex-col">
        <div className="w-full items-center  flex justify-center h-[50%] ">
          <div className="flex justify-center w-full flex-col justify-items-end h-full items-center">
            <div className="py-4 text-green-500 font-sans text-3xl">
              Register your account
            </div>
            <div className="py-4">
              {" "}
              If you do have an account please,
              <Link className="text-blue-600 underline" to="/login">
                Login here
              </Link>
            </div>
          </div>
        </div>

        <div className=" bg-[#F7F8F1] w-full items-center flex justify-center h-full ">
          <div className="w-[400px]  ">
            <div className="py-3">
              <div className="py-3">username</div>
              <input
                name="username"
                type="text"
                placeholder="username"
                className="rounded-md px-1 w-full  border-solid border-2 border-black opacity-50"
                onChange={handleChange}
              />
            </div>

            <div className="py-3">
              <div className="py-3 flex gap-40">
                <div>Password</div>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="rounded-md px-1 w-full border-solid border-2 border-black opacity-50"
                onChange={handleChange}
              />

              <div>upload a profile picture</div>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="file-input w-full max-w-xs"
              />
            </div>

            <div className=" border-none  rounded-md flex items-center justify-center">
              <button
                className=" bg-green-600  rounded-md w-full h-full flex justify-center items-center border-none"
                //onClick={mutate}
                onClick={handleFormSubmit}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
