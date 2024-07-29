// Components
import Header from "./Header";
import Todos from "./Todos";

const Home = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Header />
      <Todos />
    </div>
  );
};

export default Home;
