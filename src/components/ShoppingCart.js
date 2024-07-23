import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './ShoppingCart.css';

function ShoppingCart() {
  const { cart, setCart } = useContext(AppContext);

  const removeItem = index => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <p>Total items: {cart.length}</p>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
            <button onClick={() => removeItem(index)} className="remove-button">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
