import { NavLink } from "react-router-dom";

const FictionDropDown = () => {
  return (
    <div className="flex flex-col justify-between space-x-11 items-start mx-auto px-4 py-2 bg-white border-1 border-gray-200 shadow-md w-48 h-auto">
      <ul className="list-none no-underline text-red-600 font-medium text-sm gap-4">
        <li>
          <NavLink
            to="/romance"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800"
                : "hover:text-slate-800 transition duration-300"
            }
          >
            Romance
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/adventure"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800"
                : "hover:text-slate-800 transition duration-300"
            }
          >
            Adventure
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mystery"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800"
                : "hover:text-slate-800 transition duration-300"
            }
          >
            Mystery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crime"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800"
                : "hover:text-slate-800 transition duration-300"
            }
          >
            Crime
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sci-fi"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800"
                : "hover:text-slate-800 transition duration-300"
            }
          >
            Sci-Fi
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default FictionDropDown;
