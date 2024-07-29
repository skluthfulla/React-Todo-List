import React from "react";

import dateFormat from "dateformat";

import { Link } from "react-router-dom";

const TodoItem = (props) => {
  const formattedDate = dateFormat(props.todo.date, "fullDate");

  return (
    <li className="py-5 gap-x-6 flex items-center justify-between border-b border-gray-100">
      {/* Left */}
      <div>
        <p className="text-gray-900 leading-6 font-semibold text-sm">
          {props.todo.content}
        </p>
        <p className="mt-1 text-gray-500 leading-5 text-xs">{formattedDate}</p>
      </div>
      {/* Right */}
      <div className="flex items-center gap-x-4">
        <Link to={`/edit-todo/${props.todo.id}`}>
          <button className="border border-gray-300 text-gray-900 text-sm font-semibold py-1.5 px-2.5 bg-white rounded-md">
            Edit
          </button>
        </Link>
        <button
          onClick={() => props.deleteTodo(props.todo.id)}
          className="border border-gray-300 text-gray-900 text-sm font-semibold py-1.5 px-2.5 bg-white rounded-md"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
