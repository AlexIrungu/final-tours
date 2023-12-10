import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "./tourssss.jpg";
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const history = useHistory();

  const toggleDropdown = () => {
    setDropdownOpen((prevDropdownState) => !prevDropdownState);
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuState) => !prevMenuState);
  };

  const handleDropdownItemClick = (route) => {
    setDropdownOpen(false);
    history.push(route);
  };

  return (
    <nav className="bg-brown-600 text-dark p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
        <button
          className={`menu-button show-menu-button lg:hidden`}
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6 fill-current ${
              isMenuOpen ? "text-customWhite" : "text-black"
            }`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              // Icon when menu is open (e.g., close icon)
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            ) : (
              // Lion icon when menu is closed
              // Replace the following with the SVG data for the lion icon
              <path
                d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm2.26-5.67l.47-1.89H7.27l.47 1.89H13z"
              />
            )}
          </svg>
        </button>
        <div
          className={`menu lg:flex ${isMenuOpen ? "block" : "hidden"} transition-all duration-500`}
        >
          <ul className="menu-list flex flex-col space-y-4 lg:space-x-4 lg:space-y-0 lg:flex-row lg:items-center">
            <li className="menu-item">
              <Link to="/" className="menu-link hover:text-green-600 px-4 py-2 font-bold">
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/about" className="menu-link hover:text-green-600 px-4 py-2 font-bold">
                About
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/places" className="menu-link hover:text-green-600 px-4 py-2 font-bold">
                Places
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/gallery" className="menu-link hover:text-green-600 px-4 py-2 font-bold">
                Gallery
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/maps" className="menu-link hover:text-green-600 px-4 py-2 font-bold">
                Map
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/contact" className="menu-link hover:text-green-600 px-4 py-2 font-bold">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
