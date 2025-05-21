import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: "Home",
      route: "#",
    },
    {
      label: "Services",
      route: "#",
    },
    {
      label: "About",
      route: "#",
    },
    {
      label: "Gallery",
      route: "#",
    },
  ];

  return (
    <nav className="bg-amber-900 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="ml-4 text-white font-bold">CofeeSHop</h1>
        </div>

      
        <div
          className="flex md:hidden items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-white" size={24} />
          ) : (
            <Menu className="text-white" size={24} />
          )}
        </div>

        <div className="hidden md:flex space-x-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              className="text-white hover:text-gray-400"
              href={item.route}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

  
      {isOpen && (
        <div className="flex md:hidden flex-col bg-yellow-700">
          {navItems.map((item, index) => (
            <a
              className="text-white hover:text-gray-400 py-2 px-4 hover:border-l-4 border-yellow-500"
              key={index}
              href={item.route}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
