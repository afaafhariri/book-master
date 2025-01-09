import { NavLink } from "react-router-dom";

const NonFictionDropDown = () => {
  return (
    <ul className="list-none text-slate-800 font-medium text-sm space-y-4">
      <li>
        <NavLink
          to="/biography"
          className={({ isActive }) =>
            isActive
              ? "text-slate-800"
              : "hover:text-red-600 transition duration-300"
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
  );
};
export default NonFictionDropDown;
