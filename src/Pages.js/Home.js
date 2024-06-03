import { useState } from "react";
import NavBar from "../Components/NavBar";
import { deposit } from "../api/Money";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { withdraw } from "../api/Money";
import { balance } from "../api/Money";
import { me } from "../api/auth";

const Home = () => {
  const [amount, setAmount] = useState(0);
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const { data, refetch } = useQuery({
    queryKey: ["me"],
    queryFn: () => me(),
  });
  const { mutate: depositMutate } = useMutation({
    mutationKey: ["deposit"],
    mutationFn: () => deposit(amount),
    onSuccess: () => {
      // queryclint
      refetch(); //علشان يسوي رفرش لما تنجح العملية
    },
  });

  const { mutate: withdrawMutate } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => withdraw(amount),
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <div className="w-full h-full">
      <div>
        <NavBar />
      </div>

      <div className="  bg-[#F7F8F1] w-full h-full flex justify-center items-center gap-10 flex-col overflow-y-auto ">
        <div className="border-solid bg-gray-200 w-[370px] h-[300px] flex justify-center items-end shadow-2xl rounded-lg">
          <div> Balance : {data?.balance} </div>
        </div>
        <div className="border-solid bg-gray-200 w-[370px] h-[300px] flex justify-center items-center py-5 shadow-2xl rounded-lg gap-5 flex-col">
          <div className="gap-2">
            Amount:
            <div className="gap-2">
              <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input
                  onChange={handleChange}
                  type="text"
                  id="amount"
                  name="amount"
                  className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="amount"
                />
              </label>
            </div>
            <div className="flex justify-center items-center gap-3 py-5">
              <div>
                <button
                  onClick={depositMutate}
                  className="px-4 py-2 text-sm font-medium text-black hover:bg-green-500 focus:relative rounded-lg border-solid  border-gray-400 bg-gray-300 h-8 flex justify-center items-center"
                >
                  Deposit
                </button>
              </div>
              <div>
                <button
                  onClick={withdrawMutate}
                  className="px-4 py-2 text-sm font-medium text-black hover:bg-red-500 focus:relative rounded-lg border-solid  border-gray-400 bg-gray-300 h-8 flex justify-center items-center"
                >
                  withdraw
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 divide-y h-13"> fg</div>
      </div>
    </div>
  );
};

export default Home;
