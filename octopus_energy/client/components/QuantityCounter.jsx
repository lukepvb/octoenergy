import React from 'react';
import '../assets/styles.css';

const QuantityCounter = (props) => {
  return (
    <div className="quantity-counter">
      <h4>
        <strong>Quantity</strong> 1
      </h4>
      <div className="buttons">
        <button className="minus-button">
          <strong>-</strong>
        </button>
        <button className="plus-button">
          <strong>+</strong>
        </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
