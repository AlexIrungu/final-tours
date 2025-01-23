import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './Navbar.css'
import dstfinal from './shiftedfrommain/dstfinal.png'
import { HiOutlineMenu } from 'react-icons/hi'; // Import the menu icon from Heroicons
// import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook


const Navbar = () => {
  const { t } = useTranslation(); // Use useTranslation hook to access translations

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
    <nav className="bg-brown-600 text-dark p-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="logo-link">
          <img src={dstfinal} alt="Logo" className="logo-image" />
        </Link>
        <button
          className={`menu-button show-menu-button lg:hidden ${
            !isMenuOpen ? "text-green-500" : ""
          }`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <HiOutlineMenu className={`w-6 h-6 fill-current ${isMenuOpen ? "text-customWhite" : "text-green-500"}`} />
          ) : (
            <svg
              className="w-6 h-6 fill-current text-green-600"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="green"  
                d="M12 0C5.38 0 0 5.38 0 12c0 3.24 1.21 6.21 3.21 8.5 0 .1.01.19.02.29.01.1.03.2.05.29 0 .01 0 .01.01.02l.01.01L12 24l8.71-2.91c0-.01 0-.01.01-.02s0-.01.01-.02c.02-.09.04-.19.05-.28.01-.1.02-.2.02-.31C22.58 18.21 24 15.24 24 12c0-6.62-5.38-12-12-12zM12 21v-2c-2.76 0-5-2.24-5-5H5c0 2.76 2.24 5 5 5zm7-3h2c0-3.31-2.69-6-6-6v2c2.21 0 4 1.79 4 4zm-9-7.99v-2C7 8.69 8.69 7 11 7V5c-3.31 0-6 2.69-6 6h2zm7-2h2c0-2.21-1.79-4-4-4v2c1.66 0 3 1.34 3 3z"
              />
            </svg>
          )}
        </button>
        <div
          className={`menu lg:flex ${isMenuOpen ? "block" : "hidden"} transition-all duration-500`}
        >
          <ul className="menu-list flex flex-col lg:space-y-0 lg:flex-row lg:items-center text-sm">
            <li className="menu-item">
              <Link to="/" className="menu-link hover:text-green-600 px-2 py-0 font-bold">
                {t('home')}
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/about" className="menu-link hover:text-green-600 px-2 py-0 font-bold">
                {t('about')}
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/pricing" className="menu-link hover:text-green-600 px-2 py-0 font-bold">
                {t('Packages')}
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/gallery" className="menu-link hover:text-green-600 px-2 py-0 font-bold">
                {t('gallery')}
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/maps" className="menu-link hover:text-green-600 px-2 py-0 font-bold">
                {t("Maps")}
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/contact" className="menu-link hover:text-green-600 px-2 py-0 font-bold">
                {t("contact")}
              </Link>
            </li>
            
          </ul>
        </div>
        {/* <LanguageSwitcher /> */}
      </div>  
    </nav>
  );
};

export default Navbar;
