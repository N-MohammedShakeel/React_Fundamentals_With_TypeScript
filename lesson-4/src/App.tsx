import React from "react";
import CounterUsingContext from "./component/CounterUsingContext";
import CounterWithReducer from "./component/CounterWithReducer";
import CounterUsingReducer from "./component/CounterUsingReducer";

const App = () => {
  return (
    <div>
      <CounterUsingContext />
      <CounterWithReducer />
      <CounterUsingReducer />
    </div>
  );
};

export default App;
