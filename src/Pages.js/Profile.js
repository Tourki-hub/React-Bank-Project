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
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={
                "https://react-bank-project.eapi.joincoded.com/" + data?.image
              }
              alt="user"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title"></h2>
            <p>{data?.username}</p>
            <div className="card-actions"></div>
            <div>{data?.balance}</div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Profile;
