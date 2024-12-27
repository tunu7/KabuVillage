import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Kabu Village</h1>
        {/* Hamburger Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center">
          <li>
            <a href="#home" className="hover:text-green-300">
              Home
            </a>
          </li>
          <li>
            <a href="#attractions" className="hover:text-green-300">
              Attractions
            </a>
          </li>
          <li>
            <a href="#accommodations" className="hover:text-green-300">
              Accommodations
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden bg-green-700 text-white py-4 space-y-4">
          <li className="text-center">
            <a href="#home" className="block hover:text-green-300">
              Home
            </a>
          </li>
          <li className="text-center">
            <a href="#attractions" className="block hover:text-green-300">
              Attractions
            </a>
          </li>
          <li className="text-center">
            <a href="#accommodations" className="block hover:text-green-300">
              Accommodations
            </a>
          </li>
          <li className="text-center">
            <a href="#contact" className="block hover:text-green-300">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
