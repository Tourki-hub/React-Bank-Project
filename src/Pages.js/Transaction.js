import React from "react";
import NavBar from "../Components/NavBar";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllTransactions } from "../api/Money";

const Transaction = () => {
  const { data: transactions } = useQuery({
    queryKey: ["Transactions"],
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
            type="radio"
            name="filter"
            defaultChecked
            className="checkbox checkbox-xs"
          />
          All
          <input type="radio" name="filter" className="checkbox checkbox-xs" />
          Deposit
          <input type="radio" name="filter" className="checkbox checkbox-xs" />
          Withdraw
          <input
            type="checkbox"
            name="filter"
            className="checkbox checkbox-xs"
          />
          Transfare
        </div>
      </div>
      <div className="flex justify-center items-center h-full bg-[#F7F8F1] ">
        <div className="  border-solid border-2 border-black flex justify-center items-center w-full h-full overflow-scroll">
          <div className="w-full flex flex-col items-center justify-center ">
            {transactions?.map((transact) => {
              return (
                <div
                  className="flex justify-center items-center py-6 px-5"
                  key={transact._id}
                >
                  <div className="card w-200 bg-base-100 shadow-xl flex ">
                    <tr key={transact._id}>
                      <td className="border px-5 py-3">{transact.type}</td>
                      <td className="border px-4 py-2">{transact.amount}</td>
                      <td className="border px-4 py-2">{transact.createdAt}</td>
                      <td className="border px-4 py-2">{transact.updatedAt}</td>
                    </tr>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
