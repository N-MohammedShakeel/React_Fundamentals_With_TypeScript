import { useState } from "react";
import UserProfile from "./component/UserProfile";
import TodoList from "./component/TodoList";

const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <UserProfile />
      <TodoList />
    </div>
  );
};

export default App;
