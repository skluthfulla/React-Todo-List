import { useEffect, useState } from "react";

// Components
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });

    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <ul className="mt-12 max-w-4xl mx-auto">
        {todos.map((todo) => {
          return <TodoItem todo={todo} deleteTodo={deleteTodo} />;
        })}
      </ul>
    </div>
  );
};

export default Todos;
