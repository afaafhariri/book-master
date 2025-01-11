import { NavLink, useNavigate } from "react-router-dom";

interface NavItems {
  label: string;
}

const navItems: NavItems[] = [
  { label: "Adventure" },
  { label: "Mystery" },
  { label: "Crime & Thriller" },
  { label: "Horror" },
  { label: "Life" },
  { label: "Romance" },
  { label: "Sci-fi" },
  { label: "Art & Culture" },
  { label: "Politics" },
  { label: "Finance" },
  { label: "Lifestyle" },
  { label: "Science & Technology" },
];

const NavBar = () => {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate("/signin");
  };

  return (
    <>
      <div className="bg-white relative min-w-screen px-14 py-4 flex items-center justify-between">
        <NavLink to="/">
          <p className="text-blue-900 font-bold text-3xl">
            bookmaster<span className="text-red-600">.lk</span>
          </p>
        </NavLink>
        <p className="text-2xl">Search</p>
        <button
          onClick={handleSignInClick}
          className="py-2 px-4 bg-white shadow-md shadow-slate-300 hover:bg-red-50 hover:text-red-600 text-sm rounded-md transition-all duration-300
          font-semibold"
        >
          Sign In
        </button>
      </div>
      <div className="bg-white relative min-w-screen px-14 py-4 flex items-center justify-between shadow-md shadow-slate-300">
        <ul className="flex space-x-8 text-sm text-blue-900 mx-auto">
          {navItems.map((item) => (
            <li
              className="hover:text-red-600 transition-all duration-500 font-medium"
              key={item.label}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default NavBar;
