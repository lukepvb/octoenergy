import React from 'react';
import Item from '../components/Item';
import PriceAndQuantity from '../components/PriceAndQuantity';
import QuantityCounter from '../components/QuantityCounter';
import AddToCart from '../components/AddToCart';
import '../assets/styles.css';

const AddItemContainer = (props) => {
  return (
    <div className="add-item-container">
      <Item />
      <PriceAndQuantity />
      <QuantityCounter />
      <AddToCart />
    </div>
  );
};

export default AddItemContainer;
