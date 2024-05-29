import instance from ".";

const login = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  // storeToken(data.token);
  return data;
};
export { login };
