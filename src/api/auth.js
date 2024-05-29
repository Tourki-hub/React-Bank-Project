import instance from ".";

const login = async (userInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  return data;
};
export { login };
