import React from "react";
import { AdminInfoList } from "../type";

type AdminInfoProps = {
  admin: AdminInfoList;
};

const AdminInfo: React.FC<AdminInfoProps> = ({ admin }) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>Name: {admin.name}</p>
      <p>AGE: {admin.age}</p>
      <p>Email: {admin.gmail}</p>
      <p>Role: {admin.role}</p>
      <p>Last Login: {admin.lastLogin.toLocaleString()}</p>
    </div>
  );
};

export default AdminInfo;
