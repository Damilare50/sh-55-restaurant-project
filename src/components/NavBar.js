import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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

const Navlink = ({ isOpen, closeNav }) => {
  return (
    <>
      <ul
        className={isOpen ? "nav-links responsive" : "nav-links"}
        onClick={closeNav}
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
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  }

  return (
    <>
      <nav className="navbar">
        <Logo logoImg={RestaurantLogo} toggleNav={toggleNav} />
        <Navlink isOpen={isNavOpen} closeNav={closeNav} />
      </nav>
    </>
  );
};

export default NavBar;
