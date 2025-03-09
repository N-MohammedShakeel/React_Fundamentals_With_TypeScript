import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const CounterUsingContext = () => {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    <div>
      <h1>CounterUsingContext</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterUsingContext;
