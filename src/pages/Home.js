import React, { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import { fetchData } from "../api/fetchData";
import Card from "../components/Card";
import "./Home.css";

function Home() {
  const { data, setData, cart, setCart } = useContext(AppContext);

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products", setData);
  }, [setData]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="home">
      <div className="home-header">
        <h1>Welcome to Our Store</h1>
        <p>Your one-stop shop for the best products!</p>
        <p>
          I'm Bishal, a software developer passionate about solving problems
          through code. I specialize in building scalable web and mobile apps
          with React.js, Redux, and Tailwind CSS. Currently at Exicube App
          Solutions (OPC) Private Limited, tackling exciting client and internal
          projects. Let's build something that makes a difference!
        </p>{" "}
      </div>
      {data ? (
        <div className="content">
          <div className="card-container">
            {data.map((product) => (
              <Card key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Home;
