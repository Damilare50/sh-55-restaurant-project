import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Home from "./components/Homepage/Home";
import NavBar from "./components/NavBar";
import Products from "./components/Products/Products";
import "./styles/Home.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
