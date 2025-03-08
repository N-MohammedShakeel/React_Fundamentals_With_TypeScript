import React from "react";
import { Info } from "../type";

const SimpleUserInfo = ({ name, age, gmail }: Info) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{gmail}</p>
    </div>
  );
};

export default SimpleUserInfo;
