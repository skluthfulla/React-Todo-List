import { useEffect, useRef, useState } from "react";

// Router
import { useNavigate, useParams } from "react-router-dom";

const EditTodo = () => {
  const { todoId } = useParams();
  const todoRef = useRef();
  const [todo, setTodo] = useState();
  const navigate = useNavigate();

  const fetchTodo = async () => {
    const response = await fetch(`http://localhost:3000/todos/${todoId}`);
    const data = await response.json();
    setTodo(data);
    todoRef.current.value = data.content;
  };

  const editTodo = async () => {
    const editedTodoContent = todoRef.current.value.trim();

    if (!editedTodoContent) return;

    const editedTodo = {
      id: todoId,
      content: editedTodoContent,
      date: new Date(),
    };

    await fetch(`http://localhost:3000/todos/${todoId}`, {
      method: "PATCH",
      contentType: "application/json",
      body: JSON.stringify(editedTodo),
    });

    navigate("/");
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="p-8">
      <div className="max-w-md w-full mx-auto">
        <div>
          <label
            htmlFor="todo"
            className="text-gray-900 leading-6 font-medium text-sm block"
          >
            Edit your todo
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
            onClick={editTodo}
            className="shadow-sm text-white font-semibold text-sm py-2 px-3 bg-indigo-500 rounded-md inline-flex items-center relative gap-x-1.5 mt-2"
          >
            Edit Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
