import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="bg-transparent mx-auto flex justify-between items-center py-6 px-8 border-b-1 border-gray-200 shadow-md">
        <div className="text-slate-800 text-2xl font-bold">
          <NavLink to="/">
            book<span className="text-red-600">MASTER.</span>
          </NavLink>
        </div>
        <ul className="flex space-x-6 list-none no-underline text-slate-800">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600"
                  : "hover:text-red-600 transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/concerts"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600"
                  : "hover:text-red-600 transition duration-300"
              }
            >
              Concerts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/drama"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600"
                  : "hover:text-red-600 transition duration-300"
              }
            >
              Drama
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comedy"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600"
                  : "hover:text-red-600 transition duration-300"
              }
            >
              Comedy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/talks"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600"
                  : "hover:text-red-600 transition duration-300"
              }
            >
              Talks
            </NavLink>
          </li>
        </ul>
        <button
          className="border-1 shadow-md rounded-md py-3 px-5 font-bold text-slate-800 hover:text-red-600 transition duration-300"
          onClick={handleOnClick}
        >
          Sign In
        </button>
      </div>
    </>
  );
};
export default NavBar;
