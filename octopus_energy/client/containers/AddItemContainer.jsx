import React, { useState } from 'react';
import Item from '../components/Item';
import PriceAndQuantity from '../components/PriceAndQuantity';
import QuantityCounter from '../components/QuantityCounter';
import AddToCart from '../components/AddToCart';
import '../assets/styles.css';

const AddItemContainer = (props) => {
  const [count, setCount] = useState(1);

  const increment = (value) => {
    setCount(value + 1);
  };

  const decrement = (value) => {
    if (value > 1) {
      setCount(value - 1);
    }
  };

  const handleClick = (str, curCount) => {
    if (str === 'increment') {
      increment(curCount);
    } else if (str === 'decrement') {
      decrement(curCount);
    }
  };
  return (
    <div className="add-item-container">
      <Item />
      <PriceAndQuantity />
      <QuantityCounter count={count} handleClick={handleClick} />
      <AddToCart />
    </div>
  );
};

export default AddItemContainer;
