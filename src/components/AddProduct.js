import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import './AddProduct.css';

function AddProduct() {
  const { setData } = useContext(AppContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const addProduct = () => {
    if (name.trim() && !isNaN(price) && price > 0 && image.trim() && description.trim() && category.trim()) {
      const newProduct = {
        id: Date.now(),
        title: name,
        price: parseFloat(price),
        description,
        category,
        image,
        rating: {
          rate: 0,
          count: 0
        }
      };
      setData(prevData => [...prevData, newProduct]);
      setName('');
      setPrice('');
      setImage('');
      setDescription('');
      setCategory('');
    }
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Product name"
      />
      <input
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)}
        placeholder="Price"
        min="0.01"
        step="0.01"
      />
      <input
        type="text"
        value={image}
        onChange={e => setImage(e.target.value)}
        placeholder="Image URL"
      />
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={category}
        onChange={e => setCategory(e.target.value)}
        placeholder="Category"
      />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default AddProduct;
