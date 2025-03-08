import React from "react";

type User = {
  name: string;
  age: number;
};

const User = ({ name, age }: User) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
};

export default User;
