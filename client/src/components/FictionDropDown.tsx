import { NavLink } from "react-router-dom";

const FictionDropDown = () => {
  return (
    <ul className="list-none text-slate-800 font-medium text-sm gap-4">
      <li>
        <NavLink
          to="/romance"
          className={({ isActive }) =>
            isActive
              ? "text-slate-800"
              : "hover:text-red-600 transition duration-300"
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
              : "hover:text-red-600 transition duration-300"
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
              : "hover:text-red-600 transition duration-300"
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
              : "hover:text-red-600 transition duration-300"
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
              : "hover:text-red-600 transition duration-300"
          }
        >
          Sci-Fi
        </NavLink>
      </li>
    </ul>
  );
};
export default FictionDropDown;
