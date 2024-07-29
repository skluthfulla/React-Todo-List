import { useRef } from "react";

// Router
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const todoRef = useRef();
  const navigate = useNavigate();

  const addTodo = async () => {
    const todoContent = todoRef.current.value.trim();

    if (!todoContent) return;

    const newTodo = {
      id: String(Math.random()),
      content: todoContent,
      date: new Date(),
    };

    todoRef.current.value = "";

    await fetch("http://localhost:3000/todos", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(newTodo),
    });
    
    navigate("/");
  };

  return (
    <div className="p-8">
      <div className="max-w-md w-full mx-auto">
        <div>
          <label
            htmlFor="todo"
            className="text-gray-900 leading-6 font-medium text-sm block"
          >
            Add your todo
          </label>
          <div className="mt-2">
            <textarea
              ref={todoRef}
              id="todo"
              rows="4"
              className="leading-6 text-sm  block w-full rounded-md border-1 border-gray-300 text-gray-900"
            ></textarea>
          </div>
          <button
            onClick={addTodo}
            className="shadow-sm text-white font-semibold text-sm py-2 px-3 bg-indigo-500 rounded-md inline-flex items-center relative gap-x-1.5 mt-2"
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
