import React from "react";
import { getAllUsers } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import NavBar from "../Components/NavBar";

const Users = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Occurred: {error.message}</div>;
  return (
    <div className="bg-[#F7F8F1] min-h-screen h-screen flex items-center justify-center flex-col">
      <div className="w-full">
        <NavBar />
      </div>

      <div className="max-w-[90%] overflow-scroll w-full px-6 py-8 bg-[#edf7bd] rounded-md shadow-md max-h-[90%]">
        <h2 className="text-3xl text-black font-semibold mb-6 ">Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {users?.map((user) => (
            <div
              key={user._id}
              className="bg-[#F7F8F1] p-6 rounded-md flex flex-col items-center justify-center shadow-lg"
            >
              <img
                src={
                  "https://react-bank-project.eapi.joincoded.com/" + user?.image
                }
                alt="User"
                className="w-24 h-24 rounded-full mb-4"
              />
              <div className="text-center">
                <h3 className="text-lg text-black font-semibold mb-2">
                  {user.username}
                </h3>
                <p className="text-gray-700">{user.balance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
