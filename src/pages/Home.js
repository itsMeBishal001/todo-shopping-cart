import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import { fetchData } from '../api/fetchData';
import Card from '../components/Card';
import './Home.css';

function Home() {
  const { data, setData, cart, setCart } = useContext(AppContext);

  useEffect(() => {
    fetchData('https://fakestoreapi.com/products', setData);
  }, [setData]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
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
