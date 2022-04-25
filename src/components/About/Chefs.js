import React from "react";
import PreHeader from "../Homepage/PreHeader";
import ChefOne from "../../Images/chefone.jpeg";
import ChefTwo from "../../Images/cheftwo.jpeg";
import ChefThree from "../../Images/chefthree.jpeg";

function Chefs() {
  return (
    <div className="chefs">
      <div className="chefs-header header-post-hero">
        <PreHeader paragraph="chefs" />
        <h1>Our Proffessional Chefs</h1>
      </div>
      <div className="chefs-body">
        <div className="imgone">
          <div className="overlay">
            <p className="chef-name">Matthew Andy</p>
            <p className="chef-position">Head Chef</p>
          </div>
          <img src={ChefOne} alt="" />
        </div>
        <div className="imgtwo">
          <div className="overlay">
            <p className="chef-name">Anita Pyosvic</p>
            <p className="chef-position">Asst. Head Chef</p>
          </div>

          <img src={ChefTwo} alt="" />
        </div>
        <div className="imgthree">
          <div className="overlay">
            <p className="chef-name">Perie Salaman</p>
            <p className="chef-position">Dish Washer</p>
          </div>

          <img src={ChefThree} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Chefs;
