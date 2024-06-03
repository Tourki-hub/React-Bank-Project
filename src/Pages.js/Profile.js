import React from "react";
import UserContext from "../Context.js/context";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { me } from "../api/auth";
const Profile = () => {
  const [user, setUser] = useContext(UserContext);

  const { data } = useQuery({
    queryKey: ["userProfil"],
    queryFn: me,
  });

  console.log(data);

 
  return (
    <div>
      <img
        src={data?.image}
        alt="ball"
        className="w-[300px] h-[300px] rounded-full mb-4"
      />
      <div>{data?.username}</div>

      <div>{data?.balance}</div>
    </div>
  );
};

export default Profile;
