import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import Router correctly

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-white text-2xl font-bold animate-pulse hover:text-yellow-400 transition duration-500">
                SkillShareIndia
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-white text-lg hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-white text-lg hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              About Us
            </Link>
            <Link
              to="/result"
              className="text-white text-lg hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Result
            </Link>
            <Link
              to="/reviews"
              className="text-white text-lg hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Reviews
            </Link>
            <Link
              to="/brochure"
              className="text-white text-lg hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Brochure
            </Link>
            <Link
              to="/contact-us"
              className="text-white text-lg hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none hover:text-yellow-400 transition duration-300"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              onClick={toggleMenu}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              About Us
            </Link>
            <Link
              to="/result"
              onClick={toggleMenu}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              Result
            </Link>
            <Link
              to="/reviews"
              onClick={toggleMenu}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              Reviews
            </Link>
            <Link
              to="/brochure"
              onClick={toggleMenu}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              Brochure
            </Link>
            <Link
              to="/contact-us"
              onClick={toggleMenu}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
