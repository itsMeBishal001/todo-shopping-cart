import React from "react";
import "./Card.css";

/**
 * Card component to display a product with its details and an option to add it to the cart.
 *
 * @param {Object} props - The props object containing product data and addToCart function.
 * @param {Object} props.product - The product object to display. It should include `image`, `title`, `price`, and `description` properties.
 * @param {function} props.addToCart - The function to call when the "Add to Cart" button is clicked. It should add the product to the cart.
 *
 * @returns {JSX.Element} The rendered Card component.
 */
function Card({ product, addToCart }) {
  return (
    <div className="card">
      {/* Display the product image */}
      <img src={product.image} alt={product.title} className="card-image" />

      <div className="card-body">
        {/* Display the product title */}
        <h2 className="card-title">{product.title}</h2>

        {/* Display the product price */}
        <p className="card-price">${product.price}</p>

        {/* Display the product description */}
        <p className="card-description">{product.description}</p>

        {/* Button to add the product to the cart */}
        <button className="card-button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
