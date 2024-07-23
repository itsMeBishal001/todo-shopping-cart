import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useContext(AppContext); // Use context to get the cart

  const handleToggleClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="navbar-link">
            Todo & Cart
          </Link>
        </div>
        <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/todo" className="navbar-link">
              To-Do List
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/shopping-cart" className="navbar-link">
              Shopping Cart
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </Link>
          </li>
        </ul>
        <div
          className={`navbar-toggle ${isMobileMenuOpen ? "active" : ""}`}
          id="mobile-menu"
          onClick={handleToggleClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
