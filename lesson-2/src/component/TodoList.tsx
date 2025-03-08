import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState("");

  const addTodo = (task: string) => {
    if (!task.trim()) return;

    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodo("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(todo);
        }}
      >
        <input
          name="todo"
          type="text"
          value={todo}
          placeholder="Enter Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? "(Completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
