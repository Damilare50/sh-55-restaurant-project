import React from 'react';
import '../styles/Footer.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Address = () => {
  return (
    <>
      <article>
        <h2>FOODIELAND</h2>
        <section>
          <h4>13, Macaulay Way, <br/>LG, 200142, NGA</h4>
        </section>
        <section>
          <h4>Phone: +234 901 234 4567</h4>
          <h4>Email: info@group55.com</h4>
        </section>
        <section>
          <FaTwitter className='icon' />
          <FaFacebookF className='icon' />
          <FaInstagram className='icon' />
          <FaSkype className='icon' />
          <FaLinkedinIn className='icon' />
        </section>
      </article>
    </>
  )
}

const UsefulLinks = () => {
  return (
    <article>
      <h2>Useful Links</h2>
      <ul>
        <li><Link to="/" className='footer-link'>Home</Link></li>
        <li><Link to="/about" className='footer-link'>About us</Link></li>
        <li><Link to="/products" className='footer-link'>Services</Link></li>
        <li><Link to="/" className='footer-link'>Terms of service</Link></li>
        <li><Link to="/" className='footer-link'>Privacy policy</Link></li>
      </ul>
    </article>
  )
}

const Newsletter = () => {
  return (
    <>
      <article>
        <h2>Our Newsletter</h2>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <section className='news-form'>
          <input type="text" name="newsletter" id="" placeholder='Enter your mail...'/>
          <button type='submit'>Subscribe</button>
        </section>
      </article>
    </>
  )
}

const Footer = () => {
  return (
    <footer id='footer'>
      <Address />
      <UsefulLinks />
      <UsefulLinks />
      <Newsletter />
    </footer>
  )
}

export default Footer;