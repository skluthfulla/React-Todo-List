import Header from "./Header";
import NewTodo from "./NewTodo";

const AddTodo = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Header />
      <NewTodo />
    </div>
  );
};

export default AddTodo;
