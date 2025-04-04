import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importing icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-wide">
          The Tooth Story
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-6 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-primary md:bg-transparent p-4 md:p-0`}
        >
          <Link
            to="/blog"
            className="block md:inline-block px-4 py-2 hover:bg-primary hover:text-white rounded-md transition-all"
          >
            Blog
          </Link>
          <Link
            to="/videos"
            className="block md:inline-block px-4 py-2 hover:bg-primary hover:text-white rounded-md transition-all"
          >
            Educational Videos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
