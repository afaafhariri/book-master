import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface NavItem {
  title: string;
  href?: string;
  dropdownItems?: { title: string; href: string }[];
}

const Test = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeNavTitle, setActiveNavTitle] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { title: "Home", href: "/" },
    {
      title: "Fiction",
      dropdownItems: [
        { title: "Adventure", href: "/adventure" },
        { title: "Romance", href: "/romance" },
        { title: "Sci-fi", href: "/sci-fi" },
        { title: "Mystery", href: "/mystery" },
        { title: "Crime", href: "/crime" },
        { title: "Life", href: "/life" },
      ],
    },
    {
      title: "Non-fiction",
      dropdownItems: [
        { title: "Biography", href: "/biography" },
        { title: "History", href: "/history" },
        { title: "Politics", href: "/politics" },
        { title: "Self Care", href: "/selfcare" },
        { title: "Science", href: "/science" },
      ],
    },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".group")) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="mx-auto px-16 py-5 bg-white shadow-lg flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <NavLink to="/">
          bookmaster<span className="text-red-600">.lk</span>
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <div key={item.title} className="relative group">
            <NavLink
              to={item.href || "#"}
              className={({ isActive }) =>
                `flex items-center space-x-1 text-slate-800 hover:text-red-600 transition duration-300 ${
                  isActive || activeNavTitle === item.title
                    ? "text-red-600"
                    : ""
                }`
              }
              onClick={() => setActiveNavTitle(item.title)}
            >
              <span>{item.title}</span>
              {item.dropdownItems && <ChevronDown className="h-4 w-4" />}
            </NavLink>

            {/* Desktop Dropdown */}
            {item.dropdownItems && activeDropdown === item.title && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {item.dropdownItems.map((dropdownItem) => (
                  <NavLink
                    key={dropdownItem.title}
                    to={dropdownItem.href}
                    className="block px-4 py-2 text-sm text-slate-800 hover:bg-gray-100 hover:text-red-600 transition-all duration-300"
                  >
                    {dropdownItem.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
