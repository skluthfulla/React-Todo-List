import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="bg-gray-800 flex justify-between h-16 px-2 rounded-lg">
        {/* Left Side */}
        <div className="flex">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        {/* Right Side */}
        <div className="flex items-center">
          {/* New Todo Button */}
          <div className="shrink-0">
            <Link to="/add-todo">
              <button className="shadow-sm text-white font-semibold text-sm py-2 px-3 bg-indigo-500 rounded-md inline-flex items-center relative gap-x-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 -ml-0.5"
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                </svg>
                New Todo
              </button>
            </Link>
          </div>
          {/* Profile */}
          <Link to="/sign-in">
            <div className="ml-4 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="w-8 h-8 rounded-full"
              />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
