import React from "react";
import NavBar from "../Components/NavBar";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllTransactions } from "../api/Money";

const Transaction = () => {
  const { data: transactions } = useQuery({
    queryKey: ["transactions"],
    queryFn: getAllTransactions,
  });

  return (
    <div className=" bg-[#F7F8F1] w-full h-full  flex-col">
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center items-center flex-col gap-7">
        <input
          type="search"
          placeholder="search"
          className="input input-bordered input-sm w-full max-w-md"
        />
        <div className=" w-full gap-4 flex justify-center items-center">
          <div className="font-semibold">Filter:</div>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-xs"
          />
          All
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-xs"
          />
          Deposit
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-xs"
          />
          Withdraw
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-xs"
          />
          Transfare
        </div>
      </div>
      <div className="flex justify-center items-center h-full bg-[#F7F8F1]">
        <div className="  border-solid border-2 border-black flex justify-center items-center w-full h-full">
          <div className="w-full flex flex-col items-center">
            {transactions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
