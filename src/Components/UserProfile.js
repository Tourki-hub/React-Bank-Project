import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div>
      <div>{user.username}</div>
      <div>Balance: ${user.Balance}</div>
    </div>
  );
};

export default UserProfile;
