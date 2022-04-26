import React from "react";
import bread from "../images/bread-barrel.jpg";
import cake from "../images/cake.jpg";
import lobster from "../images/lobster-bisque.jpg";
import caesar from "../images/caesar.jpg";
import "../styles/Products.css";

const MenuItem = ({ img, header, details, price }) => {
  return (
    <article className="menu-item">
      <img src={img} alt="menu-img" />
      <article>
        <h3>
          {header} || ${price}
        </h3>
        <p>{details}</p>
      </article>
    </article>
  );
};

const FormInput = ({ name, id, placeholder, type }) => {
  return (
    <input
      className="reserve-input-text"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
};

const Products = () => {
  return (
    <>
      <article>
        <h1 className="menu-header">Check out our Tasty Menu</h1>
        <article className="menu-container">
          <MenuItem
            price="22.95"
            img={bread}
            header="Bread Barrel"
            details="Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor."
          />
          <MenuItem
            price="22.95"
            img={cake}
            header="Crab Cake"
            details="A delicate crab cake served on a toasted roll with lettuce and tartar sauce"
          />
          <MenuItem
            price="22.95"
            img={lobster}
            header="Lobster Roll"
            details="Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll"
          />
          <MenuItem
            price="22.95"
            img={caesar}
            header="Caesar Selections"
            details="Lorem, deren, trataro, filede, nerada"
          />
          <MenuItem
            price="22.95"
            img={cake}
            header="Crab Cake"
            details="A delicate crab cake served on a toasted roll with lettuce and tartar sauce"
          />
          <MenuItem
            price="22.95"
            img={bread}
            header="Bread Barrel"
            details="Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor."
          />
          <MenuItem
            price="22.95"
            img={caesar}
            header="Caesar Selections"
            details="Lorem, deren, trataro, filede, nerada"
          />
          <MenuItem
            price="22.95"
            img={lobster}
            header="Lobster Roll"
            details="Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll"
          />
        </article>
      </article>
      <article>
        <h2 className="menu-header">Book a Table</h2>
        <form>
          <article className="reservation-container">
            <FormInput
              name="name"
              id="name"
              placeholder="Your Name"
              type="text"
            />
            <FormInput
              name="email"
              id="email"
              placeholder="Your Email"
              type="email"
            />
            <FormInput
              name="phone"
              id="phone"
              placeholder="Your Phone"
              type="number"
            />
            <FormInput name="date" id="date" placeholder="Date" type="date" />
            <FormInput
              name="time"
              id="time"
              placeholder="Time"
              type="datetime"
            />
            <FormInput
              name="guestCount"
              id="guestCount"
              placeholder="# of People"
              type="number"
            />
          </article>
          <textarea
            className="reserve-input-textarea"
            name="message"
            id="message"
            rows="10"
            placeholder="Message"
          />
          <button className="reserve-button" type="submit">
            Submit
          </button>
        </form>
      </article>
    </>
  );
};

export default Products;
