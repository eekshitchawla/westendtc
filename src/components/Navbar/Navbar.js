import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="navbar-ul">
        <li>
          <a id="westendLink" href="/">
            WESTEND CO.
          </a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#features">Features</a>
        </li>
        <li>
          <a href="/calculator"> Calculator</a>
        </li>
        <li>
          <a href="/">Deposits</a>
        </li>
        <li>
          <a href="/#about-container">About Us</a>
        </li>
        <li>
          <a href="/"> Contact Us</a>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
