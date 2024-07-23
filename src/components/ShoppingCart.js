import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "./ShoppingCart.css";

/**
 * ShoppingCart component displays the user's cart items, subtotal, and provides options to remove items.
 *
 * @returns {JSX.Element} The rendered ShoppingCart component.
 */
function ShoppingCart() {
  // Access the cart and setCart from AppContext
  const { cart, setCart } = useContext(AppContext);

  /**
   * Removes an item from the cart based on the index provided.
   * @param {number} index - The index of the item to remove.
   */
  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Calculate the subtotal of all items in the cart
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="shopping-cart">
      {/* Cart title */}
      <h2 className="shopping-cart-title">Your Shopping Cart</h2>

      {/* Summary section for total items and subtotal */}
      <div className="shopping-cart-summary">
        <div className="summary-item">
          <span className="summary-label">Total items:</span>
          <span className="summary-value">{cart.length}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Subtotal:</span>
          <span className="summary-value">${subtotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Conditional rendering based on whether the cart is empty */}
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-cart-message">Your cart is empty.</p>
          <Link to="/" className="go-home-button">
            Go to Home and Add Items
          </Link>
        </div>
      ) : (
        // List of items in the cart
        <ul className="cart-items-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <span className="cart-item-title">{item.name}</span>
                <span className="cart-item-price">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => removeItem(index)}
                className="remove-button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;
