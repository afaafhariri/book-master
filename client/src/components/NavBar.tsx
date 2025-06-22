import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">📚 Book Shop</h1>
      <ul className="flex gap-6 text-sm">
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-500"
            }
          >
            View Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-book"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-500"
            }
          >
            Add Book
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
