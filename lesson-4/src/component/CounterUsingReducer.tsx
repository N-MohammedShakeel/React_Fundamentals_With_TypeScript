import React, { useReducer, useState } from "react";
import { initialValue, reducer } from "../context/counterReducer";

const CounterUsingReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  const handleIncrement = () => {
    if (isNaN(Number(data))) {
      setError("Please enter a valid number");
    } else {
      dispatch({ type: "IncrementByValue", payload: Number(data) });
      setData("");
      setError(null);
    }
  };

  const handleDecrement = () => {
    if (isNaN(Number(data))) {
      setError("Please enter a valid number");
    } else {
      dispatch({ type: "DecrementByValue", payload: Number(data) });
      setData("");
      setError(null);
    }
  };

  return (
    <div>
      <h1>CounterUsingReducer</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={handleIncrement}>Add</button>
        <button onClick={handleDecrement}>Sub</button>
      </form>
    </div>
  );
};

export default CounterUsingReducer;
