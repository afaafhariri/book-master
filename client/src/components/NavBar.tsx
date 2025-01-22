import { NavLink } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

interface NavItems {
  label: string;
  link: string;
}

const navItems: NavItems[] = [
  { label: "Adventure", link: "/adventure" },
  { label: "Crime & Thriller", link: "/crime_thriller" },
  { label: "Horror", link: "/horror" },
  { label: "Life", link: "/life" },
  { label: "Romance", link: "/romance" },
  { label: "Sci-fi", link: "/sci_fi" },
  { label: "Arts & Culture", link: "/arts_culture" },
  { label: "Politics", link: "/politics" },
  { label: "Finance", link: "/finance" },
  { label: "Lifestyle", link: "/lifestyle" },
  { label: "Science & Technology", link: "/science_technology" },
  { label: "History", link: "/history" },
];

const NavBar = () => {
  return (
    <nav className="bg-white relative min-w-screen flex flex-col items-center justify-center shadow-md shadow-slate-300">
      <div className="flex-shrink-0 mt-6">
        <NavLink to="/">
          <p className="text-blue-900 font-bold text-3xl">
            bookmaster<span className="text-red-600">.lk</span>
          </p>
        </NavLink>
      </div>
      <div className="relative min-w-full px-14 py-4 flex items-center justify-between shadow-md shadow-slate-300">
        <ul className="flex space-x-8 text-sm text-blue-900 mx-auto">
          {navItems.map((item) => (
            <li className="font-medium" key={item.label}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600"
                    : "hover:text-red-600 transition-all duration-500 "
                }
                to={item.link}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/cart"
              className="hover:text-red-600 transition-all duration-500"
            >
              <ShoppingBag size={20} strokeWidth={2} />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
