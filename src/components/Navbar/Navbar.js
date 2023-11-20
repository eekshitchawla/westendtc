import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedOut = () => {
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
  };
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("userId") ? true : false);
  }, []);
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
          <a href="/deposits">Deposits</a>
        </li>
        <li>
          <a href="/#about-container">About Us</a>
        </li>
        <li>
          <a href="/#footer-container"> Contact Us</a>
        </li>
        {isLoggedIn ? (
          <li
            id="logout"
            onClick={(e) => {
              e.preventDefault();
              loggedOut();
              alert("Logged Out!");
            }}
          >
            Logout
          </li>
        ) : (
          <li>
            <a href="/login">Login</a>
          </li>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
