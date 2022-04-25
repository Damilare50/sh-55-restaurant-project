import React from "react";
import PreHeader from "../Homepage/PreHeader";
import CUBodyDetails from "./CUBodyDetails";
import CUInputSection from "./CUInputSection";
import "./Contact.css";
import { FaAt, FaClock, FaLocationArrow, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-us padding-post-hero">
      <div className="cu-header header-post-hero">
        <PreHeader paragraph="Contact" />
        <h1>Contact Us</h1>
      </div>
      <div className="cu-body">
        <CUBodyDetails
          cubdicon={<FaLocationArrow />}
          cubdheader="Location:"
          cubdparagraphone="A108 Adam Street, New York NY 54023"
        />
        <CUBodyDetails
          cubdicon={<FaClock />}
          cubdheader="Open Hours:"
          cubdparagraphone="Monday - Friday"
          cubdparagraphtwo="6:00am - 10:00pm"
        />
        <CUBodyDetails
          cubdicon={<FaPhone />}
          cubdheader="Call:"
          cubdparagraphone="01-4658949"
        />
        <CUBodyDetails
          cubdicon={<FaAt />}
          cubdheader="Email:"
          cubdparagraphone="restaurantly330@gmail.com"
        />
      </div>
      <CUInputSection />
    </div>
  );
};

export default Contact;
