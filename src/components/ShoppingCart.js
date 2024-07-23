import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "./ShoppingCart.css";

function ShoppingCart() {
  const { cart, setCart } = useContext(AppContext);

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Your Shopping Cart</h2>
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

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-cart-message">Your cart is empty.</p>
          <Link to="/" className="go-home-button">
            Go to Home and Add Items
          </Link>
        </div>
      ) : (
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
