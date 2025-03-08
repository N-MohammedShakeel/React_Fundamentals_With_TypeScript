import React from "react";
import { Info } from "../type";

type UserInfoProps = {
  user: Info;
};

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>age: {user.age}</p>
      <p>Email: {user.gmail}</p>
    </div>
  );
};

export default UserInfo;
