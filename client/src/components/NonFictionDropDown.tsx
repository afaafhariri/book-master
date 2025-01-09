import { NavLink } from "react-router-dom";

const NonFictionDropDown = () => {
  return (
    <div className="bg-gray-50 flex flex-col justify-between space-x-11 items-start mx-auto px-4 py-2 border-1 border-gray-200 shadow-md w-48 h-auto">
      <ul className="list-none no-underline text-slate-800 font-medium text-sm gap-4">
        <li>
          <NavLink
            to="/biography"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800"
                : "hover:text-slate-800 transition duration-300"
            }
          >
            Biography
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/self-help"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800"
                : "hover:text-red-600 transition duration-300"
            }
          >
            Self-Help
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/History"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800"
                : "hover:text-red-600 transition duration-300"
            }
          >
            History
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/politics"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800"
                : "hover:text-red-600 transition duration-300"
            }
          >
            Politics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default NonFictionDropDown;
