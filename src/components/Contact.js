import React from 'react';
import '../styles/Contact.css';
import '../styles/Footer.css'
import { FaMobile, FaRegEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const FormInput = ({name, id, placeholder}) => {
  return (
    <input className='input-text' type="text" name={name} id={id} placeholder={placeholder} />
  )
}

const Form = () => {
  return (
    <>
      <form className='form'>
        <FormInput name="name" id="name" placeholder="Your Name" />
        <FormInput name="email" id="email" placeholder="Your Email" />
        <FormInput name="subject" id="subject" placeholder="Subject" />
        <textarea className='input-text' name="message" id="message" rows="10" placeholder='Message' />
        <button className='form-button' type='submit'>Submit</button>
      </form>
    </>
  )
}

const AddressSection = ({icon, header, details, children}) => {
  return (
    <article id='address-sections'>
      <span className='address-icon-container'>{icon}</span>
      <article>
        <h2>{header}</h2>
        <p>{details}</p>
        <p>{children}</p>
      </article>
    </article>
  )
}

const Address = () => {
  return (
    <article>
      <AddressSection icon={<FaMapMarkerAlt className='icon' />} header="Location:" details="13, Macaulay Way, LG, 200142, NGA" />
      <AddressSection icon={<FaClock className='icon' />} header="Open Hours:" details="Monday-Saturday:">11:00 AM - 2300 PM</AddressSection>
      <AddressSection icon={<FaRegEnvelope className='icon' />} header="Email:" details="info@group55.com" />
      <AddressSection icon={<FaMobile className='icon' />} header="Call:" details="+234 901 234 4567" />
    </article>
  )
}

const Contact = () => {
  return (
    <>
      <h1 id="contact-header">Contact Us</h1>
      <article className='form-address'>
        <Address />
        <Form />
      </article>
    </>
  )
}

export default Contact;