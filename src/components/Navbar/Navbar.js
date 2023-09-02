import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav id='navbar'>
        <ul id='navbar-ul'>
            <li><Link to="/">WESTEND CO.</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#features">Features</a></li>
            <li><Link to="/loan">Loans</Link></li>
            <li><Link to="/"> Calculator</Link></li>
            <li><Link to="/">Deposits</Link></li>
            <li><a href="/#about-container">About Us</a></li>
            <li><Link to="/"> Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
