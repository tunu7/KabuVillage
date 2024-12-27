import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Kabu Village</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-green-300">Home</a></li>
          <li><a href="#attractions" className="hover:text-green-300">Attractions</a></li>
          <li><a href="#accommodations" className="hover:text-green-300">Accommodations</a></li>
          <li><a href="#contact" className="hover:text-green-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
