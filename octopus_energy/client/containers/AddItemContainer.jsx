import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import Item from '../components/Item';
import PriceAndQuantity from '../components/PriceAndQuantity';
import QuantityCounter from '../components/QuantityCounter';
import AddToCart from '../components/AddToCart';
import '../assets/styles.css';

const AddItemContainer = (props) => {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([]);
  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(!visible);

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

  /*If I were to spend more time on this, I would add items to cart array and total up the cost in some kind of Cart Summary page
  if you would like to see another coding sample from an application where I do this, please let me know
  
  const handleAddToCart = (curCount) => {

  } 

  */

  return (
    <div className="add-item-container">
      <Alert color="info" isOpen={visible} toggle={onDismiss}>
        Items added to cart!
      </Alert>
      <Item />
      <PriceAndQuantity />
      <QuantityCounter count={count} handleClick={handleClick} />
      <AddToCart onDismiss={onDismiss} />
    </div>
  );
};

export default AddItemContainer;
