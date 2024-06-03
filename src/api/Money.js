import instance from ".";

const getAllTransactions = async () => {
  const res = await instance.get("/mini-project/api/transactions/my");
  return res.data;
};
const deposit = async (amount) => {
  const res = await instance.put("/mini-project/api/transactions/deposit", {
    amount: amount,
  });
  return res.data;
};

const withdraw = async (amount) => {
  const res = await instance.put("/mini-project/api/transactions/withdraw", {
    amount: amount,
  });
  return res.data;
};

export { getAllTransactions, deposit, withdraw };
