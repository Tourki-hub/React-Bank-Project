import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllTransactions } from "../api/Money";
import FilterOptions from "../Components/FilterOptions";

const Transaction = () => {
  const [filteredTransactions, setfilteredTransactions] = useState([]);
  const handleFilterChange = (type) => {
    const filtered = transactions?.filter((transact) =>
      transact?.type?.includes(type)
    );
    setfilteredTransactions(filtered);
  };
  const { data: transactions } = useQuery({
    queryKey: ["Transactions"],
    queryFn: getAllTransactions,
  });
  useEffect(() => {
    setfilteredTransactions(transactions);
  }, [transactions]);

  const [query, setquery] = useState("");
  const handleChange = (e) => {
    setquery(e.target.value);
  };

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
          onChange={handleChange}
        />
        <div className=" w-full  flex justify-center items-center">
          {/*<input
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
          <input type="radio" name="filter" className="checkbox checkbox-xs" />
          Transfare*/}
          <FilterOptions onChange={handleFilterChange} />
        </div>
      </div>
      <div className="h-full bg-[#F7F8F1] ">
        <div className="  border-solid border-2 border-black flex justify-center items-center w-full min-h-full">
          <div className="w-full flex flex-col items-center justify-center ">
            {filteredTransactions
              ?.filter((tran) => {
                if (tran?.amount?.toString().includes(query)) {
                  return true;
                } else {
                  return false;
                }
              })
              .map((transact) => {
                return (
                  <div
                    className="flex justify-center items-center py-1 px-5"
                    key={transact._id}
                  >
                    <div className="card w-200 bg-base-100 shadow-xl flex ">
                      <tr key={transact._id}>
                        <td className="border px-5 py-3">{transact.type}</td>
                        <td className="border px-4 py-2">{transact.amount}</td>
                        <td className="border px-4 py-2">
                          {transact.createdAt}
                        </td>
                        <td className="border px-4 py-2">
                          {transact.updatedAt}
                        </td>
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
