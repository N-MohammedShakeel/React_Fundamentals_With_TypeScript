import React from "react";
import User from "./components/User";
import Button from "./components/Button";
import SimpleUserInfo from "./components/SimpleUserInfo";
import { Info, AdminInfoList } from "./type";
import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";

const App = () => {
  const user: Info = {
    name: "John Doe",
    age: 30,
    gmail: "john@example.com",
  };

  const admin: AdminInfoList = {
    name: "Jane Smith",
    age: 25,
    gmail: "jane@example.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <User name="ms" age={20} />
      <Button isActive={false} />
      <SimpleUserInfo name="ms" age={20} gmail="ms@gmail.com" />
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  );
};

export default App;
