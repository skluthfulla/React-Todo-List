import Header from "./Header";
import EditTodo from "./EditTodo";

const EditTodoPage = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Header />
      <EditTodo />
    </div>
  );
};

export default EditTodoPage;
