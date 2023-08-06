import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isPlacesDropdownOpen, setPlacesDropdownOpen] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setMenuOpen((prevMenuState) => !prevMenuState);
  };

  const togglePlacesDropdown = () => {
    setPlacesDropdownOpen((prevDropdownState) => !prevDropdownState);
  };

  const handleDropdownItemClick = (route) => {
    setPlacesDropdownOpen(false);
    history.push(route);
  };

  return (
    <nav className="bg-brown-600 text-dark p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="w-25" />
        </Link>
        <button
          className={`menu-button show-menu-button lg:hidden`}
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6 fill-current ${isMenuOpen ? "text-white" : "text-black"}`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG path */}
          </svg>
        </button>
        <div
          className={`menu lg:flex ${isMenuOpen ? "block" : "show"} transition-all duration-500`}
        >
          <ul className="menu-list flex space-x-4 lg:space-x-8 font-bold">
            <li className="menu-item">
              <Link to="/home" className="menu-link hover:text-green-600">
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/about" className="menu-link hover:text-green-600">
                About
              </Link>
            </li>
            {/* <li className="menu-item">
              <Link to="/service" className="menu-link hover:text-green-600">
                Service
              </Link>
            </li> */}
            <li className="menu-item">
              <Link to="/places">
              <button className="menu-link hover:text-green-600" onClick={togglePlacesDropdown}>
                Places
              </button>
              </Link>
              {isPlacesDropdownOpen && (
                <ul className="places-dropdown">
                  <li className="dropdown-item">
                    <button
                      className="dropdown-link hover:text-green-600"
                      onClick={() => handleDropdownItemClick("/service")}
                    >
                      Service
                    </button>
                  </li>
                  {/* <li className="dropdown-item">
                    <button
                      className="dropdown-link hover:text-green-600"
                      onClick={() => handleDropdownItemClick("/places/national-reserves")}
                    >
                      National Reserves
                    </button>
                  </li> */}
                  {/* Add more dropdown items for other places */}
                </ul>
              )}
            </li>
            <li className="menu-item">
              <Link to="/gallery" className="menu-link hover:text-green-600">
                Gallery
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/faq" className="menu-link hover:text-green-600">
                FAQ
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/contact" className="menu-link hover:text-green-600">
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
