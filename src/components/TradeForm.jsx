// src/TradeForm.jsx
import React, { useState } from 'react';
import './TradeForm.css';

const TradeForm = () => {
  const [productName, setProductName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Name:', productName);
    console.log('Type:', type);
    console.log('Description:', description);
    // Clear inputs after submission
    setProductName('');
    setType('');
    setDescription('');
  };

  return (
    <div className="trade-form-container">
      <form onSubmit={handleSubmit} className="trade-form">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Submit Trade Details</button>
      </form>
    </div>
  );
};

export default TradeForm;