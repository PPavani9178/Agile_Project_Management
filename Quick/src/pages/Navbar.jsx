import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b border-b-lime-600 border-t border-t-lime-600 border-l border-l-lime-600 border-r border-r-lime-600">
      <div className="flex justify-between items-center p-2">
        <div>
          <h2 className="text-fuchsia-700 text-xl font-bold font-sans">Quick Project Management</h2>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-fuchsia-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <div className="md:flex gap-10 font-sans p-2">
            <Link to="/">Home</Link>
            <Link to="/workshop">Workshops</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/newBoard">Board</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
