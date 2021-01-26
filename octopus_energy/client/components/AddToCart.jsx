import React from 'react';
import '../assets/styles.css';

const AddToCart = (props) => {
  return (
    <button className="add-to-cart" onClick={() => props.onDismiss()}>
      <strong>Add to cart</strong>
    </button>
  );
};

export default AddToCart;
