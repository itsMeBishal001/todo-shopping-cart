import React from "react";
import "./Card.css";

function Card({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-price">${product.price}</p>
        <p className="card-description">{product.description}</p>
        <button className="card-button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
