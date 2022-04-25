import React from "react";
// import PreHeader from "../Homepage/PreHeader";
// import ChefOne from "../../Images/chefone.jpeg";
// import ChefTwo from "../../Images/cheftwo.jpeg";
// import ChefThree from "../../Images/chefthree.jpeg";
import Chefs from "./Chefs";
import WhyChooseUs from "./WhyChooseUs";
import "./About.css";
const About = () => {
  return (
    <div className="About padding-post-hero">
      {/* <div className="chefs-header header-post-hero">
        <PreHeader paragraph="chefs" />
        <h1>Our Professional Chefs</h1>
      </div>
      <div className="chefs-body">
        <div className="imgone">
          <img src={ChefOne} alt="" />
        </div>
        <div className="imgtwo">
          <img src={ChefTwo} alt="" />
        </div>
        <div className="imgthree">
          <img src={ChefThree} alt="" />
        </div>
      </div> */}
      <Chefs />
      <WhyChooseUs />
    </div>
  );
};

export default About;
