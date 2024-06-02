import instance from ".";

const getAllTransactions = async () => {
  const res = await instance.get("/mini-project/api/transactions/my");
  return res.data;
};

export { getAllTransactions };
