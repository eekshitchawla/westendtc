import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav id="navbar">
      <ul id="navbar-ul">
        <li>
          <a href="/">WESTEND CO.</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#features">Features</a>
        </li>
        <li>
          <a href="/loan">Loans</a>
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
      </ul>
    </nav>
  );
};

export default Navbar;
