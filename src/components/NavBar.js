import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import RestaurantLogo from '../images/restaurant-logo.png';

const Logo = ({logoImg}) => {
  return (
    <>
      <Link to='/'>
        <img src={logoImg} alt='logo' className='logo-img'/>
      </Link>
    </>
  )
}

const Navlink = () => {
  return (
    <>
      <ul className='nav-links'>
        <li>
          <Link to='/' className='link'>Home</Link>
        </li>
        <li>
          <Link to='/about' className='link'>About</Link>
        </li>
        <li>
          <Link to='/contact' className='link'>Contact</Link>
        </li>
        <li>
          <Link to='/products' className='link'>Products</Link>
        </li>
      </ul>
    </>
  )
}

const NavBar = () => {
  return (
    <>
      <nav className='navbar'>
        <Logo logoImg={RestaurantLogo} />
        <Navlink />
      </nav>
    </>
  )
}

export default NavBar;