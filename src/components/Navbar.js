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
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z"
            />
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
