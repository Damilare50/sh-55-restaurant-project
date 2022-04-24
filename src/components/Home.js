import React from "react";
import "../styles/Home.css";
import { FaCheckCircle } from "react-icons/fa";
import image from "../images/about.jpg";
import bread from "../images/bread-barrel.jpg";
import caesar from "../images/caesar.jpg";
import cake from "../images/cake.jpg";
import lobster from "../images/lobster-bisque.jpg";

function Home() {
  return (
    <>
      <Intro />
      <Menu />
    </>
  );
}

const Intro = () => {
  return (
    <section className="intro">
      <div className="voluptanem">
        <div>
          <div className="header">
            <h2>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h2>
          </div>
          <div className="body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div>
              <span>
                <FaCheckCircle className="check" />
              </span>
              &nbsp; &nbsp;
              <span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
            <div>
              <span>
                <FaCheckCircle className="check" />
              </span>
              &nbsp; &nbsp;
              <span>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </span>
            </div>
            <div>
              <span>
                <FaCheckCircle className="check" />
              </span>
              &nbsp; &nbsp;
              <span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </span>
            </div>
            <div className="follow-text">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
        <div className="image-div">
          <img alt="" src={image} />
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  return (
    <section className="menu">
      <div className="menu-container">
        <div className="menu-header">
          <p>MENU</p> <hr />
          <h1>Check Out Our Tasty Menu</h1>
        </div>

        <div className="menu-body">
          <div className="menu-item">
            <div className="menu-image">
              <img alt="" src={bread} />
            </div>
            <div className="menu-text">
              <h3 className="main-text">
                Bread Barrel &nbsp;
                ........................................................ &nbsp;
                <span className="price">$6.95</span>
              </h3>
              <p className="sub-text">Nicely baked bread barrel</p>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-image">
              <img alt="" src={caesar} />
            </div>
            <div className="menu-text">
              <h3 className="main-text">
                Caesar Selections &nbsp;
                ........................................................ &nbsp;
                <span className="price">$8.95</span>
              </h3>
              <p className="sub-text">
                Beautifully garnished caesar salad, with an array of sections
              </p>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-image cake">
              <img alt="" src={cake} />
            </div>
            <div className="menu-text">
              <h3 className="main-text">
                Crab Cake &nbsp;
                ........................................................ &nbsp;
                <span className="price">$7.95</span>
              </h3>
              <p className="sub-text">
                A delicate crab cake served on a toasted roll with lettuce and
                tartar sauce
              </p>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-image lobster">
              <img alt="" src={lobster} />
            </div>
            <div className="menu-text">
              <h3 className="main-text">
                Lobster Bisque &nbsp;
                ........................................................ &nbsp;
                <span className="price">$5.95</span>
              </h3>
              <p className="sub-text">
                Lobster with butter and lemon flavoring
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
