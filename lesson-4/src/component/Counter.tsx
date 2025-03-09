import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Counter = () => {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
