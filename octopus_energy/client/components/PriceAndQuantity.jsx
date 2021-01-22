import React from 'react';
import '../assets/styles.css';

const PriceAndQuantity = (props) => {
  return (
    <div className="price-and-quantity">
      <div className="price">
        <strong>
          <h2>
            <strong>
              <strong>€12.99</strong>
            </strong>
          </h2>
        </strong>
      </div>

      <div className="quantity-in-pack">
        <h5>Pack of 4</h5>
        <h5>32w bayonet bulbs</h5>
      </div>
    </div>
  );
};

export default PriceAndQuantity;
