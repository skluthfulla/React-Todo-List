// Router Dom
import { Routes, Route } from "react-router-dom";

// Components
import AddTodo from "./Components/AddTodo";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import EditTodoPage from "./Components/EditTodoPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/add-todo" element={<AddTodo />} />
      <Route path="/edit-todo/:todoId" element={<EditTodoPage />} />
    </Routes>
  );
};

export default App;
