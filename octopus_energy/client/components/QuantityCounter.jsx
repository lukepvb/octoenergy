import React from 'react';
import '../assets/styles.css';

const QuantityCounter = (props) => {
  let { count } = props;

  return (
    <div className="quantity-counter">
      <h4>
        <strong>Quantity</strong>
        {'       '}
        {count}
      </h4>
      <div className="buttons">
        <button
          className="minus-button"
          onClick={() => props.handleClick('decrement', count)}
        >
          <strong>-</strong>
        </button>
        <button
          className="plus-button"
          onClick={() => props.handleClick('increment', count)}
        >
          <strong>+</strong>
        </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
