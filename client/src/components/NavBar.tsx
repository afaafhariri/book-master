import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FictionDropDown from "./FictionDropDown";
import NonFictionDropDown from "./NonFictionDropDown";

const NavBar = () => {
  const navigate = useNavigate();

  const [showFictionDropDown, setFictionDropDown] = useState(false);
  const [showNonFictionDropDown, setNonFictionDropDown] = useState(false);

  const handleOnClick = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="bg-transparent mx-auto flex justify-between items-center py-5 px-10 border-b-1 border-gray-200 shadow-md">
        <div className="text-slate-800 text-2xl font-bold">
          <NavLink to="/">
            book<span className="text-red-600">MASTER.</span>
          </NavLink>
        </div>
        <ul className="flex space-x-14 list-none no-underline text-slate-800 font-semibold text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600"
                  : "hover:text-red-600 transition-all duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li
            className="relative hover:text-red-600 transition duration-300 focus:text-red-600"
            onMouseEnter={() => {
              setFictionDropDown(true);
              setNonFictionDropDown(false);
            }}
          >
            Fiction
          </li>
          <li
            className="relative hover:text-red-600 transition duration-300 focus:text-red-600"
            onMouseEnter={() => {
              setNonFictionDropDown(true);
              setFictionDropDown(false);
            }}
          >
            Non-fiction
          </li>
        </ul>
        <button
          className="border-1 shadow-md rounded-md py-2 px-4 text-sm font-bold text-slate-800 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
          onClick={handleOnClick}
        >
          Sign In
        </button>
      </div>
      {showFictionDropDown && (
        <div
          className="bg-transparent flex flex-col justify-between space-x-11 items-start mx-auto px-6 py-4 border-1 border-gray-200 shadow-md w-36 h-auto z-10"
          onMouseLeave={() => setFictionDropDown(false)}
        >
          {<FictionDropDown />}
        </div>
      )}
      {showNonFictionDropDown && (
        <div
          className="bg-transparent flex flex-col justify-between space-x-11 items-start mx-auto px-6 py-4 border-1 border-gray-200 shadow-md w-36 h-auto z-10"
          onMouseLeave={() => setNonFictionDropDown(false)}
        >
          {<NonFictionDropDown />}
        </div>
      )}
    </>
  );
};
export default NavBar;
