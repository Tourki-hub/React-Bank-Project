// local storage missing the set token function

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export { getToken };
