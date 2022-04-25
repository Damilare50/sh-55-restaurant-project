import React from "react";
import RestaurantHero from "../../Images/Hero-image.jpg";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hs-overlay same-position"></div>
      <div className=" hs-image same-position ">
        <img src={RestaurantHero} alt="" />
      </div>
      <div className="toplayer same-position hs-welcometext">
        <h1>
          Welcome to <span>Restaurantly</span>
        </h1>
        <p>Delivering great food for more than 18 years</p>
        <div className="buttons">
          <button>Our Menu</button>
          <button>Book a Table</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
