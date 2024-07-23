import React, { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import { fetchData } from "../api/fetchData";
import Card from "../components/Card";
import "./Home.css";

/**
 * Home component that fetches and displays a list of products.
 *
 * @returns {JSX.Element} The Home component.
 */
function Home() {
  // Retrieve 'data', 'setData', 'cart', and 'setCart' from AppContext
  const { data, setData, cart, setCart } = useContext(AppContext);

  // Effect hook to fetch data when component mounts
  useEffect(() => {
    // Fetch products from the API and update the 'data' state
    fetchData("https://fakestoreapi.com/products", setData);
  }, [setData]); // Empty dependency array means this runs only once on mount

  /**
   * Adds a product to the cart.
   *
   * @param {Object} product - The product to add to the cart.
   */
  const addToCart = (product) => {
    setCart([...cart, product]); // Append the new product to the cart
  };

  return (
    <div className="home">
      {/* Header section with introductory text */}
      <div className="home-header">
        <h1>Welcome to Our Store</h1>
        <p>Your one-stop shop for the best products!</p>
        <p>
          I'm Bishal, a software developer passionate about solving problems
          through code. I specialize in building scalable web and mobile apps
          with React.js, Redux, and Tailwind CSS. Currently at Exicube App
          Solutions (OPC) Private Limited, tackling exciting client and internal
          projects. Let's build something that makes a difference!
        </p>
      </div>

      {/* Conditionally render content based on 'data' state */}
      {data ? (
        <div className="content">
          <div className="card-container">
            {/* Render a list of Card components for each product */}
            {data.map((product) => (
              <Card
                key={product.id} // Unique key for each Card component
                product={product}
                addToCart={addToCart} // Pass the 'addToCart' function as a prop
              />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p> // Display loading text while data is being fetched
      )}
    </div>
  );
}

export default Home;
