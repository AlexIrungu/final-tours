import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
    <nav className="bg-brown-600 text-dark p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="w-25" />
        </Link>
        <button
          className={`menu-button ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <svg
            className="menu-icon w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG path */}
          </svg>
        </button>
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="menu-list flex space-x-4">
            <li className="menu-item">
              <Link
                to="/home"
                className="menu-link hover:text-blue-300"
              >
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/about"
                className="menu-link hover:text-blue-300"
              >
                About
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/service"
                className="menu-link hover:text-blue-300"
              >
                Service
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/gallery"
                className="menu-link hover:text-blue-300"
              >
                Gallery
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/faq"
                className="menu-link hover:text-blue-300"
              >
                FAQ
              </Link>
            </li>
            {/* <li className="menu-item">
              <Link
                to="/tours"
                className="menu-link hover:text-blue-300"
              >
                Tours
              </Link>
            </li> */}
            <li className="menu-item">
              <Link
                to="/contact"
                className="menu-link hover:text-blue-300"
              >
                Contact Us
              </Link>
              </li>
              <li className="menu-item">
              <Link
                to="/calendar"
                className="menu-link hover:text-blue-300"
              >
                Booking
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
}

export default Navbar;
