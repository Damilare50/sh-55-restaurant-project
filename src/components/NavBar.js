import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/NavBar.css";
import RestaurantLogo from "../images/restaurant-logo.png";
import { FaBars } from "react-icons/fa";

const Logo = ({ logoImg, toggleNav }) => {
  return (
    <article>
      <Link to="/">
        <img src={logoImg} alt="logo" className="logo-img" />
      </Link>
      <FaBars onClick={toggleNav} className="menu-icon" />
    </article>
  );
};

const Navlink = ({ isOpen }) => {
  return (
    <>
      <ul
        className={isOpen ? "nav-links display-flex" : "nav-links display-none"}
      >
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/products" className="link">
            Products
          </Link>
        </li>
      </ul>
    </>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <Logo logoImg={RestaurantLogo} toggleNav={toggleNav} />
        <Navlink isOpen={isOpen} />
      </nav>
    </>
  );
};

export default NavBar;
