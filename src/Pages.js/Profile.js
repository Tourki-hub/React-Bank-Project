import React from "react";
import UserContext from "../Context.js/context";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { me } from "../api/auth";
import NavBar from "../Components/NavBar";
const Profile = () => {
  const [user, setUser] = useContext(UserContext);

  const { data } = useQuery({
    queryKey: ["userProfil"],
    queryFn: me,
  });

  console.log(data);

  return (
    <div className=" bg-[#F7F8F1] w-full h-full  flex-col">
      <div>
        <NavBar />
      </div>
      <div className=" bg-[#F7F8F1] flex items-center justify-center w-full h-full">
        <div className="border-solid bg-[#e0e6b8] w-[370px] h-[500px] flex justify-center items-center shadow-2xl rounded-lg flex-col gap-10">
          <figure className="px-10 pt-10">
            <img
              src={
                "https://react-bank-project.eapi.joincoded.com/" + data?.image
              }
              alt="user"
              className="rounded-xl"
            />
          </figure>
          <div className=" flex flex-col justify-center items-center text-center">
            <p className="font-semibold">{data?.username}</p>

            <div className="text-[20px]"> Balance is: {data?.balance}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
