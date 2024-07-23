import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "./Navbar.css";

/**
 * Navbar component to display navigation links and the shopping cart item count.
 *
 * @returns {JSX.Element} The rendered Navbar component.
 */
function Navbar() {
  // State to control the visibility of the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Context to get the current cart items
  const { cart } = useContext(AppContext);

  /**
   * Toggles the mobile menu open/closed state.
   */
  const handleToggleClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo section with a link to the home page */}
        <div className="navbar-logo">
          <Link to="/" className="navbar-link">
            Todo & Cart
          </Link>
        </div>

        {/* Navigation menu */}
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
              {/* Display cart item count if there are items in the cart */}
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </Link>
          </li>
        </ul>

        {/* Toggle button for mobile menu */}
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
